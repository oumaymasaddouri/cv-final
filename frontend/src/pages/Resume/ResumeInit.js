import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import fileSync from "../../assets/undraw_file_synchronization.svg";
import "./Resume.css";

const ResumeInit = () => {
  const [header, setHeader] = useState({
    key: 0,
    Parcour: "Développement Web et Multimedia",
    estRedoublant: "Non",
    Spec: "Mathématiques",
    DateBac: "2010 - 2011",
    EtablissBac: "",
    BacMention: "Assez Bien",
  });

  const [parcours, setParcours] = useState([
    { key: 0, value: "Développement Web et Multimedia" },
    { key: 1, value: "Développement Systéme Informatique" },
    { key: 2, value: "Réseaux et Systéme Informatique" },
    { key: 3, value: "Systèmes Embarqués et Mobiles" },
    { key: 4, value: "Digital Markéting" },
    { key: 5, value: "Technologies de l’Informatique" },
  ]);

  const [dates, setDates] = useState([
    { key: 0, value: "2010 - 2011" },
    { key: 1, value: "2011 - 2012" },
    { key: 2, value: "2012 - 2013" },
    { key: 3, value: "2013 - 2014" },
    { key: 4, value: "2014 - 2015" },
    { key: 5, value: "2015 - 2016" },
    { key: 6, value: "2016 - 2017" },
    { key: 8, value: "2017 - 2018" },
    { key: 9, value: "2018 - 2019" },
    { key: 10, value: "2019 - 2020" },
    { key: 11, value: "2020 - 2021" },
    { key: 12, value: "2021 - 2022" },
    { key: 13, value: "2022 - 2023" },
    { key: 14, value: "2023 - 2024" },
    { key: 15, value: "2024 - 2025" },
    { key: 16, value: "2025 - 2026" },
    { key: 17, value: "2026 - 2027" },
    { key: 18, value: "2027 - 2028" },
  ]);

  const [BacSpec, setBacSpec] = useState([
    { key: 0, value: "Mathématiques" },
    { key: 1, value: "Sciences expérimentales" },
    { key: 2, value: "Économie et gestion" },
    { key: 3, value: "Sciences techniques" },
    { key: 4, value: "Sciences de l'informatique" },
  ]);

  const [mentions, setMentions] = useState([
    { key: 0, value: "Assez bien" },
    { key: 1, value: "Bien" },
    { key: 2, value: "Trés bien" },
  ]);

  const Navigate = useNavigate();

  const handleChange = ({ currentTarget: input }) => {
    setHeader({ ...header, [input.name]: input.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    localStorage.setItem("Cv", JSON.stringify(header));
    console.log(JSON.parse(localStorage.getItem("Cv")));
    Navigate("/resume/experience");
  };
  return (
    <div>

      <form onSubmit={handleSubmit} className='container mt-5 mb-5'>
        <div className='row d-flex justify-content-evenly'>
          <div className='col-md-4'>
            <h4>Quel est ton parcours d'étude ?</h4>
            <select
              required
              className='form-select responsive-btn mt-4'
              name='Parcour'
              onChange={handleChange}
              defaultValue={header.Parcour}
            >
              {parcours.map((parcour) => {
                return (
                  <option key={parcour.key} value={parcour.value}>
                    {parcour.value}
                  </option>
                );
              })}
            </select>
            <h4 className='mt-3'>As-tu redoublé une année ?</h4>
            <div className='mb-3'>
              <span className='radio oui'>
                <input
                  required
                  type='radio'
                  name='estRedoublant'
                  value='Oui'
                  onChange={handleChange}
                />
                Oui
              </span>
              <span className='radio non'>
                <input
                  required
                  type='radio'
                  name='estRedoublant'
                  value='Non'
                  onChange={handleChange}
                  defaultChecked
                />
                Non
              </span>
            </div>

            <h4>Informations liées au Bac :</h4>

            <label className='form-label'>Specialité:</label>
            <select
              className='form-select responsive-btn'
              name='Spec'
              onChange={handleChange}
              defaultValue={header.Spec}
            >
              {BacSpec.map((Spec) => (
                <option key={Spec.key} value={Spec.value}>
                  {Spec.value}
                </option>
              ))}
            </select>
            <label className='form-label'>Mention:</label>
            <select
              className='form-select responsive-btn'
              name='BacMention'
              onChange={handleChange}
              defaultValue={header.BacMention}
            >
              {mentions.map((M) => (
                <option key={M.key} value={M.value}>
                  {M.value}
                </option>
              ))}
            </select>
            <label className='form-label'>Etablissement d'obtention:</label>
            <input
              required
              type='text'
              className='form-control responsive-btn'
              name='EtablissBac'
              onChange={handleChange}
              value={header.EtablissBac}
              placeholder='Etablissement'
            />

            <label className='form-label'>Date d'obtention:</label>

            <select
              className='form-select responsive-btn'
              name='DateBac'
              onChange={handleChange}
              defaultValue={header.DateBac}
            >
              {dates.map((date) => (
                <option key={date.key} value={date.value}>
                  {date.value}
                </option>
              ))}
            </select>
            <Link to='/home'>
              <button
                className='btn btn-outline-success mt-4 '
                style={{ width: "49%", marginRight: "1%" }}
                type='button'
              >
               Annuler
              </button>
            </Link>

            <button
              className='btn btn-outline-success mt-4 '
              style={{ width: "49%" }}
              type='submit'
            >
              Suivant 
            </button>
          </div>
          <div className='col-md-7 unDrawContainer'>
            <img className='unDraw' src={fileSync} />
          </div>
        </div>
      </form>
    </div>
  );
};

export default ResumeInit;
