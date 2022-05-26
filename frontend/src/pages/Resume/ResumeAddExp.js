import { useState } from "react";
import Navbar from "../Navbar";
import AddExpPopup from "./AddExpPopup";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

import "./ExpMiniTemplate.css";
import { Link } from "react-router-dom";

const ResumeAddExp = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  let Exps = JSON.parse(localStorage.getItem("Stages") || "[]");

  const handleDelete = (e) => {
    e.preventDefault();
    const idx = Exps.findIndex((Exp) => Exp.key === Number(e.target.id));
    const removedExp = Exps.splice(idx, 1);

    localStorage.setItem("Stages", JSON.stringify(Exps));
    window.location.reload();
  };

  return (
    <div>
      <Navbar />
      <div className='container mt-5'>
        <div className='row mt-5'>
          <div className='col-md-4 mt-5'>
            <h1>Ajouter une nouvelle expérience.</h1>
            <br />
            <button
              onClick={handleModal}
              style={{ width: "200px" }}
              className='btn btn-outline-success'
            >
              Ajouter expériences
            </button>
            <br />
            <br />
            <div
              className='d-flex justify-content-center mt-5'
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
              <Link to='/resume/competances'>
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
            {openModal && <AddExpPopup handleModal={handleModal} />}
          </div>
          <div className='col-md-8 expCont'>
            <div>
              {Exps !== null && <h2>Experiences preview:</h2>}

              {Exps !== null &&
                Exps.map((Exp) => {
                  return (
                    <div key={Exp.key} className='experience d-flex'>
                      <div className='exp_date' style={{ width: "100px" }}>
                        <h6>
                          {Exp.DateDemarageMois} {Exp.DateDemarageYear}
                        </h6>
                        <h6>
                          {Exp.DateFinMois} {Exp.DateFinYear}
                        </h6>
                      </div>
                      <div className='exp_body'>
                        <h5 className='exp_title d-flex justify-content-between'>
                          <span>Stage de {Exp.NatureStage}</span>
                          <span
                            id={Exp.key}
                            onClick={handleDelete}
                            style={{ color: "red", cursor: "pointer" }}
                          >
                            <FontAwesomeIcon icon={faTimes} />{" "}
                          </span>
                        </h5>
                        <h6>{Exp.Entreprise}</h6>
                        <h6>
                          <span>Mission:</span>
                          {Exp.Mission}
                        </h6>
                      </div>
                    </div>
                  );
                })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAddExp;
