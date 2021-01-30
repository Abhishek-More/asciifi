import './Landing.css';
import { Link } from 'react-router-dom'
function Landing() {

  const desc = "A fast P2P video-calling platform.\n No sign up required."
  return (
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
}

export default Landing;
