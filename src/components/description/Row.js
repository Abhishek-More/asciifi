import React from 'react'
import "./Description.css"
export default function Row(props) {
    return (
        <div className="row">
            <img className="undraw" src={props.img}></img>
            <div className="text">
                <p className='header'>{props.title}</p>
                <p className="desc">{props.text}</p>
            </div>
        </div>
    )
}
