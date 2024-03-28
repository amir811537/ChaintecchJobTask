import React from "react";
import img1 from '../../../assets/card1.png'
import "./card.css";

export default function Cards({data}) {
  const {title,bgColor,imgUrl}=data;
  return (
    <div className="card-body-container" style={{background:bgColor}}>
      <div className="card-top-content">
        <div className="logo-style">
          <span>CH</span>
        </div>
        <div>
          <h3 className="top-txt">Join Development</h3>
        </div>
      </div>
      <div className="under-line"></div>
      <div className="center-content">
        <h1 className="center-txt">{title}</h1>
        {/* <h1 className="center-txt">Development</h1> */}
      </div>

      <div className="img-content">
        <img src={imgUrl} className="img-style" alt="card" />
      </div>
     
      <div className="under-line"></div>
    <div className="bottom-content">
    <button className="button">
        Explore
        <span className="arrow">&#8594;</span>
      </button>
    </div>
    </div>
  );
}
