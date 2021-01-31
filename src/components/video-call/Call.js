import React, { useEffect } from "react";
import "./Call.css";

function Call() {

    useEffect(() => {

        const script = document.createElement("script");
        script.src = "peersend.js";
        document.body.appendChild(script);

        return () => {
            script.remove();

        };
    });

    return (
        <div>
            <p id="id-holder">Your ID: Loading</p>
            <div className='video-pair'>
                <div />
                <p id="disp"></p>
                <p id='remote'></p>
                <div />
            </div>
            <div className='io'>
            
                <input id='id'></input>
                <a id="clicker">Connect To Peer</a>
            </div>

        </div>
    );
}
export default Call;