import React, { useState } from "react";

import "../ResponsableView.css";

import Skills from "./Skills";
import Languages from "./Languages";
import Experience from "./Experience";
import Diplome from "./Diplome";
import About from "./About";

const Btns = () => {
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

  return (
    <div className='d-flex flex-column'>
      <div className='add-btns d-flex flex-column'>
        <button
          onClick={handleModalAbout}
          style={{ width: "200px", marginBottom: "10px" }}
          className='button'
        >
          À Propos de moi
        </button>
        <button
          onClick={handleModalDip}
          style={{ width: "200px", marginBottom: "10px" }}
          className='button'
        >
          Modifier Diplome
        </button>
        <button
          onClick={handleModalExp}
          style={{ width: "200px", marginBottom: "10px" }}
          className='button'
        >
          Modifier Experience
        </button>
        <button
          onClick={handleModalCmpt}
          style={{ width: "200px", marginBottom: "10px" }}
          className='button'
        >
          Modifier Competence
        </button>
        <button
          onClick={handleModalLang}
          style={{ width: "200px" }}
          className='button'
        >
          Modifier Langue
        </button>
        {openCmpt && <Skills handleModal={handleModalCmpt} />}
        {openDip && <Diplome handleModal={handleModalDip} />}
        {openExp && <Experience handleModal={handleModalExp} />}
        {openLang && <Languages handleModal={handleModalLang} />}
        {openAbout && <About handleModal={handleModalAbout} />}
      </div>
    </div>
  );
};

export default Btns;
