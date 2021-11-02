import React from "react";
import "../App.css";
import { Button } from "./Button";
import "./Hero.css";

function Hero() {
  return (
    <div className="hero-container">
      <video src="/assets/video/LogoSplash.mov" autoPlay loop muted />
      <h1>MUSIC MASTERED</h1>
      <p>Sounds of the new Millenia</p>
      <div className="hero-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
        >
          About Us
        </Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
        >
         <i className="fas fa-play-circle" /> Listen Here
        </Button>
      </div>
    </div>
  );
}

export default Hero;
