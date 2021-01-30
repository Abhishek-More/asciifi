import './Landing.css';

function Landing() {

  const desc = "A fast P2P video-calling platform.\n No sign up required."
  return (
         <body>
          <header>
           <h1 className="white">Experience</h1>
           <h1 className="pink">Low Latency</h1>
          </header>
          <p className="text white">{desc}</p>
          <a className="text pink" id="leftbutton">Asciify Yourself ></a>
          <a className="text pink" id="rightbutton">Call a friend ></a>
        </body>
    )

}

export default Landing;
