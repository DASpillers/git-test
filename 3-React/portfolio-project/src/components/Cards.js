import React from "react";
import "./Cards.css";
import CardItem from "./CardItem";

function Cards() {
  return (
    <div className="cards">
      <h1>Check out these AMAZING Tracks</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items">
            <CardItem
              src="./assets/images/gony.jpg"
              text="Powereful Dark Synths over Trap style drums"
              label="LUV God"
              path="/services"
            />
            <CardItem
              src="./assets/images/img_0050.jpg"
              text="Travel through heavy synths through the digi-ages"
              label="Cold Freezr"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="./assets/images/img_0051.jpg"
              text="Head Banger that sounds like the Sun woke up dancing"
              label="Cry Me Full of Joy"
              path="/services"
            />
            <CardItem
              src="./assets/images/img_1802.jpeg"
              text="Sounds of Instrumental Independence"
              label="O.U. Nothing"
              path="/products"
            />
            <CardItem
              src="./assets/images/img_0052.jpg"
              text="Terry Crews on the Dance Floor in White Chicks...Now Dance"
              label="N30N Futr"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
