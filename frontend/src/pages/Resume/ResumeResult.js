import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import { useTransition, animated } from "react-spring";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";

import "./ResumeFinal.css";

import BtnsHolder from "./BtnsHolder";

let useClickOutside = (handler) => {
  let domNode = useRef();

  useEffect(() => {
    let maybeHandler = (event) => {
      if (!domNode.current.contains(event.target)) {
        handler();
      }
    };

    document.addEventListener("mousedown", maybeHandler);

    return () => {
      document.removeEventListener("mousedown", maybeHandler);
    };
  });

  return domNode;
};

const ResumeResult = () => {
  let AboutMe = JSON.parse(localStorage.getItem("AboutMe"));
  let Competances = JSON.parse(localStorage.getItem("Competances")) || [];
  let Langues = JSON.parse(localStorage.getItem("Langues")) || [];
  let Diplomes = JSON.parse(localStorage.getItem("Diplomes")) || [];
  let Stages = JSON.parse(localStorage.getItem("Stages")) || [];
  let Cv = JSON.parse(localStorage.getItem("Cv"));

  let User = JSON.parse(localStorage.getItem("User"));

  const Header = {
    name: User.name,
    lastName: User.lastName,
    email: User.email,
    ProfileImg: User.ProfileImg,
    Adress: User.Adress,
    Parcour: Cv.Parcour,
    estRedoublant: Cv.estRedoublant,
    Tel: User.Tel,
  };

  const DiplomeBac = {
    key: Diplomes.length,
    Etabliss: Cv.EtablissBac,
    Mention: Cv.BacMention,
    Date: Cv.DateBac,
    Titre: `Baccalauréat ${Cv.Spec}`,
  };

  Diplomes.push(DiplomeBac);

  const CvData = {
    token: localStorage.getItem("token"),
    Header,
    Diplomes,
    Stages,
    Competences: Competances,
    AboutMe,
    Langues,
  };

  localStorage.setItem("CvData", JSON.stringify(CvData));

  const UserImage = `https://isetn-api-cv.herokuapp.com/api/v1/img/${User.ProfileImg}`;

  const [toggle, setToggle] = useState(false);

  const handleToggle = (e) => {
    e.preventDefault();
    setToggle(!toggle);
  };

  const transition = useTransition(toggle, {
    from: { left: "-100%" },
    enter: { left: "0%" },
    leave: { left: "-100%" },
  });

  let domNode = useClickOutside(() => {
    setToggle(false);
  });

  return (
    <div style={{ paddingBottom: "5rem" }}>
      <Navbar />
      {transition((styles, slidebar) =>
        slidebar ? (
          <animated.div ref={domNode} style={styles} className='slidebar'>
            <BtnsHolder />
          </animated.div>
        ) : (
          ""
        ),
      )}
      <div className='container d-flex flex-column align-items-center mt-4'>
        <div>
          <button
            onClick={handleToggle}
            className='button mb-2'
            style={{ width: "200px" }}
          >
            Options / Déposer
          </button>
        </div>
        <div className='paper'>
          {
            <div className='paper-header'>
              {User.ProfileImg && (
                <div className='image-holder'>
                  <img src={UserImage} className='cv-img' />
                </div>
              )}
              <div className='header-info'>
                <h5>
                  {User.name} {User.lastName}
                </h5>
                <h6>Etudiant stagiaire</h6>
                {
                  <p style={{ fontSize: "14px" }}>
                    Etudiant de l'Institut Supérieur des Études Technologiques
                    de Nabeul suivre le parcour "{Cv.Parcour}"
                  </p>
                }
              </div>

              <div className='header-contact'>
                <h6>
                  <FontAwesomeIcon icon={faEnvelope} /> {User.email}
                </h6>
                <h6>
                  <FontAwesomeIcon icon={faPhone} /> {User.Tel}
                </h6>
                <h6>
                  <FontAwesomeIcon icon={faMapMarkedAlt} /> {User.Adress}
                </h6>
              </div>
            </div>
          }
          <div className='paper-body '>
            <div className='section1'>
              <div className='component'>
                {/* À Propos de moi */}
                <h5>À Propos de moi</h5>
                <div className='cv-title'>
                  <div className='cube'></div>
                </div>
                <div className='text'>
                  {AboutMe !== null && <p>{AboutMe.value}</p>}
                </div>
              </div>
              {/* Parcours Scolaire */}
              <div className='component'>
                <h5>Parcours scolaire</h5>
                <div className='cv-title'>
                  <div className='cube'></div>
                </div>
                <ul>
                  {Diplomes &&
                    Diplomes.map((Diplome) => {
                      return (
                        <li key={Diplome.key} className='item'>
                          <h6>{Diplome.Titre}</h6>
                          <p className='text-diplome'>
                            {Diplome.Etabliss} {Diplome.Date} <br />
                            <span>Mention :</span> {Diplome.Mention}
                          </p>
                        </li>
                      );
                    })}
                </ul>
              </div>
              {/* Experiences */}
              <div className='componenet'>
                <h5>Expérience professionnelle</h5>
                <div className='cv-title'>
                  <div className='cube'></div>
                </div>
                <ul>
                  {Stages &&
                    Stages.map((Stage) => {
                      return (
                        <li key={Stage.key} className='item'>
                          <h6>Stage {Stage.NatureStage}</h6>
                          <p className='text-diplome'>
                            {Stage.Entreprise} <br /> {Stage.DateDemarageMois}{" "}
                            {Stage.DateDemarageYear} - {Stage.DateFinMois}{" "}
                            {Stage.DateFinYear}
                            <br />
                            <span>Mission :</span> {Stage.Mission}
                          </p>
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
            <div className='section2'>
              {/* Skills */}
              <div className='component'>
                <h5>Competences</h5>
                <div className='cv-title'>
                  <div className='cube'></div>
                </div>

                <ul className='item skills'>
                  {Competances !== null &&
                    Competances.map((Cmpt) => {
                      return (
                        <li
                          style={{ textTransform: "capitalize" }}
                          key={Cmpt.key}
                        >
                          {Cmpt.value}
                        </li>
                      );
                    })}
                </ul>
              </div>
              {/* Languages */}
              <div className='component'>
                <h5>Langues</h5>
                <div className='cv-title'>
                  <div className='cube'></div>
                </div>
                <ul className='item langues'>
                  {Langues !== null &&
                    Langues.map((Langue) => {
                      return (
                        <li
                          style={{ textTransform: "capitalize" }}
                          key={Langue.key}
                        >
                          {Langue.Langue}: {Langue.Niveau}
                        </li>
                      );
                    })}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className='lower'>
          <button
            onClick={handleToggle}
            className='button mb-2'
            style={{ width: "200px" }}
          >
            Options / Déposer
          </button>
        </div>
      </div>
    </div>
  );
};

export default ResumeResult;
