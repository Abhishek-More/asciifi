import React, { useEffect } from "react";
import "./Call.css";

function Call() {

    useEffect(() => {
 
        const script = document.createElement("script");
        script.src = "peersend.js";
        document.body.appendChild(script);
    });

    return (
        <div>
            <input id='id'></input>
            <p id="id-holder">Your ID</p>
            <div className='video-pair'>
                <p id="disp">Self</p>
                <p id='remote'>Remote</p>
            </div>
            <button id="clicker">
                Connect To Peer
            </button>
            <video id="vid" width="640" height="480" autoPlay></video>
        </div>
    );
}
export default Call;