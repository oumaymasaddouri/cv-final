import React, { useState } from "react";
import "./Popup.css";
import "./SmallPopup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AboutMePopup = ({ handleModal }) => {
  const [about, setAbout] = useState({
    key: 0,
    value: "",
  });

  const handleChange = (e) => {
    setAbout({ ...about, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("AboutMe", JSON.stringify(about));
    console.log(JSON.parse(localStorage.getItem("AboutMe")));
    handleModal();
    window.location.reload();
  };
  return (
    <div className='modal-bg'>
      <div className='sm-modal-container'>
        <div className='modal-title'>
          <h4>À Propos de vous:</h4>
          <span onClick={handleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <hr />
        <div className='modal-body'>
          <form onSubmit={handleSubmit}>
            <label>Competance:</label>
            <textarea
              required
              style={{ marginTop: ".5rem" }}
              className='form-control'
              value={about.value}
              onChange={handleChange}
              placeholder='dites-nous quelque chose sur vous, soyez bref. '
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

export default AboutMePopup;
