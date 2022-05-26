import React, { useState } from "react";
import "../Popup.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Diplome = ({ handleModal }) => {
  const Diplomes = JSON.parse(localStorage.getItem("Data")).Diplomes;
  const [diplomes, setDiplomes] = useState(Diplomes);

  const handleChangeTitre = (e) => {
    let newArr = [...diplomes];
    newArr[e.target.name].Titre = e.target.value;
    setDiplomes(newArr);
  };
  const handleChangeEtabliss = (e) => {
    let newArr = [...diplomes];
    newArr[e.target.name].Etabliss = e.target.value;
    setDiplomes(newArr);
  };
  const handleChangeDate = (e) => {
    let newArr = [...diplomes];
    newArr[e.target.name].Date = e.target.value;
    setDiplomes(newArr);
  };
  const handleChangeMention = (e) => {
    let newArr = [...diplomes];
    newArr[e.target.name].Mention = e.target.value;
    setDiplomes(newArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let Data = JSON.parse(localStorage.getItem("Data"));
    Data.Diplomes = diplomes;
    localStorage.setItem("Data", JSON.stringify(Data));
    handleModal();
    window.location.reload();
  };

  return (
    <div className='modal-bg'>
      <div className='modal-container'>
        <div className='modal-title'>
          <h3>Parcours Scolaire:</h3>
          <span onClick={handleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <hr />
        <div className='modal-body'>
          <form onSubmit={handleSubmit}>
            {diplomes.map((e) => {
              return (
                <div
                  style={{
                    borderBottom: "1px solid black",
                    marginBottom: "10px",
                    paddingBottom: "10px",
                  }}
                >
                  <input
                    name={e.key}
                    value={e.Titre}
                    onChange={handleChangeTitre}
                    className='form-control'
                  />
                  <div className='d-flex flex-row justify-content-between mt-1 mb-1'>
                    <input
                      name={e.key}
                      value={e.Date}
                      onChange={handleChangeDate}
                      className='form-control'
                    />
                    <input
                      name={e.key}
                      onChange={handleChangeMention}
                      value={e.Mention}
                      className='form-control'
                    />
                  </div>
                  <input
                    name={e.key}
                    value={e.Etabliss}
                    onChange={handleChangeEtabliss}
                    className='form-control'
                  />
                </div>
              );
            })}
            <button type='submit' className='btn btn-success'>
              Modifier
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Diplome;
