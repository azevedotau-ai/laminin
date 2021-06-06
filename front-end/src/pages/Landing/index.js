import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.svg";
import landingImage from "../../assets/images/landing.svg";
import studyIcon from "../../assets/images/icons/study.svg";
import giveClasseIcon from "../../assets/images/icons/give-classes.svg";


import "./style.css";


function Landing() {

  return (
    <div id="page-landing">
      <div id="landing-page-content" className="container">
        <div className="logo-container">
          <img src={logo} alt="Proffy" />
          <h2>Sua plataforma de consulta de preços online.</h2>
        </div>

        <img
          src={landingImage}
          alt="Plataforma de Estudos"
          className="hero-image"
        />

        <div className="buttons-container">
          <Link to="/login" className="study">
            <img src={studyIcon} alt="Login" />
            Login
          </Link>
          <Link to="/cadastro" className="give-classes">
            <img src={giveClasseIcon} alt="Cadastro" />
            Cadastro
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Landing;
