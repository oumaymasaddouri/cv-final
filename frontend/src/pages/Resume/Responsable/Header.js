import React, { useState } from "react";
import "./../Popup.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Header = ({ handleModal }) => {
  //   const [] = useState();

  // const handleChange = (e) => {
  //     setSkill({ ...skill, value: e.target.value });
  //   };

  // const handleSubmit = (e) => {
  //     e.preventDefault();
  // }

  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div className="modal-title">
          <h3>Entéte:</h3>
          <span onClick={handleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <hr />
        <div className="modal-body">
          <form></form>
        </div>
      </div>
    </div>
  );
};

export default Header;
