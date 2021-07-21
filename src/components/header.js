import React, { useEffect } from "react"
import HoverImage from "react-hover-image";

import githubImage from "../images/github.png"
import githubHover from "../images/githubHover.png"
import linkedinImage from "../images/linkedin.png"
import linkedinHover from "../images/linkedinHover.png"
import twitterImage from "../images/twitter.png"
import twitterHover from "../images/twitterHover.png"
import emailImage from "../images/email.png"
import emailHover from "../images/emailHover.png"
import Dragon from "../images/landing.jpg"
import PinkCreamCircles from "../images/pinkCream.png"

import { OutboundLink } from 'gatsby-plugin-google-analytics'
import 'aos/dist/aos.css';

const Header = () => {
  let AOS;

  useEffect(() => {
    /**
     * Server-side rendering does not provide the 'document' object
     * therefore this import is required either in useEffect or componentDidMount as they
     * are exclusively executed on a client
     */
    const AOS = require("aos");
    AOS.init({
      duration: 1200,
      once: false,
    });
  }, []);

  useEffect(() => {
    if (AOS) {
      AOS.refresh();
    }
  });

  return (
    <div className="header">
      <img className="pink" src={PinkCreamCircles} alt="pink cream circles" />

      <div className="firstname" data-aos="zoom-in">Amanda</div>
      <div className="lastname" data-aos="zoom-in">Wang</div>
      <img className='dragon' src={Dragon} alt="landing image" data-aos="fade-left" />

      <div className="contact">
        <OutboundLink href="https://github.com/wangyira" target="_blank">
          <HoverImage className="icon" src={githubImage} hoverSrc={githubHover} />
        </OutboundLink>
        <OutboundLink href="https://www.linkedin.com/in/amandawang14/" target="_blank">
          <HoverImage className="icon" src={linkedinImage} hoverSrc={linkedinHover} />
        </OutboundLink>
        <OutboundLink href="https://twitter.com/amandayiranwang" target="_blank">
          <HoverImage className="icon twitter" src={twitterImage} hoverSrc={twitterHover} />
        </OutboundLink>
        <OutboundLink href="mailto:wangyira@usc.edu" target="_blank">
          <HoverImage className="icon" src={emailImage} hoverSrc={emailHover} />
        </OutboundLink>

        <div className="line"></div>
      </div>

      <div className="summary">
        {/* <div className="emoji">👩‍💻📊👥🇨🇳🐼</div> */}
        <br></br>
        <p>Computer Science @USC 22</p>
        <br></br>
        <p>Previously:</p>
        <p>- Program Manager Intern @Microsoft Azure</p>
        <p>- Product & Engineer @Nomi</p>
      </div>

      <div className="orange"></div>
      <div className="brownCircle"></div>
    </div>
  )
}

export default Header
