import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";
import "./ResponsableView.css";
import { axiosInstance } from "../../config";
import { useTransition, animated } from "react-spring";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEnvelope,
  faPhone,
  faMapMarkedAlt,
  faPlus,
} from "@fortawesome/free-solid-svg-icons";
import Btns from "./Responsable/Btns";
import { useNavigate } from "react-router-dom";

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

const ResponsableResume = () => {
  const Data = JSON.parse(localStorage.getItem("Data"));

  const ImageUrl = `https://isetn-api-cv.herokuapp.com/api/v1/img/${Data.Header.ProfileImg}`;

  const [CommentAboutMe, setCommentAboutMe] = useState({
    pos: "AboutMe",
    value: "",
  });

  const [CommentDiplomes, setCommentDiplomes] = useState({
    pos: "Diplomes",
    value: "",
  });

  const [CommentStages, setCommentStages] = useState({
    pos: "Stages",
    value: "",
  });

  const [CommentHeader, setCommentHeader] = useState({
    pos: "Header",
    value: "",
  });

  const [CommentCompetences, setCommentCompetences] = useState({
    pos: "Competences",
    value: "",
  });
  const [CommentLangues, setCommentLangues] = useState({
    pos: "Langues",
    value: "",
  });

  let Comments;

  if (JSON.parse(localStorage.getItem("Comments")) === null) {
    Comments = [];
  } else {
    Comments = JSON.parse(localStorage.getItem("Comments"));
  }

  const handleClickAM = (e) => {
    e.preventDefault();
    Comments.push(CommentAboutMe);
    localStorage.setItem("Comments", JSON.stringify(Comments));
    window.location.reload();
  };
  const handleClickD = (e) => {
    e.preventDefault();
    Comments.push(CommentDiplomes);
    localStorage.setItem("Comments", JSON.stringify(Comments));
    window.location.reload();
  };
  const handleClickH = (e) => {
    e.preventDefault();
    Comments.push(CommentHeader);
    localStorage.setItem("Comments", JSON.stringify(Comments));
    window.location.reload();
  };
  const handleClickS = (e) => {
    e.preventDefault();
    Comments.push(CommentStages);
    localStorage.setItem("Comments", JSON.stringify(Comments));
    window.location.reload();
  };
  const handleClickC = (e) => {
    e.preventDefault();
    Comments.push(CommentCompetences);
    localStorage.setItem("Comments", JSON.stringify(Comments));
  };
  const handleClickL = (e) => {
    e.preventDefault();
    Comments.push(CommentLangues);
    localStorage.setItem("Comments", JSON.stringify(Comments));
    window.location.reload();
  };

  const handleChangeAM = ({ currentTarget: input }) => {
    setCommentAboutMe({ ...CommentAboutMe, value: input.value });
  };
  const handleChangeC = ({ currentTarget: input }) => {
    setCommentCompetences({ ...CommentCompetences, value: input.value });
  };
  const handleChangeS = ({ currentTarget: input }) => {
    setCommentStages({ ...CommentStages, value: input.value });
  };
  const handleChangeD = ({ currentTarget: input }) => {
    setCommentDiplomes({ ...CommentDiplomes, value: input.value });
  };
  const handleChangeL = ({ currentTarget: input }) => {
    setCommentLangues({ ...CommentLangues, value: input.value });
  };
  const handleChangeH = ({ currentTarget: input }) => {
    setCommentHeader({ ...CommentHeader, value: input.value });
  };

  const Navigate = useNavigate();

  const UpdateResume = async (e) => {
    const newData = {
      AboutMe: Data.AboutMe,
      Competences: Data.Competences,
      Diplomes: Data.Diplomes,
      Langues: Data.Langues,
      Stages: Data.Stages,
      comments: Comments,
      ValidationDate: Date.now(),
    };
    const Url = `/api/v1/cv/${Data._id}`;
    try {
      await axiosInstance.patch(Url, newData);
    } catch (err) {
      console.log(err.message);
    }
    Navigate("/home");
    window.location.reload();
  };

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

  const CommentStorage = JSON.parse(localStorage.getItem("Comments"));
  return (
    <div className='pb-5'>
      <Navbar />

      {/* {toggle && (
        <div className='slidebar'>
          <Btns />
        </div>
      )} */}
      {transition((styles, slidebar) =>
        slidebar ? (
          <animated.div ref={domNode} style={styles} className='slidebar'>
            <Btns />
          </animated.div>
        ) : (
          ""
        ),
      )}

      <div className='container d-flex flex-column align-items-center mt-4'>
        <div className='nav-buttons'>
          <button
            onClick={handleToggle}
            className='button mb-2'
            style={{ width: "200px" }}
          >
            Options
          </button>
          <div className='mb-2'>
            <button
              onClick={UpdateResume}
              style={{ width: "200px" }}
              className='button'
            >
              Valider
            </button>
          </div>
        </div>
        <div className='paper'>
          {
            <div className='paper-header'>
              <div className='image-holder'>
                <img src={ImageUrl} className='cv-img' />
              </div>

              <div className='header-info'>
                <h5>
                  {Data.Header.name} {Data.Header.lastName}
                </h5>
                <h6>Etudiant stagiaire</h6>
                {
                  <p style={{ fontSize: "14px" }}>
                    Etudiant de l'Institut Supérieur des Études Technologiques
                    de Nabeul suivre le parcour {Data.Header.Parcour}
                  </p>
                }
                {CommentStorage &&
                  CommentStorage.map((C) => {
                    if (C.pos === "Header") {
                      return (
                        <div className='CMT bg-dark text-dark bg-opacity-25 mt-1 container pt-1 pb-1'>
                          <p className=''>/* {C.value} */</p>
                        </div>
                      );
                    }
                  })}

                <div className='d-flex mt-1'>
                  <input
                    onChange={handleChangeH}
                    value={CommentHeader.value}
                    type='text'
                    className='comment-input'
                    placeholder='{* Comment *}'
                  />
                  <button
                    style={{
                      borderRadius: "50%",
                      marginLeft: "5px",
                    }}
                    onClick={handleClickH}
                    className='btn btn-secondary'
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>

              <div className='header-contact'>
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
                  <div className='line'></div>
                </div>
                <div className='text'>{Data.AboutMe.value}</div>
                {CommentStorage &&
                  CommentStorage.map((C) => {
                    if (C.pos === "AboutMe") {
                      return (
                        <div className='CMT bg-dark text-dark bg-opacity-25 mt-1 container pt-1 pb-1'>
                          <p className=''>/* {C.value} */</p>
                        </div>
                      );
                    }
                  })}

                <div className='d-flex mt-1'>
                  <input
                    onChange={handleChangeAM}
                    value={CommentAboutMe.value}
                    type='text'
                    className='comment-input'
                    placeholder='{* Comment *}'
                  />
                  <button
                    style={{
                      borderRadius: "50%",
                      marginLeft: "5px",
                    }}
                    onClick={handleClickAM}
                    className='btn btn-secondary'
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
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
                {CommentStorage &&
                  CommentStorage.map((C) => {
                    if (C.pos === "Diplomes") {
                      return (
                        <div className='CMT bg-dark text-dark bg-opacity-25 mt-1 container pt-1 pb-1'>
                          <p className=''>/* {C.value} */</p>
                        </div>
                      );
                    }
                  })}

                <div className='d-flex mt-1'>
                  <input
                    onChange={handleChangeD}
                    value={CommentDiplomes.value}
                    type='text'
                    className='comment-input'
                    placeholder='{* Comment *}'
                  />
                  <button
                    style={{
                      borderRadius: "50%",
                      marginLeft: "5px",
                    }}
                    onClick={handleClickD}
                    className='btn btn-secondary'
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
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
                {CommentStorage &&
                  CommentStorage.map((C) => {
                    if (C.pos === "Stages") {
                      return (
                        <div className='CMT bg-dark text-dark bg-opacity-25 mt-1 container pt-1 pb-1'>
                          <p className=''>/* {C.value} */</p>
                        </div>
                      );
                    }
                  })}

                <div className='d-flex mt-1'>
                  <input
                    onChange={handleChangeS}
                    value={CommentStages.value}
                    type='text'
                    className='comment-input'
                    placeholder='{* Comment *}'
                  />
                  <button
                    style={{
                      borderRadius: "50%",
                      marginLeft: "5px",
                    }}
                    onClick={handleClickS}
                    className='btn btn-secondary'
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
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
                {CommentStorage &&
                  CommentStorage.map((C) => {
                    if (C.pos === "Competences") {
                      return (
                        <div className='CMT bg-dark text-dark bg-opacity-25 mt-1 container pt-1 pb-1'>
                          <p className=''>/* {C.value} */</p>
                        </div>
                      );
                    }
                  })}

                <div className='d-flex mt-1'>
                  <input
                    onChange={handleChangeC}
                    value={CommentCompetences.value}
                    type='text'
                    className='comment-input-sm'
                    placeholder='{* Comment *}'
                  />
                  <button
                    style={{
                      borderRadius: "50%",
                      marginLeft: "5px",
                    }}
                    onClick={handleClickC}
                    className='btn btn-secondary'
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
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
                {CommentStorage &&
                  CommentStorage.map((C) => {
                    if (C.pos === "Langues") {
                      return (
                        <div className='CMT bg-dark text-dark bg-opacity-25 mt-1 container pt-1 pb-1'>
                          <p className=''>/* {C.value} */</p>
                        </div>
                      );
                    }
                  })}

                <div className='d-flex mt-1'>
                  <input
                    onChange={handleChangeL}
                    value={CommentLangues.value}
                    type='text'
                    className='comment-input-sm'
                    placeholder='{* Comment *}'
                  />
                  <button
                    style={{
                      borderRadius: "50%",
                      marginLeft: "5px",
                    }}
                    onClick={handleClickL}
                    className='btn btn-secondary'
                  >
                    <FontAwesomeIcon icon={faPlus} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className='nav-buttons lower'>
          <button
            onClick={handleToggle}
            className='button mb-2'
            style={{ width: "200px" }}
          >
            Options
          </button>
          <div className='mb-2'>
            <button
              onClick={UpdateResume}
              style={{ width: "200px" }}
              className='button'
            >
              Valider
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResponsableResume;
