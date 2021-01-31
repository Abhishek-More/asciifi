import React from 'react'
import './Card.css'

export default function Card(props) {

    return (
        <div className="card-container">
            <p className="desc">{props.text}</p>
        </div>
    )
}
