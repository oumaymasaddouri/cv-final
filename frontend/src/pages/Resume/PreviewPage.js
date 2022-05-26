import React from "react";
import { axiosInstance } from "../../config";
import "./Popup.css";
import Finished from "../../assets/undraw_finish_line.svg";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";

const PreviewPage = () => {
  const Navigate = useNavigate();

  const saveData = () => {
    const UserId = localStorage.getItem("id");
    try {
      const urlData = `/api/v1/users/getuser/${UserId}`;
      axiosInstance.get(urlData).then((res) => {
        localStorage.setItem("User", JSON.stringify(res.data.foundUser));
        Navigate("/resume/resultat");
      });
    } catch (err) {}
  };

  return (
    <div>
      <Navbar />
      <div className='container mt-5 d-flex flex-column text-center align-items-center'>
        <h4>
          Félicitations, vous avez créé votre propre CV professionnel. <br />{" "}
          Vous pouvez le voir dans la page de prévisualisation{" "}
        </h4>
        <h6 className='text-muted mb-5'>
          Vous pouvez modifier votre cv si vous avez fait des erreurs.
        </h6>
        <div style={{ width: "100%" }}>
          <img className='Congrats-img' src={Finished} />
        </div>
        <button
          onClick={saveData}
          className='btn btn-success mt-5'
          style={{ width: "150px" }}
        >
          Afficher l'aperçu
        </button>
      </div>
    </div>
  );
};

export default PreviewPage;
