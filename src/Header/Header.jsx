import React ,{useState} from 'react';
import logo from "../images/logo.png";
import { HiMenuAlt2,HiX } from "react-icons/hi";

const Header = () => {

  const [menu, setMenu] = useState(false)

  return (
    <div id='header' className="header">
        <div className="logo">
            <a href="/"><img src={logo} alt="" /></a>
        </div>

        <div className={ menu ? "hlinks smenu open" :"hlinks smenu close"  } >
          <div className="navlink">
            <a onClick={() => setMenu(false)} href="#tops">Home</a>
            <a onClick={() => setMenu(false)} href="#about">About</a>
            <a onClick={() => setMenu(false)} href="#skills">Skills</a>
            <a onClick={() => setMenu(false)} href="#work">Work</a>
            <a onClick={() => setMenu(false)} href="#footer">Contact</a>
          </div>
          <div className="navbutton">
            <a target="_blank" href="https://www.linkedin.com/in/monishsoni27/">Hire Me</a>
          </div>

          <div className="cross">
            <HiX  onClick={() => setMenu(!menu)} />
          </div>
        </div>

        <div className="menu">
          <HiMenuAlt2 onClick={() => setMenu(!menu)} />
        </div>
    </div>
  )
}

export default Header;