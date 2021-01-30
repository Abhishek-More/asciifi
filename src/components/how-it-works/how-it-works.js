import React from 'react';

import Card from "../card/card.js"

import "./how-it-works.css"

const HowItWorks = () => (
  <div className="mainContainer">
    <div className="title">
      How it Works
    </div>
    <div className="cardContainer">
      <Card/>
      <Card/>
      <Card/>
    </div>
  </div>
  
)
export default HowItWorks;