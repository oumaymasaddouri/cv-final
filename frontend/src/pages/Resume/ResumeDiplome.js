import React from "react";

import { useState } from "react";
import { Link } from "react-router-dom";
import {
  faArrowRight,
  faArrowLeft,
  faTimes,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Navbar from "../Navbar";
import Diploma from "../../assets/undraw_diploma.svg";
import "./Resume.css";
import AddDiplomePopup from "./AddDiplomePopup";

const ResumeDiplome = () => {
  const [openModal, setOpenModal] = useState(false);

  const handleModal = () => {
    setOpenModal(!openModal);
  };

  let Dips = JSON.parse(localStorage.getItem("Diplomes"));

  const handleDelete = (e) => {
    e.preventDefault();
    const idx = Dips.findIndex((dip) => dip.key === e.target.id);
    const removedItem = Dips.splice(idx, 1);

    localStorage.setItem("Diplomes", JSON.stringify(Dips));
    window.location.reload();
  };

  return (
    <div>
      <Navbar />
      <div className="container">
        <div className="row">
          <div className="col-md-5 mt-5">
            <div>
              <h2>Avez-vous un diplôme autre que le Bac ? </h2>
              <h5 className="text-muted">
                Sinon cliquez sur{" "}
                <span style={{ color: "#198754" }}>Suivant</span>
              </h5>
              <br />
              <button
                onClick={handleModal}
                style={{ width: "200px" }}
                className="btn btn-outline-success"
              >
                Ajouter diplôme
              </button>
              {openModal && <AddDiplomePopup handleModal={handleModal} />}
              {Dips !== null && (
                <ul style={{ borderTop: "1px solid black", marginTop: "30px" }}>
                  {Dips.length !== 0 &&
                    Dips.map((Dip) => {
                      return (
                        <li key={Dip.key} className="item">
                          <div className="d-flex justify-content-between">
                            <h6>{Dip.Titre}</h6>
                            <h6>
                              <span
                                id={Dip.key}
                                onClick={handleDelete}
                                style={{ color: "red", cursor: "pointer" }}
                              >
                                <FontAwesomeIcon icon={faTimes} />{" "}
                              </span>
                            </h6>
                          </div>
                          <p className="text-diplome">
                            {Dip.Etabliss} {Dip.Date} <br />
                            <span>Mention :</span> {Dip.Mention}
                          </p>
                        </li>
                      );
                    })}
                </ul>
              )}
            </div>
            <div
              className="d-flex justify-content-center mt-3"
              style={{ borderTop: "1px solid black" }}
            >
              <Link to="/resume/experience">
                <button
                  style={{ width: "130px", marginTop: "30px" }}
                  className="btn btn-outline-success"
                >
                  <FontAwesomeIcon icon={faArrowLeft} /> Precedent
                </button>
              </Link>
              <Link to="/resume/laststep">
                <button
                  style={{
                    marginLeft: "10px",
                    width: "130px",
                    marginTop: "30px",
                  }}
                  className="btn btn-outline-success"
                >
                  Suivant <FontAwesomeIcon icon={faArrowRight} />
                </button>
              </Link>
            </div>
          </div>
          <div className="col-md-7 unDrawContainer">
            <img src={Diploma} className="unDraw" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeDiplome;
