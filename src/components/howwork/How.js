import React from 'react'
import './How.css'
import Card from './Card'

export default function How() {

    const oneDesc = "Take a picture."
    const twoDesc = "Grayscale it."
    const threeDesc = "Asciifi."

    return (
        <div className="main">
            <h1 className='HowText'>How it works</h1>
            <div className="how-content">
                <div className="cards">
                    <Card text={oneDesc} />
                    <Card text={twoDesc} />
                    <Card text={threeDesc} />
                </div>
                <div className="image">
                    <h2> image </h2>
                </div>
            </div>
        </div>
    )
}
