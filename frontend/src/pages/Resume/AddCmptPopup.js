import React, { useState } from "react";
import "./Popup.css";
import "./SmallPopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AddCmptPopup = ({ handleModal }) => {
  const [skill, setSkill] = useState({
    key: 0,
    value: "",
  });

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  const handleChange = (e) => {
    setSkill({ ...skill, value: e.target.value });
  };

  const handleSubmit = (e) => {
    var Cmpts = JSON.parse(localStorage.getItem("Competances"));
    if (Cmpts === null) {
      Cmpts = [];
    }
    skill.value = skill.value.toLowerCase();
    skill.key = Cmpts.length;
    Cmpts.push(skill);
    //
    const UniqueCmpts = getUniqueListBy(Cmpts, "value");
    //
    localStorage.setItem("Competances", JSON.stringify(UniqueCmpts));
    handleModal();
  };
  return (
    <div className='modal-bg'>
      <div className='sm-modal-container'>
        <div className='modal-title'>
          <h4>Ajouter Competances:</h4>
          <span onClick={handleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <hr />
        <div className='modal-body'>
          <form onSubmit={handleSubmit}>
            <label>Competance:</label>
            <input
              required
              style={{ width: "250px" }}
              className='form-control'
              value={skill.value}
              onChange={handleChange}
              type='text'
              placeholder='Competance'
            />
            <div className='mt-3 buttons-holder'>
              <button
                type='button'
                onClick={handleModal}
                style={{ width: "100px" }}
                className='btn btn-outline-danger'
              >
                Fermer
              </button>
              <button
                type='submit'
                style={{ width: "100px", marginLeft: "10px" }}
                className='btn btn-outline-success'
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCmptPopup;
