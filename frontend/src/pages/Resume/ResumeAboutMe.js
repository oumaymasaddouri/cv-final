import React, { useState } from "react";
import Navbar from "../Navbar";
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";
import AboutMe from "../../assets/undraw_quick_chat.svg";
import "./Resume.css";
import { axiosInstance } from "../../config";
const ResumeAboutMe = () => {
  const [about, setAbout] = useState({
    key: 0,
    value: "",
  });

  const Navigate = useNavigate();

  const handleChange = (e) => {
    setAbout({ ...about, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = localStorage.getItem("token");
    try {
      const url = `/api/v1/users/${token}`;
      const res = await axiosInstance.get(url);
      localStorage.setItem("id", res.data._id);
      localStorage.setItem("AboutMe", JSON.stringify(about));
      Navigate("/resume/done");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div>
      <Navbar />

      <div className='container mt-5'>
        <div className='row'>
          <div className='col-lg-4'>
            <h3>À Propos de vous:</h3>
            <form onSubmit={handleSubmit}>
              <textarea
                required
                style={{ marginTop: ".5rem" }}
                className='form-control'
                value={about.value}
                onChange={handleChange}
                placeholder='dites-nous quelque chose sur vous, soyez bref. '
              />
              <div
                className='d-flex justify-content-center mt-3'
                style={{ borderTop: "1px solid black" }}
              >
                <button
                  type='submit'
                  style={{
                    marginLeft: "10px",
                    width: "130px",
                    marginTop: "30px",
                  }}
                  className='btn btn-outline-success'
                >
                  Finish <FontAwesomeIcon icon={faCheck} />
                </button>
              </div>
            </form>
          </div>
          <div className='col-lg-8 unDrawContainer'>
            <img src={AboutMe} className='unDraw' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResumeAboutMe;
