import './Landing.css';
import { Link } from 'react-router-dom'
function Landing() {

  const desc = "A fast P2P video-calling platform.\n No sign up required."
  return (
         <body>
           <div className="innerbox">
              <header>
                <h1 className="white">Experience</h1>
                <h1 className="pink">Low Latency</h1>
              </header>
              <p className="text">{desc}</p>
              <div>
                <a className="text pink" href="https://github.com/Abhishek-More" id="leftbutton">{"Asciify Yourself >"}</a>
                <a className="text pink" href="https://github.com/Abhishek-More" id="rightbutton">{"Call a friend >"}</a>
              </div>
           </div>
          
        </body>
    )

}

export default Landing;
