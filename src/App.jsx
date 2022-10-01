import React, { useEffect } from "react";
import Header from "./Header/Header";
import intro from "./images/c1.gif";
import about from "./images/c.gif";
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiBootstrap,
  SiSass,
  SiReact,
  SiMaterialui,
  SiGit,
  SiFacebook,
} from "react-icons/si";
import { TbArrowTopSquare } from "react-icons/tb";
import Aos from "aos";
import "aos/dist/aos.css";
import Footer from "./Footer/Footer";
import Work from "./Work/Work";

function App() {


  useEffect(() => {
    Aos.init({
      disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
      startEvent: "DOMContentLoaded", // name of the event dispatched on the document, that AOS should initialize on
      initClassName: "aos-init", // class applied after initialization
      animatedClassName: "aos-animate", // class applied on animation
      useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
      disableMutationObserver: false, // disables automatic mutations' detections (advanced)
      debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
      throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
      // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
      offset: 120, // offset (in px) from the original trigger point
      delay: 0, // values from 0 to 3000, with step 50ms
      duration: 1000, // values from 0 to 3000, with step 50ms
      easing: "ease", // default easing for AOS animations
      once: false, // whether animation should happen only once - while scrolling down
      mirror: false, // whether elements should animate out while scrolling past them
      anchorPlacement: "top-bottom", // defines which position of the element regarding to window should trigger the animation
    });
  }, []);

  return (
    <>
      <div className="app">
        <div id="tops"></div>
        <div className="top">
          <a href="#tops">
            <TbArrowTopSquare />
          </a>
        </div>
        {/* ================= Header ================= */}
        <Header />

        {/* ============= Intro ====================== */}
        <div id="intro" className="intro">
          <h3  >
            Hi, I am <span>Monish Soni</span>
          </h3>
          <h1 >Frontend Web Developer & Freelancer </h1>
          <p>I create beautiful responsive websites, and I love what I do.</p>

          <div className="introimg">
            <img src={intro} alt="" />
          </div>
        </div>

        {/*============== about ================ */}
        <div id="about" className="about">
          <div className="atext">
            <h3>About Me</h3>
            <p>
              Hello I’m Monish Soni a developer who has passion for building
              clean web applications with intuitive functionality. I enjoy the
              process of turning ideas into reality using creative solutions.
              I’m always curious about learning new skills, tools, and concepts.
            </p>{" "}
            <br />
            <p>
              {" "}
              I’m currently looking for a position as a frontend developer in an
              estemeed organization where I can learn and grow with the company.
              I’m open for learning and solving challenges using my skills and
              provide value to the growth of an organization.
            </p>
            <div className="abtn">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/monishsoni27/"
              >
                Hire Me
              </a>
            </div>
          </div>

          <div className="aimg">
            <img src={about} alt="" />
          </div>
        </div>
        {/* ============= Skills ============= */}
        <div id="skills" className="skills">
          <div className="stext">
            <h3>My Skills</h3>
            <p>
              I build simple, intuitive and responsive user interface with
              latest technologies that helps users get things done with less
              effort and time.
            </p>
            <div className="sbtn">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/monishsoni27/"
              >
                Contact Me
              </a>
            </div>
          </div>

          <div className="simg">
            <div className="scon">
              <div className="box" data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150">
                <SiHtml5 />
              </div>
              <div className="box"  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150">
                <SiCss3 />
              </div>
              <div className="box"  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150">
                <SiJavascript />
              </div>
              <div className="box"  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150">
                <SiBootstrap />
              </div>
              <div className="box"  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150">
                <SiSass />
              </div>
              <div className="box"  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150">
                <SiReact />
              </div>
              <div className="box"  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150">
                <SiMaterialui />
              </div>
              <div className="box"  data-aos="fade-up" data-aos-duration="1000" data-aos-offset="150">
                <SiGit />
              </div>
            </div>
          </div>
        </div>

        {/* ============= work =============== */}
        <div className="work" id="work">
          <h3>My Works</h3>
          <div className="wcardcon">
            <Work />
            <Work />
            <Work />
            <Work />
            <Work />
            <Work />
          </div>
        </div>
        {/* ============= connect ============= */}

        <div className="pconnect">
          <div data-aos="flip-down" data-aos-duration="1500" data-aos-offset="50" className="cbox">
            <h3>Start a Project</h3>
            <p>Interested in Working Together ??</p>
            <a href="">Lets do this</a>
          </div>
        </div>

        {/* ============= Footer ============== */}

        <Footer />
      </div>
    </>
  );
}

export default App;
