import React, { useEffect } from "react";
import "./Call.css";

function Call() {

    useEffect(() => {
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
            <div className='video-pair'>
                <div />
                <p id="disp">Self</p>
                <p id='remote'>Remote</p>
                <div /></div>
            <input id='id'></input>
            <p id="id-holder">Your ID: Loading</p>

            <a id="clicker">
                Connect To Peer
            </a>

        </div>
    );
}
export default Call;