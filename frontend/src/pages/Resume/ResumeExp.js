import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faTimes } from "@fortawesome/free-solid-svg-icons";

import work from "../../assets/undraw_working.svg";
import "./Resume.css";
import Navbar from "../Navbar";

const ResumeExp = () => {
  const Navigate = useNavigate();

  const handleYes = (e) => {
    e.preventDefault();
    Navigate("/resume/addexperience");
  };

  const handleNo = (e) => {
    e.preventDefault();
    Navigate("/resume/competances");
  };
  return (
    <div>
      <Navbar />
      <form className='container mt-5'>
        <div className='row mt-5 d-flex justify-content-evenly'>
          <div className='col-md-5'>
            <div className='question'></div>
            <h1>Avez-vous une expérience de travail?</h1>
            <h6 className='text-muted'>
              Comprend les stages, les emplois d'été et les emplois non
              officiels
            </h6>
            <div
              style={{ marginTop: "3rem" }}
              className='d-flex justify-content-center'
            >
              <button
                style={{ width: "130px", height: "130px" }}
                className='btn btn-outline-success'
                onClick={handleYes}
              >
                <div style={{ fontSize: "50px" }}>
                  <FontAwesomeIcon icon={faCheck} />
                </div>
                <div>Oui</div>
              </button>
              <button
                style={{ marginLeft: "14px", width: "130px", height: "130px" }}
                className='btn btn-outline-success'
                onClick={handleNo}
              >
                <div style={{ fontSize: "50px" }}>
                  <FontAwesomeIcon icon={faTimes} />
                </div>
                <div>Non</div>
              </button>
            </div>
          </div>
          <div className='col-md-7 unDrawContainer'>
            <img className='unDrawExp' src={work} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResumeExp;
