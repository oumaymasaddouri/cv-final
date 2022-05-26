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
import "./College.css";

const NewComponent = (
  <svg
    xmlns='http://www.w3.org/2000/svg'
    id='skills-t'
    width={22}
    height={20}
    viewBox='0 0 48 48'
  >
    <defs style={{}}>
      <style
        dangerouslySetInnerHTML={{
          __html: "\n            .cls-2{fill:#FFFFFF}\n        ",
        }}
      />
    </defs>
    <g id='Group_693' data-name='Group 693'>
      <path
        id='Path_2813'
        data-name='Path 2813'
        className='cls-2'
        d='m44.616 26.992-2.6-7.676a18.069 18.069 0 0 0-8.075-9.983 1.5 1.5 0 1 0-1.485 2.607 15.075 15.075 0 0 1 6.719 8.34l2.606 7.676a.227.227 0 0 1-.215.3H38.9a1.5 1.5 0 0 0-1.5 1.5v3.725h-1.954a1.5 1.5 0 0 0 0 3H37.4v1.59a.227.227 0 0 1-.227.227h-5.152a3.232 3.232 0 0 0-3.228 3.228v3.455a1.5 1.5 0 0 0 3 0v-3.454a.229.229 0 0 1 .228-.228h5.154a3.231 3.231 0 0 0 3.225-3.227v-6.815h1.159a3.226 3.226 0 0 0 3.055-4.265z'
      />
      <path
        id='Path_2814'
        data-name='Path 2814'
        className='cls-2'
        d='M14.773 34.123a1.5 1.5 0 0 0-2.46 1.717 23.865 23.865 0 0 0 4.193 4.591.285.285 0 0 1 .11.2v4.353a1.5 1.5 0 0 0 3 0v-4.355a3.261 3.261 0 0 0-1.186-2.5 20.8 20.8 0 0 1-3.657-4.006z'
      />
      <path
        id='Path_2815'
        data-name='Path 2815'
        className='cls-2'
        d='M26.148 4.96h-2.622a2.5 2.5 0 0 0-2.5 2.5v7.031a2.5 2.5 0 0 0 2.31 2.481v12.064a1.5 1.5 0 0 0 3 0V16.975a2.5 2.5 0 0 0 2.31-2.481V7.46a2.5 2.5 0 0 0-2.5-2.5zm-2.121 3h1.621v6.033h-1.621z'
      />
      <path
        id='Path_2816'
        data-name='Path 2816'
        className='cls-2'
        d='M9.576 25.956a2.538 2.538 0 1 1 4.179 1.937 1.5 1.5 0 1 0 1.945 2.285 5.527 5.527 0 0 0 .228-8.229v-8.4a5.528 5.528 0 0 0-.228-8.23A1.5 1.5 0 0 0 13.755 7.6a2.539 2.539 0 1 1-3.282 0A1.5 1.5 0 1 0 8.53 5.317a5.531 5.531 0 0 0-.314 8.15v8.561a5.532 5.532 0 0 0 .315 8.151 1.5 1.5 0 1 0 1.942-2.287 2.534 2.534 0 0 1-.897-1.936zM11.216 15a5.082 5.082 0 0 0 1.709.013v5.475a5.082 5.082 0 0 0-1.709.013z'
      />
    </g>
  </svg>
);

const College = ({ Data, PrintRef }) => {
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
        <div className='paper-header-college'>
          <div className='header-info-college'>
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
          {Data.Header.ProfileImg && (
            <div className='image-holder-college'>
              <img src={ImageUrl} className='cv-img-college' />
            </div>
          )}
          <div className='header-contact-college'>
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

        {/* BODY */}
        <div className='paper-body-pro'>
          {/* SECTION 1 */}
          <div className='section-pro'>
            <div className='item'>
              <div className='title-pro'>
                <div className='title-icon-college'>
                  <FontAwesomeIcon icon={faBookOpen} />
                </div>
                <h4>À Propos de moi</h4>
              </div>
              <div className='text-pro'>{Data.AboutMe.value}</div>
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
              <div className='title-pro'>
                <div className='title-icon-college'>
                  <FontAwesomeIcon icon={faGraduationCap} />
                </div>
                <h4>Parcours scolaire</h4>
              </div>
              <div>
                {Data.Diplomes.map((D) => {
                  return (
                    <div key={D.key} className='diplome'>
                      <div>
                        <h6>
                          <span>{D.Titre}</span>
                        </h6>
                        <p className='text-pro'>
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
              <div className='title-pro'>
                <div className='title-icon-college'>
                  <FontAwesomeIcon icon={faBriefcase} />
                </div>
                <h4>Expérience professionnelle</h4>
              </div>
              <div>
                {Data.Stages.map((Stage) => {
                  return (
                    <div key={Stage.key} className='diplome'>
                      <div>
                        <h6 className=''>
                          <span>Stage {Stage.NatureStage}</span>{" "}
                        </h6>
                        <p className='text-pro'>
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
          </div>
          {/* SECTION 2 */}
          <div className='colored'>
            <div className='item skills'>
              <div className='title-pro'>
                <div
                  style={{ paddingTop: "0px" }}
                  className='title-icon-college'
                >
                  {NewComponent}
                </div>
                <h4>Competences</h4>
              </div>
              <div className='container'>
                <div className='row justify-content-center'>
                  {Data.Competences.map((Cmpt) => {
                    return (
                      <span key={Cmpt.key} className='skill-college col-auto'>
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
            <div className='item skills'>
              <div className='title-pro'>
                <div className='title-icon-college'>
                  <FontAwesomeIcon icon={faLanguage} />
                </div>
                <h4>Langues parlées</h4>
              </div>
              <div>
                {Data.Langues.map((Langue) => {
                  return (
                    <div className='tongue' key={Langue.key}>
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
        </div>
      </div>
    </div>
  );
};

export default College;
