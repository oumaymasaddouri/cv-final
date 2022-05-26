import React, { useState } from "react";
import "./Popup.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AddExpPopup = ({ handleModal }) => {
  const [exp, setExp] = useState({
    key: 0,
    NatureStage: "Initiation",
    DateDemarageMois: "Janvier",
    DateDemarageYear: "2021",
    DateFinMois: "Janvier",
    DateFinYear: "2021",
    Entreprise: "",
    Mission: "",
  });

  const [months, setMonths] = useState([
    { key: 0, value: "Janvier" },
    { key: 1, value: "Février" },
    { key: 2, value: "Mars" },
    { key: 3, value: "Avril" },
    { key: 4, value: "Mai" },
    { key: 5, value: "Juin" },
    { key: 6, value: "Juillet" },
    { key: 7, value: "Août " },
    { key: 8, value: "Septembre" },
    { key: 9, value: "Octobre" },
    { key: 10, value: "Novembre " },
    { key: 11, value: "Décembre" },
  ]);

  const [years, setYears] = useState([
    { key: 0, value: "2011" },
    { key: 1, value: "2012" },
    { key: 2, value: "2013" },
    { key: 3, value: "2014" },
    { key: 4, value: "2015" },
    { key: 5, value: "2016" },
    { key: 6, value: "2017" },
    { key: 7, value: "2018 " },
    { key: 8, value: "2019" },
    { key: 9, value: "2020" },
    { key: 10, value: "2021" },
    { key: 11, value: "2022" },
    { key: 12, value: "2023" },
    { key: 13, value: "2024" },
    { key: 14, value: "2025" },
    { key: 15, value: "2026" },
    { key: 16, value: "2027" },
  ]);

  const [typeStages, setTypeStages] = useState([
    "Initiation",
    "Perfectionnement",
    "PFE",
    "Ouvrier",
    "D'été",
  ]);

  const types = typeStages.map((types) => types);

  const handleChange = ({ currentTarget: input }) => {
    setExp({ ...exp, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    var stages = JSON.parse(localStorage.getItem("Stages"));
    if (stages === null) {
      stages = [];
    }
    exp.key = stages.length;
    stages.push(exp);
    localStorage.setItem("Stages", JSON.stringify(stages));
    handleModal();
  };

  return (
    <div className='modal-bg'>
      <div className='modal-container'>
        <div className='modal-title'>
          <h2>Ajouter expérience</h2>
          <span onClick={handleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <hr />
        <div className='modal-body'>
          <form onSubmit={handleSubmit}>
            <label>Nature du stage:</label>
            <select
              onChange={handleChange}
              defaultValue={exp.NatureStage}
              name='NatureStage'
              className='form-select mt-2'
            >
              {types.map((address, key) => (
                <option key={key} value={address}>
                  {address}
                </option>
              ))}
            </select>
            <label>Date du démarage:</label>
            <div className='d-flex'>
              <select
                name='DateDemarageMois'
                onChange={handleChange}
                defaultValue={exp.DateDemarageMois}
                style={{ width: "150px", marginRight: "10px" }}
                className='form-select mt-2'
              >
                {months.map((month) => (
                  <option key={month.key} value={month.value}>
                    {month.value}
                  </option>
                ))}
              </select>
              <select
                name='DateDemarageYear'
                onChange={handleChange}
                defaultValue={exp.DateDemarageYear}
                style={{ width: "150px" }}
                className='form-select mt-2'
              >
                {years.map((year) => (
                  <option key={year.key} value={year.value}>
                    {year.value}
                  </option>
                ))}
              </select>
            </div>

            <label>Date du Fin:</label>
            <div className='d-flex'>
              <select
                name='DateFinMois'
                onChange={handleChange}
                defaultValue={exp.DateFinMois}
                style={{ width: "150px", marginRight: "10px" }}
                className='form-select mt-2'
              >
                {months.map((month) => (
                  <option key={month.key} value={month.value}>
                    {month.value}
                  </option>
                ))}
              </select>
              <select
                name='DateFinYear'
                onChange={handleChange}
                defaultValue={exp.DateDemarageYear}
                style={{ width: "150px" }}
                className='form-select mt-2'
              >
                {years.map((year) => (
                  <option key={year.key} value={year.value}>
                    {year.value}
                  </option>
                ))}
              </select>
            </div>
            <label>Entreprise d'accueil</label>
            <input
              required
              name='Entreprise'
              onChange={handleChange}
              type='text'
              value={exp.Entreprise}
              placeholder="Entreprise d'accueil"
              className='form-control mt-2'
            />
            <label>Mission:</label>
            <textarea
              required
              name='Mission'
              onChange={handleChange}
              value={exp.Mission}
              placeholder='Mission'
              className='form-control mt-2'
            />

            <div className='mt-3 buttons-holder'>
              <button
                type='button'
                onClick={handleModal}
                style={{ width: "100px" }}
                className='btn btn-outline-danger'
              >
                Fermer
              </button>
              <button
                type='submit'
                style={{ width: "100px", marginLeft: "10px" }}
                className='btn btn-outline-success'
              >
                Ajouter
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddExpPopup;
