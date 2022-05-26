import React, { useState, useEffect, useRef } from "react";
import Navbar from "../Navbar";

import { useReactToPrint } from "react-to-print";
import { axiosInstance } from "../../config";
import { useTransition, animated } from "react-spring";
import TemplatePopup from "./TemplatePopup";

import Btns from "./Responsable/Btns";
import Default from "./Templates/Default";
import Professional from "./Templates/Professional";
import Modern from "./Templates/Modern";
import College from "./Templates/College";

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

const ResumeAfterVerif = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  let Data = JSON.parse(localStorage.getItem("Data"));

  const SaveData = async (e) => {
    e.preventDefault();
    const id = Data._id;
    const URL = `/api/v1/cv/etud/${id}`;
    try {
      const res = await axiosInstance.patch(URL, Data);
      console.log(res.data);
    } catch (err) {
      console.log(err.message);
    }
  };

  const Template = localStorage.getItem("Template");

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

  const [tempOpen, setTempOpen] = useState(false);

  const handleTemplate = () => {
    setTempOpen(!tempOpen);
  };

  return (
    <div className='pb-5'>
      <Navbar />
      {transition((styles, slidebar) =>
        slidebar ? (
          <animated.div ref={domNode} style={styles} className='slidebar'>
            <button
              onClick={handleTemplate}
              style={{ width: "200px" }}
              className='button mb-2'
            >
              Templates
            </button>

            <br />
            <button
              onClick={SaveData}
              style={{ width: "200px" }}
              className='button mb-2'
            >
              Sauvegarder
            </button>
            <Btns />
          </animated.div>
        ) : (
          ""
        ),
      )}
      {tempOpen && <TemplatePopup handleModal={handleTemplate} />}

      <div className='container d-flex flex-column align-items-center mt-4'>
        <div className='mb-3'>
          <p
            className='text-danger'
            style={{
              width: "240px",
              textAlign: "center",
              margin: "0 5px",
              fontWeight: "bold",
            }}
          >
            Si vous avez des commentaires, supprimez-les avant d'imprimer ou de
            télécharger votre CV{" "}
          </p>
        </div>

        <div className='nav-buttons'>
          <div className='mb-3'>
            <button
              onClick={handleToggle}
              style={{ width: "240px" }}
              className='button'
            >
              Options
            </button>
          </div>
          <div className='mb-3'>
            <button
              onClick={handlePrint}
              style={{ width: "240px" }}
              className='button'
            >
              Imprimer / Télécharger
            </button>
          </div>
        </div>
        {Template === "Default" && (
          <Default Data={Data} PrintRef={componentRef} />
        )}
        {Template === "Pro" && (
          <Professional Data={Data} PrintRef={componentRef} />
        )}
        {Template === "Modern" && (
          <Modern Data={Data} PrintRef={componentRef} />
        )}
        {Template === "College" && (
          <College Data={Data} PrintRef={componentRef} />
        )}

        <div className='nav-buttons lower'>
          <div className='mb-3 mt-3'>
            <button
              onClick={handleToggle}
              style={{ width: "240px" }}
              className='button'
            >
              Options
            </button>
          </div>
          <div className='mb-3 mt-3'>
            <button
              onClick={handlePrint}
              style={{ width: "240px" }}
              className='button'
            >
              Imprimer / Télécharger
            </button>
          </div>
        </div>
        <div className='pb-5 lower'>
          <p
            className='text-danger'
            style={{
              width: "240px",
              textAlign: "center",
              margin: "0 5px",
              fontWeight: "bold",
            }}
          >
            Si vous avez des commentaires, supprimez-les avant d'imprimer ou de
            télécharger votre CV{" "}
          </p>
        </div>
      </div>
    </div>
  );
};

export default ResumeAfterVerif;
