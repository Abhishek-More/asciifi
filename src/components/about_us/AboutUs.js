import './AboutUs.css';

function AboutUs() {

  return (
    <div className="homepage_end">
      <div className="subscribe_box">
        <p className="newsletter_heading">Subscribe to our newsletter</p>
        <input type="text" className="newsletter_input"/><br/>
        <a type="button" className="subscribe_button white">Subscribe</a>
      </div>
    </div>
  )
}

export default AboutUs;

/*
 <div className="names_box">
          <h2 className="aboutus_heading pink">Developed By:</h2>
        <div className="names">
          <p className="text white">Joshua Jung</p>
          <p className="text white">Rishi Phatak</p>
          <p className="text white">Nathan Purwosumarto</p>
          <p className="text white">Abhishek More</p>
        </div>
      </div>
*/