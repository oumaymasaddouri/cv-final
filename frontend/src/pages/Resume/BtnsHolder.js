import React, { useState } from "react";
import { axiosInstance } from "../../config";

import AddCmptPopup from "./AddCmptPopup";
import AddLangPopup from "./AddLangPopup";
import AddExpPopup from "./AddExpPopup";
import AddDiplomePopup from "./AddDiplomePopup";
import AboutMePopup from "./AboutMePopup";
import { useNavigate } from "react-router-dom";
import PostPopup from "./PostPopup";

const BtnsHolder = () => {
  const [openCmpt, setOpenCmpt] = useState(false);
  const [openLang, setOpenLang] = useState(false);
  const [openExp, setOpenExp] = useState(false);
  const [openDip, setOpenDip] = useState(false);
  const [openAbout, setOpenAbout] = useState(false);

  const handleModalCmpt = () => {
    setOpenCmpt(!openCmpt);
  };
  const handleModalLang = () => {
    setOpenLang(!openLang);
  };
  const handleModalExp = () => {
    setOpenExp(!openExp);
  };
  const handleModalDip = () => {
    setOpenDip(!openDip);
  };
  const handleModalAbout = () => {
    setOpenAbout(!openAbout);
  };

  const UserUpdate = async () => {
    const UserId = localStorage.getItem("id");
    const UpdatedData = {
      CvRight: false,
    };
    try {
      const URL_Update = `/api/v1/users/${UserId}`;
      const res = await axiosInstance.patch(URL_Update, UpdatedData);
      console.log("User Updated");
    } catch (err) {
      console.log(err.response);
    }
  };

  const [popup, setPopup] = useState(false);

  const handleSaveData = async (e) => {
    e.preventDefault();

    const data = JSON.parse(localStorage.getItem("CvData"));

    try {
      const URL = `/api/v1/cv/`;
      const res = await axiosInstance.post(URL, data);
      localStorage.setItem("CvRight", false);
      UserUpdate();
      setPopup(true);
    } catch (err) {
      console.log(err.response.data.message);
    }
  };
  return (
    <div className='d-flex flex-column'>
      <div className='add-btns d-flex flex-column'>
        <button
          onClick={handleSaveData}
          className=' button mb-2'
          style={{ width: "200px" }}
        >
          Déposer CV
        </button>
        {popup && <PostPopup />}
        <button
          onClick={handleModalAbout}
          className='  button mb-2'
          style={{ width: "200px" }}
        >
          À Propos de moi
        </button>
        <button
          onClick={handleModalDip}
          className='  button mb-2'
          style={{ width: "200px" }}
        >
          Ajouter Diplome
        </button>
        <button
          onClick={handleModalExp}
          className='  button mb-2'
          style={{ width: "200px" }}
        >
          Ajouter Experience
        </button>
        <button
          onClick={handleModalCmpt}
          className='  button mb-2'
          style={{ width: "200px" }}
        >
          Ajouter Competence
        </button>
        <button
          onClick={handleModalLang}
          className='  button mb-2'
          style={{ width: "200px" }}
        >
          Ajouter Langue
        </button>
        {openCmpt && <AddCmptPopup handleModal={handleModalCmpt} />}
        {openDip && <AddDiplomePopup handleModal={handleModalDip} />}
        {openExp && <AddExpPopup handleModal={handleModalExp} />}
        {openLang && <AddLangPopup handleModal={handleModalLang} />}
        {openAbout && <AboutMePopup handleModal={handleModalAbout} />}
      </div>
    </div>
  );
};

export default BtnsHolder;
