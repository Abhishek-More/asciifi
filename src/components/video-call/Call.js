import React, { useEffect } from "react";
import "./Call.css";

function Call() {

    useEffect(() => {
        let video = document.getElementById("vid");
        const script = document.createElement("script");
        script.src = "peersend.js";
        document.body.appendChild(script);
        
        return () => {
            script.remove();
            //const str = video.srcObject;
            //str.getVideoTracks().forEach(function (track) {
            //    track.stop();
            //});
        };
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
           
        </div>
    );
}
export default Call;