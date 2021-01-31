import React from 'react'
import './How.css'
import Controller from './Controller'

export default function How() {

    const oneTitle = "Take a picture."
    const twoTitle = "Grayscale it."
    const threeTitle = "Asciifi."

    const oneDesc = "Asciifi takes a frame out of the webcam stream."
    const twoDesc = "The image is grayscaled"
    const threeDesc = "Each pixel is assigned a character based on the intensity"

    return (
        <div className="main">
            <h1 className='HowText'>How it works</h1>
            <div className="how-content">
                <div className="image">
                    <img src="canvas.png" width='400' height='500'></img>
                </div>
                <div className="ctrl">
                    <Controller />
                </div>
            </div>
        </div>
    )
}
