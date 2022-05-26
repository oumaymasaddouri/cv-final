import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const AddLangPopup = ({ handleModal }) => {
  const [lang, setLang] = useState({
    key: 0,
    Langue: "",
    Niveau: "Langue Natale",
  });

  function getUniqueListBy(arr, key) {
    return [...new Map(arr.map((item) => [item[key], item])).values()];
  }

  const handleChange = ({ currentTarget: input }) => {
    setLang({ ...lang, [input.name]: input.value });
  };

  const [lvls, setLvls] = useState([
    { key: 0, niveau: "Langue Natale" },
    { key: 1, niveau: "Bilangue" },
    { key: 2, niveau: "Professionnelle" },
  ]);

  const handleSubmit = (e) => {
    let Langs = JSON.parse(localStorage.getItem("Langues"));
    if (Langs === null) {
      Langs = [];
    }
    lang.Langue = lang.Langue.toLowerCase();
    lang.key = Langs.length;
    Langs.push(lang);
    const UniqueLangs = getUniqueListBy(Langs, "Langue");
    localStorage.setItem("Langues", JSON.stringify(UniqueLangs));
    handleModal();
  };

  return (
    <div className='modal-bg'>
      <div className='sm-modal-container'>
        <div className='modal-title'>
          <h4>Ajouter Langues:</h4>
          <span onClick={handleModal}>
            <FontAwesomeIcon icon={faTimes} />
          </span>
        </div>
        <hr />
        <div className='modal-body'>
          <form onSubmit={handleSubmit}>
            <label>Competance:</label>
            <input
              required
              name='Langue'
              className='form-control'
              value={lang.Langue}
              onChange={handleChange}
              type='text'
              placeholder='Langue'
            />
            <label>Niveau :</label>
            <select
              className='form-select'
              name='Niveau'
              defaultValue={lang.Niveau}
              onChange={handleChange}
            >
              {lvls.map((lvl) => (
                <option key={lvl.key} value={lvl.niveau}>
                  {lvl.niveau}
                </option>
              ))}
            </select>
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

export default AddLangPopup;
