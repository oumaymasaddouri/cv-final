import { useState } from "react";
import { Link } from "react-router-dom";
import {
  faArrowRight,
  faArrowLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "../Navbar";

import skill from "../../assets/undraw_certificate.svg";

import AddCmptPopup from "./AddCmptPopup";
import AddLangPopup from "./AddLangPopup";
import "./Resume.css";

const ResumeCmpt = () => {
  const [openModalCmpt, setOpenModalCmpt] = useState(false);
  const [openModalLang, setOpenModalLang] = useState(false);

  const handleModalCmpt = (e) => {
    setOpenModalCmpt(!openModalCmpt);
  };

  const handleModalLang = (e) => {
    setOpenModalLang(!openModalLang);
  };

  let Cmpts = JSON.parse(localStorage.getItem("Competances"));
  let Langs = JSON.parse(localStorage.getItem("Langues"));

  const CmptDelete = (e) => {
    e.preventDefault();
    const idx = Cmpts.findIndex((C) => C.value === e.target.id);
    const removedItem = Cmpts.splice(idx, 1);

    localStorage.setItem("Competances", JSON.stringify(Cmpts));
    window.location.reload();
  };

  const LangDelete = (e) => {
    e.preventDefault();
    const idx = Langs.findIndex((L) => L.Langue === e.target.id);
    const removedItem = Langs.splice(idx, 1);

    localStorage.setItem("Langues", JSON.stringify(Langs));
    window.location.reload();
  };

  return (
    <div>
      <Navbar />
      <div className='container'>
        <div className='row'>
          <div className='col-md-5 mt-5'>
            <h3 className='mb-4' style={{ marginRight: "30px" }}>
              Quelles sont vos compétences ?{" "}
            </h3>
            <button
              onClick={handleModalCmpt}
              style={{ width: "200px" }}
              className='btn btn-outline-success'
            >
              Ajouter Competances
            </button>
            {openModalCmpt && <AddCmptPopup handleModal={handleModalCmpt} />}
            {/* PlaceHolder for the skills */}
            {Cmpts !== null && <h4 className='mt-3'>Competances:</h4>}
            <ul>
              {Cmpts !== null &&
                Cmpts.map((Cmpt) => {
                  return (
                    <li
                      style={{
                        textTransform: "capitalize",
                      }}
                      className='delete_hover'
                      key={Cmpt.key}
                      id={Cmpt.value}
                      onClick={CmptDelete}
                    >
                      {" "}
                      {Cmpt.value}{" "}
                      <span>
                        <FontAwesomeIcon icon={faTimes} />{" "}
                      </span>
                    </li>
                  );
                })}
            </ul>
            <h3
              style={{
                borderTop: "1px solid black",
                marginRight: "30px",
                paddingTop: "10px",
              }}
              className='mt-5 mb-4'
            >
              Quelles sont les langues que vous parlez ?{" "}
            </h3>
            <button
              onClick={handleModalLang}
              style={{ width: "200px" }}
              className='btn btn-outline-success'
            >
              Ajouter Langues
            </button>
            {Langs !== null && <h4 className='mt-3'>Langues:</h4>}
            <ul>
              {Langs !== null &&
                Langs.map((Lang) => {
                  return (
                    <li
                      style={{
                        textTransform: "capitalize",
                      }}
                      className='delete_hover'
                      onClick={LangDelete}
                      key={Lang.key}
                      id={Lang.Langue}
                    >
                      {Lang.Langue}: {Lang.Niveau}{" "}
                      <span>
                        <FontAwesomeIcon icon={faTimes} />{" "}
                      </span>
                    </li>
                  );
                })}
            </ul>
            {openModalLang && <AddLangPopup handleModal={handleModalLang} />}
            <div
              className='d-flex justify-content-center mt-5 mb-5'
              style={{ borderTop: "1px solid black", marginRight: "30px" }}
            >
              <Link to='/resume/experience'>
                <button
                  style={{ width: "130px", marginTop: "30px" }}
                  className='btn btn-outline-success'
                >
                  <FontAwesomeIcon icon={faArrowLeft} /> Precedent
                </button>
              </Link>
              <Link to='/resume/diplome'>
                <button
                  style={{
                    marginLeft: "10px",
                    width: "130px",
                    marginTop: "30px",
                  }}
                  className='btn btn-outline-success'
                >
                  Suivant <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </div>
          </div>
          <div className='col-md-7 unDrawContainer'>
            <img className='unDrawCmpt' src={skill} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeCmpt;
