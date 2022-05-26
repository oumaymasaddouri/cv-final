import React, { useState } from "react";
import "../Popup.css";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./Model.css";

const Experience = ({ handleModal }) => {
  const Exps = JSON.parse(localStorage.getItem("Data")).Stages;

  const [exps, setExps] = useState(Exps);

  const handleChangeNS = (e) => {
    let newArr = [...exps];
    newArr[e.target.name].NatureStage = e.target.value;
    setExps(newArr);
  };

  const handleChangeEta = (e) => {
    let newArr = [...exps];
    newArr[e.target.name].Entreprise = e.target.value;
    setExps(newArr);
  };

  const handleChangeM = (e) => {
    let newArr = [...exps];
    newArr[e.target.name].Mission = e.target.value;
    setExps(newArr);
  };

  const handleChangeDDM = (e) => {
    let newArr = [...exps];
    newArr[e.target.name].DateDemarageMois = e.target.value;
    setExps(newArr);
  };

  const handleChangeDDY = (e) => {
    let newArr = [...exps];
    newArr[e.target.name].DateDemarageYear = e.target.value;
    setExps(newArr);
  };

  const handleChangeDFM = (e) => {
    let newArr = [...exps];
    newArr[e.target.name].DateFinMois = e.target.value;
    setExps(newArr);
  };

  const handleChangeDFY = (e) => {
    let newArr = [...exps];
    newArr[e.target.name].DateFinYear = e.target.value;
    setExps(newArr);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let Data = JSON.parse(localStorage.getItem("Data"));
    Data.Stages = exps;
    localStorage.setItem("Data", JSON.stringify(Data));
    handleModal();
    window.location.reload();
  };

  return (
    <div className="modal-bg">
      <div className="modal-container">
        <div className="modal-title">
          <h3>Experiences :</h3>
          <span onClick={handleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <hr />
        <div className="modal-body">
          <form onSubmit={handleSubmit}>
            {exps.map((e) => {
              return (
                <div
                  className="mb-2 pb-2"
                  style={{ borderBottom: "1px solid black" }}
                >
                  <div className="d-flex justify-content-between">
                    <input
                      style={{ width: "30%" }}
                      type="text"
                      value={e.NatureStage}
                      name={e.key}
                      onChange={handleChangeNS}
                      className="form-control"
                    />
                    <input
                      style={{ width: "68%" }}
                      type="text"
                      value={e.Entreprise}
                      onChange={handleChangeEta}
                      name={e.key}
                      className="form-control"
                    />
                  </div>
                  <textarea
                    className="form-control mt-1 mb-1"
                    value={e.Mission}
                    name={e.key}
                    onChange={handleChangeM}
                    style={{ width: "100%" }}
                  />
                  <div className="d-flex justify-content-between mt-1">
                    <h5 className="text-center" style={{ width: "40%" }}>
                      Date Debut:
                    </h5>
                    <input
                      type="text"
                      name={e.key}
                      className="form-control"
                      style={{ width: "29%" }}
                      value={e.DateDemarageMois}
                      onChange={handleChangeDDM}
                    />
                    <input
                      type="text"
                      name={e.key}
                      className="form-control"
                      style={{ width: "29%" }}
                      value={e.DateDemarageYear}
                      onChange={handleChangeDDY}
                    />
                  </div>
                  <div className="d-flex justify-content-between mt-1">
                    <h5 className="text-center" style={{ width: "40%" }}>
                      Date Fin:
                    </h5>
                    <input
                      type="text"
                      name={e.key}
                      className="form-control"
                      style={{ width: "29%" }}
                      value={e.DateFinMois}
                      onChange={handleChangeDFM}
                    />
                    <input
                      type="text"
                      name={e.key}
                      className="form-control"
                      style={{ width: "29%" }}
                      value={e.DateFinYear}
                      onChange={handleChangeDFY}
                    />
                  </div>
                </div>
              );
            })}
            <button
              type="submit"
              style={{ width: "150px" }}
              className="btn btn-success mt-2"
            >
              Modifier
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Experience;
