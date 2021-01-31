import React from 'react'

import "./card.css"

const Card = (props) => (
    <div className="card">
        {props.message}
    </div>
)
export default Card;