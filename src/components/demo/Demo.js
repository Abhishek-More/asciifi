import { useEffect } from "react";
import "./Demo.css";

export default function Demo() {
    useEffect(() => {
        let video = document.getElementById("vid");
        navigator.mediaDevices
            .getUserMedia({ video: true, audio: false })
            .then(function (stream) {
                video.srcObject = stream;
                video.play();
            })
            .catch(function (err) {
                console.log("An error occurred! " + err);
            });

        const script = document.createElement("script");
        script.src = "video.js";
        script.type = "text/javascript";
        setTimeout(() => {
            document.body.appendChild(script);
        }, 2000);

        return () => {
            script.remove();
            const str = video.srcObject;
            str.getVideoTracks().forEach(function (track) {
                track.stop();
            });
        };
    });

    return (
        <div className="view">
            <div className="video-container">
                <p id="disp">Loading...</p>
                <video id="vid" width="640" height="480" autoPlay></video>
            </div>
        </div>
    );
}
