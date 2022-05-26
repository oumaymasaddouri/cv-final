import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import "../Popup.css";

const Skills = ({ handleModal }) => {
  let skills = JSON.parse(localStorage.getItem("Data")).Competences;

  const [Skills, setSkills] = useState(skills);

  const handleChange = (e) => {
    let newArr = [...Skills];
    newArr[e.target.id].value = e.target.value;
    setSkills(newArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let Data = JSON.parse(localStorage.getItem("Data"));
    Data.Competences = Skills;
    localStorage.setItem("Data", JSON.stringify(Data));
    handleModal();
    window.location.reload();
  };

  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div className="modal-title">
          <h3>Competences:</h3>
          <span onClick={handleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <hr />
        <div className="modal-body">
          <form onSubmit={handleSubmit} className="d-flex flex-column">
            {Skills.map((S) => {
              return (
                <div className="d-flex">
                  <label style={{ marginTop: "5px", marginRight: "10px" }}>
                    Competence:{" "}
                  </label>
                  <input
                    type="text"
                    className="form-control mb-1"
                    onChange={handleChange}
                    id={S.key}
                    value={S.value}
                  />
                </div>
              );
            })}
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

export default Skills;
