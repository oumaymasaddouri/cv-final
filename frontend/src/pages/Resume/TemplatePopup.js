import React from "react";

const TemplatePopup = ({ handleModal }) => {
  const Professional = (e) => {
    localStorage.setItem("Template", "Pro");
    handleModal();
  };
  const Default = (e) => {
    localStorage.setItem("Template", "Default");
    handleModal();
  };
  const Modern = (e) => {
    localStorage.setItem("Template", "Modern");
    handleModal();
  };
  const College = (e) => {
    localStorage.setItem("Template", "College");
    handleModal();
  };

  return (
    <div className='modal-bg'>
      <div className='modal-container'>
        <hr />
        <div className='d-flex flex-column text-center'>
          <div>
            <button
              style={{ width: "40%", margin: "5px" }}
              onClick={Professional}
              className='button'
            >
              Professional
            </button>
            <button
              style={{ width: "40%", margin: "5px" }}
              onClick={Default}
              className='button'
            >
              Défaut
            </button>
          </div>
          <div>
            <button
              style={{ width: "40%", margin: "5px" }}
              onClick={Modern}
              className='button'
            >
              Modern
            </button>
            <button
              style={{ width: "40%", margin: "5px" }}
              onClick={College}
              className='button'
            >
              College
            </button>
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default TemplatePopup;
