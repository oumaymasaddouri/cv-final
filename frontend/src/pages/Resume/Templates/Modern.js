import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
  faBookOpen,
  faGraduationCap,
  faBriefcase,
  faCode,
  faLanguage,
} from "@fortawesome/free-solid-svg-icons";
import "./Modern.css";

const Modern = ({ Data, PrintRef }) => {
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
      <div ref={PrintRef} className='modern'>
        <div className='section-1'>
          {Data.Header.ProfileImg && (
            <div className='image-holder-modern'>
              <img src={ImageUrl} className='cv-img-modern' />
            </div>
          )}
          <div className='contact-modern mt-2'>
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
          <hr />
          <div className='item'>
            <div className='title-modern' style={{ textAlign: "center" }}>
              <h4>Competences</h4>
            </div>
            <div className='container'>
              <div className='row justify-content-center'>
                {Data.Competences.map((Cmpt) => {
                  return (
                    <span key={Cmpt.key} className='skill-modern col-auto'>
                      <span>{Cmpt.value}</span>
                    </span>
                  );
                })}
              </div>
            </div>
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
          <hr />

          <div className='item'>
            <div className='title-modern' style={{ textAlign: "center" }}>
              <h5>Langues parlées</h5>
            </div>
            <div>
              {Data.Langues.map((Langue) => {
                return (
                  <div className='tongue-modern' key={Langue.key}>
                    <span>
                      <span style={{ fontWeight: "bold" }}>
                        {Langue.Langue}
                      </span>
                      : {Langue.Niveau}{" "}
                    </span>
                  </div>
                );
              })}
            </div>
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

        <div>
          {/* BODY */}
          <div className='body-modern'>
            <div className='header-info-modern'>
              <h5>
                {Data.Header.name} {Data.Header.lastName}
              </h5>
              <h6>Etudiant stagiaire</h6>
              {
                <p>
                  Etudiant de l'Institut Supérieur des Études Technologiques de
                  Nabeul suivre le parcour {Data.Header.Parcour}
                </p>
              }
            </div>
            <div>
              <div className='item'>
                <div className='title-modern'>
                  <h4>À Propos de moi</h4>
                </div>
                <hr style={{ width: "90%" }} />
                <div className='text-modern' style={{ marginLeft: "20px" }}>
                  {Data.AboutMe.value}
                </div>
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
              <div className='item'>
                <div className='title-modern'>
                  <h4>Parcours scolaire</h4>
                </div>
                <hr style={{ width: "90%" }} />
                <div>
                  {Data.Diplomes.map((D) => {
                    return (
                      <div key={D.key} className='modern-diplome mb-3'>
                        <div>
                          <h6>
                            <span>{D.Titre}</span>
                          </h6>
                          <p className='text-modern'>
                            {D.Etabliss} {D.Date} <br />
                            <span>Mention :</span> {D.Mention}
                          </p>
                        </div>
                      </div>
                    );
                  })}
                </div>
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
              <div className='item'>
                <div className='title-modern'>
                  <h4>Expérience professionnelle</h4>
                </div>
                <hr style={{ width: "90%" }} />
                <div>
                  {Data.Stages.map((Stage) => {
                    return (
                      <div key={Stage.key} className='modern-diplome mb-3'>
                        <div>
                          <h6 className=''>
                            <span>Stage {Stage.NatureStage}</span>{" "}
                          </h6>
                          <p className='text-modern'>
                            {Stage.Entreprise} <br /> {Stage.DateDemarageMois}{" "}
                            {Stage.DateDemarageYear} - {Stage.DateFinMois}{" "}
                            {Stage.DateFinYear}
                            <br />
                            <span>Mission :</span> {Stage.Mission}
                          </p>
                        </div>
                      </div>
                    );
                  })}
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

              {/* SECTION 2 */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modern;
