import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import "./Popup.css";

const AddDiplomePopup = ({ handleModal }) => {
  const [diplome, setDiplome] = useState({
    key: 0,
    Titre: "",
    Etabliss: "",
    Date: "2020 - 2021",
    Mention: "Bien",
  });

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

  const handleChange = ({ currentTarget: input }) => {
    setDiplome({ ...diplome, [input.name]: input.value });
  };

  const [mentions, setMentions] = useState([
    { key: 0, value: "Assez bien" },
    { key: 1, value: "Bien" },
    { key: 2, value: "Trés bien" },
  ]);

  const handleSubmit = (e) => {
    let diplomes = JSON.parse(localStorage.getItem("Diplomes"));
    if (diplomes === null) {
      diplomes = [];
    }
    diplome.key = diplomes.length;
    diplomes.push(diplome);
    localStorage.setItem("Diplomes", JSON.stringify(diplomes));
    handleModal();
  };

  return (
    <div className='modal-bg'>
      <div className='modal-container'>
        <div className='modal-title '>
          <h2>Ajouter Diplôme</h2>
          <span onClick={handleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <hr />
        <div className='modal-body'>
          <form onSubmit={handleSubmit}>
            <label>Titre du diplôme:</label>
            <input
              required
              type='text'
              value={diplome.Titre}
              onChange={handleChange}
              className='form-control mb-3'
              name='Titre'
              placeholder='Titre du diplôme'
            />
            <label>Établissement d'obtention:</label>
            <input
              required
              type='text'
              value={diplome.Etabliss}
              onChange={handleChange}
              className='form-control mb-3'
              name='Etabliss'
              placeholder="Établissement d'obtention "
            />
            <label>Date d'obtention :</label>
            <select
              className='form-select responsive-btn'
              name='Date'
              defaultValue={diplome.Date}
              onChange={handleChange}
            >
              {dates.map((date) => (
                <option key={date.key} value={date.value}>
                  {date.value}
                </option>
              ))}
            </select>
            <label>Mention:</label>
            <select
              required
              defaultValue={diplome.Mention}
              onChange={handleChange}
              className='form-select responsive-btn mb-5'
              name='Mention'
            >
              {mentions.map((mention) => (
                <option key={mention.key} value={mention.value}>
                  {mention.value}
                </option>
              ))}
            </select>
            <hr />
            <div className=' buttons-holder'>
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

export default AddDiplomePopup;
