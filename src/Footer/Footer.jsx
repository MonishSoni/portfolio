import React from "react";
import {SiFacebook,SiInstagram,SiGithub,SiLinkedin,SiTwitter} from "react-icons/si";
import fimg from "../images/cfooter.gif"

const Footer = () => {
  return (
    <>
      <div id="footer" className="footer">
        <div className="name">
          
          <img src={fimg} alt="" />
        </div>
        <div className="connect">
          <h3>Connect with Me</h3>
          <div className="social_links">
            <a href="/"  rel="noreferrer" ><SiFacebook/></a>
            <a href="/"  rel="noreferrer" ><SiInstagram/></a>
            <a href="/"  rel="noreferrer" ><SiGithub/></a>
            <a href="/"  rel="noreferrer" ><SiLinkedin/></a>
            <a href="/"  rel="noreferrer" ><SiTwitter/></a>
           
          </div>
        </div>
        <div className="contactform">
        <h3>Contact</h3>
          <form action="https://formcarry.com/s/lK0tr0oaZ" method="POST">
            <label>
              <input type="text" name="Full_Name" placeholder="Full Name" required/>
            </label>
            <label>
              <input type="email" name="Email" placeholder="Email" required/>
            </label>
            <label>
                <textarea name="Message" rows="8" placeholder="Message"></textarea>
            </label>
            <label>
                <button type="submit">Submit</button>
            </label>
          </form>
        </div>
      </div>
    </>
  );
};

export default Footer;
