import './Landing.css';
import { Link } from 'react-router-dom'
function Landing() {

  const desc = "A fast P2P video-calling platform.\n No sign up required."
  return (
<<<<<<< HEAD
    <div>
      <header>
        <h1 className="white">Experience</h1>
        <h1 className="pink">Low Latency</h1>
      </header>
      <p className="text">{desc}</p>
      <Link to='/demo' className="text pink" id="leftbutton">{"Asciify Yourself >"}</Link>
      <Link to='/video-call' className="text pink" id="rightbutton">{"Call a friend >"}</Link>
    </div>
  )
=======
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

>>>>>>> 815cd937c54ac0f0deddb9fb307014ec4d801371
}

export default Landing;
