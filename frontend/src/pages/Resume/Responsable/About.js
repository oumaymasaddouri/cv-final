import React, { useState } from "react";
import "../Popup.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const About = ({ handleModal }) => {
  const AboutMe = JSON.parse(localStorage.getItem("Data")).AboutMe.value;
  const [about, setAbout] = useState({
    value: AboutMe,
  });

  const handleChange = (e) => {
    setAbout({ ...about, value: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let Data = JSON.parse(localStorage.getItem("Data"));
    Data.AboutMe.value = about.value;
    localStorage.setItem("Data", JSON.stringify(Data));
    handleModal();
    window.location.reload();
  };

  return (
    <div className='modal-bg'>
      <div className='modal-container'>
        <div className='modal-title'>
          <h3>À Propos de moi:</h3>
          <span onClick={handleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <hr />
        <div className='modal-body'>
          <form onSubmit={handleSubmit}>
            <textarea
              style={{ height: "100px" }}
              className='form-control mb-3'
              value={about.value}
              onChange={handleChange}
            />
            <button type='submit' className='btn btn-success'>
              Modifier
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default About;
