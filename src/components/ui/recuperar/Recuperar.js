/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { useNavigate } from "react-router-dom";
import "./Recuperar.css";

const Recuperar = () => {
  let navigate = useNavigate();

  return (
    <div>
      <div className="volver">
        <a onClick={() => navigate("/")}>
            {"< "}Volver a Home
        </a>
      </div>

      <h1>Recuperar</h1>
    </div>
  );
};

export default Recuperar;
