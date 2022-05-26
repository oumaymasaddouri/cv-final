import React from "react";
import "./Popup.css";
import WellDone from "./../../assets/undraw_well_done.png";
import { useNavigate } from "react-router-dom";
const PostPopup = () => {
  const Navigate = useNavigate();
  const ClickHandle = (e) => {
    Navigate("/home");
  };
  return (
    <div className='modal-bg'>
      <div className='modal-container'>
        <div className='container text-center'>
          <h4 className='mb-2' style={{ color: "#198754" }}>
            Félicitations
          </h4>
          <hr />
          <img style={{ width: "70%" }} src={WellDone} />
          <hr />
          <h6 className='mt-2'>
            <span style={{ color: "#198754" }}>Bravo</span>, votre Cv a été
            envoyé pour être vérifié, nous vous enverrons un e-mail une fois que
            ce sera fait.
          </h6>
          <button onClick={ClickHandle} className='btn btn-success'>
            Terminer
          </button>
        </div>
      </div>
    </div>
  );
};

export default PostPopup;
