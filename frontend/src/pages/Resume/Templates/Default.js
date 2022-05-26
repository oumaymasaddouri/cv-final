import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
} from "@fortawesome/free-solid-svg-icons";
const Default = ({ Data, PrintRef }) => {
  const ImageUrl = `https://isetn-api-cv.herokuapp.com/api/v1/img/${Data.Header.ProfileImg}`;

  const handleDelete = (e) => {
    e.preventDefault();
    let array = Data.comments;

    const idx = array.findIndex((A) => A.pos === e.target.id);
    const removedExp = array.splice(idx, 1);

    Data.comments = array;
    localStorage.setItem("Data", JSON.stringify(Data));
    window.location.reload();
  };
  return (
    <div className='paper'>
      <div ref={PrintRef}>
        {
          <div className='paper-header'>
            {Data.Header.ProfileImg && (
              <div className='image-holder'>
                <img src={ImageUrl} className='cv-img' />
              </div>
            )}
            <div className='header-info'>
              <h5>
                {Data.Header.name} {Data.Header.lastName}
              </h5>
              <h6>Etudiant stagiaire</h6>
              {
                <p style={{ fontSize: "14px" }}>
                  Etudiant de l'Institut Supérieur des Études Technologiques de
                  Nabeul suivre le parcour {Data.Header.Parcour}
                </p>
              }
              {Data.comments.map((C) => {
                if (C.pos === "Header") {
                  return (
                    <div className='CMT bg-dark text-dark bg-opacity-25 mt-1 container pt-1 pb-1'>
                      <p className=''>/* {C.value} */</p>
                      <button
                        id={C.pos}
                        onClick={handleDelete}
                        className='btn btn-danger'
                      >
                        Supprimer
                      </button>
                    </div>
                  );
                }
              })}
            </div>

            <div className='header-contact d-flex  flex-column'>
              <h6>
                <FontAwesomeIcon icon={faEnvelope} /> {Data.Header.email}
              </h6>
              <h6>
                <FontAwesomeIcon icon={faPhone} /> {Data.Header.Tel}
              </h6>
              <h6>
                <FontAwesomeIcon icon={faMapMarkedAlt} /> {Data.Header.Adress}
              </h6>
            </div>
          </div>
        }
        <div className='paper-body d-flex'>
          <div className='section1'>
            <div className='component'>
              {/* À Propos de moi */}
              <h5>À Propos de moi</h5>
              <div className='cv-title'>
                <div className='cube'></div>
              </div>
              <div className='text'>{Data.AboutMe.value}</div>
              {Data.comments.map((C) => {
                if (C.pos === "AboutMe") {
                  return (
                    <div className='CMT bg-dark text-dark bg-opacity-25 mt-1 container pt-1 pb-1'>
                      <p className=''>/* {C.value} */</p>
                      <button
                        id={C.pos}
                        onClick={handleDelete}
                        className='btn btn-danger'
                      >
                        Supprimer
                      </button>
                    </div>
                  );
                }
              })}
            </div>
            {/* Parcours Scolaire */}
            <div className='component'>
              <h5>Parcours scolaire</h5>
              <div className='cv-title'>
                <div className='cube'></div>
              </div>
              <ul>
                {Data.Diplomes.map((D) => {
                  return (
                    <li key={D.key} className='item'>
                      <h6 className='d-flex justify-content-between'>
                        <span>{D.Titre}</span>
                      </h6>
                      <p className='test-diplome'>
                        {D.Etabliss} {D.Date} <br />
                        <span>Mention :</span> {D.Mention}
                      </p>
                    </li>
                  );
                })}
              </ul>
              {Data.comments.map((C) => {
                if (C.pos === "Diplomes") {
                  return (
                    <div className='CMT bg-dark text-dark bg-opacity-25 mt-1 container pt-1 pb-1'>
                      <p className=''>/* {C.value} */</p>
                      <button
                        id={C.pos}
                        onClick={handleDelete}
                        className='btn btn-danger'
                      >
                        Supprimer
                      </button>
                    </div>
                  );
                }
              })}
            </div>
            {/* Experiences */}
            <div className='componenet'>
              <h5>Expérience professionnelle</h5>
              <div className='cv-title'>
                <div className='cube'></div>
              </div>
              <ul>
                {Data.Stages.map((Stage) => {
                  return (
                    <li key={Stage.key} className='item'>
                      <h6 className='d-flex justify-content-between'>
                        <span>Stage {Stage.NatureStage}</span>{" "}
                      </h6>
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
              {Data.comments.map((C) => {
                if (C.pos === "Stages") {
                  return (
                    <div className='CMT bg-dark text-dark bg-opacity-25 mt-1 container pt-1 pb-1'>
                      <p className=''>/* {C.value} */</p>
                      <button
                        id={C.pos}
                        onClick={handleDelete}
                        className='btn btn-danger'
                      >
                        Supprimer
                      </button>
                    </div>
                  );
                }
              })}
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
                {Data.Competences.map((Cmpt) => {
                  return (
                    <li
                      style={{ textTransform: "capitalize" }}
                      key={Cmpt.key}
                      className=''
                    >
                      <span>{Cmpt.value}</span>
                    </li>
                  );
                })}
              </ul>
              {Data.comments.map((C) => {
                if (C.pos === "Competences") {
                  return (
                    <div className='CMT bg-dark text-dark bg-opacity-25 mt-1 container pt-1 pb-1'>
                      <p className=''>/* {C.value} */</p>
                      <button
                        id={C.pos}
                        onClick={handleDelete}
                        className='btn btn-danger'
                      >
                        Supprimer
                      </button>
                    </div>
                  );
                }
              })}
            </div>
            {/* Languages */}
            <div className='component'>
              <h5>Langues</h5>
              <div className='cv-title'>
                <div className='cube'></div>
              </div>
              <ul className='item langues'>
                {Data.Langues.map((Langue) => {
                  return (
                    <li
                      style={{ textTransform: "capitalize" }}
                      key={Langue.key}
                    >
                      <span>
                        {Langue.Langue}: {Langue.Niveau}{" "}
                      </span>
                    </li>
                  );
                })}
              </ul>
              {Data.comments.map((C) => {
                if (C.pos === "Langues") {
                  return (
                    <div className='CMT bg-dark text-dark bg-opacity-25 mt-1 container pt-1 pb-1'>
                      <p className=''>/* {C.value} */</p>
                      <button
                        id={C.pos}
                        onClick={handleDelete}
                        className='btn btn-danger'
                      >
                        Supprimer
                      </button>
                    </div>
                  );
                }
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Default;
