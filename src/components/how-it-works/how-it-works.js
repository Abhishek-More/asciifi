import React from 'react';

import Card from "../card/card.js"

import "./how-it-works.css"

const HowItWorks = () => (
  <div className="mainContainer">
    <div className="title">
      How it Works
    </div>
    <div className="smallContainer">
      <div className="cardContainer">
        <Card message="Video Call"/>
        <Card message="Greyscale"/>
        <Card message="Asciffi!"/>
      </div>
      <div className="pictureContainer">
        Picture
      </div>
    </div>
    
  </div>
  
)
export default HowItWorks;