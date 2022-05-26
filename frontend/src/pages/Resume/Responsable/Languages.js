import React, { useState } from "react";
import "../Popup.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Languages = ({ handleModal }) => {
  const langues = JSON.parse(localStorage.getItem("Data")).Langues;
  const [Langues, setLangues] = useState(langues);

  const handleChange = (e) => {
    const newArr = [...Langues];
    newArr[e.target.id].Langue = e.target.value;
    setLangues(newArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let Data = JSON.parse(localStorage.getItem("Data"));
    Data.Langues = Langues;
    localStorage.setItem("Data", JSON.stringify(Data));
    handleModal();
    window.location.reload();
  };

  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div className="modal-title">
          <h3>Langues:</h3>
          <span onClick={handleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <hr />
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            <div className="d-flex flex-column">
              {Langues.map((L) => {
                return (
                  <div className="d-flex">
                    <label style={{ marginTop: "5px", marginRight: "10px" }}>
                      Langue:{" "}
                    </label>
                    <input
                      className="form-control mb-1"
                      value={L.Langue}
                      id={L.key}
                      onChange={handleChange}
                    />
                  </div>
                );
              })}
            </div>
            <button
              type="submit"
              style={{ width: "150px" }}
              className="btn btn-success mt-2"
            >
              Modifier
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Languages;
