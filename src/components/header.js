import React from "react"
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

const Header = () => {

  return (
    <div className="header">
      <div className="pink"></div>
      <div className="creamCircle"></div>
      
      <div className="firstname">Amanda</div>
      <div className="lastname">Wang</div>
      <img className='dragon' src={Dragon} alt="landing image"/>

      <div className="contact">
        <a href="https://github.com/wangyira" target="_blank"> 
          <HoverImage className="icon" src={githubImage} hoverSrc={githubHover} />
        </a> 
        <a href="https://www.linkedin.com/in/amandawang14/" target="_blank">
          <HoverImage className="icon" src={linkedinImage} hoverSrc={linkedinHover} />
        </a>
        <a href="https://twitter.com/amandayiranwang" target="_blank">
          <HoverImage className="icon twitter" src={twitterImage} hoverSrc={twitterHover} />
        </a>
        <a href="mailto:wangyira@usc.edu" target="_blank">
          <HoverImage className="icon" src={emailImage} hoverSrc={emailHover} />
        </a>
        
        <div className="line"></div>
      </div> 
      <div className="summary">
        <div className="emoji">👩‍💻📊👥🇨🇳🐼</div>
        <br></br>
        <p>Computer Science @USC 22</p>
        <br></br>
        <p>Previously:</p>
        <p>- Software Engineer & </p>
        <p>&nbsp; Program Manager @Microsoft Azure</p>
        <p>- Quant @Founder’s Securities</p>
      </div>

      <div className="orange"></div>
      <div className="brownCircle"></div>
    </div>
  )
}

export default Header
