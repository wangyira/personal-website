import React, {useEffect} from "react"
import Headshot from "../images/headshot.png"
import 'aos/dist/aos.css'; 
import {OutboundLink} from "gatsby-plugin-google-analytics";

const Intro = () => {
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
    <div id="intro">
      <div className="left-col" data-aos="fade-right">
        <img className='headshot' src={Headshot} alt="My headshot"/>
        
        <div className="resumeGroup">
          <OutboundLink href="https://drive.google.com/file/d/1Cz8-nY8QvpYatOsHiqr1WYCrmjOgrLxC/view?usp=sharing" target="_blank">
            <div className="word">Resume</div>
            <div className="emptyBox"></div>
          </OutboundLink>
        </div>

      </div>

      <div className="right-col" data-aos="fade-left">
        <div className="skinny-paragraph">
          <span>Hi! </span>
          My name is Yiran (Amanda) Wang and I am a junior majoring in computer science and minoring in disruptive innovation at USC💡. I was born and raised in Beijing, China🐼, and I moved to Richmond, Virginia✈️, alone to attend high school when I was 13. As a result, I have a deep understanding of different cultures, people, and technology landscapes.
          <br></br><br></br>
          In my junior year of high school, I won my school’s first ever pitch competition following a week of Build-A-Thon and fell in love with building products to solve users' problems. With the passion for entrepreneurship, I decided to major in computer science despite having no prior coding experience👩‍💻. {/* Since then, I have been growing my programming skills, product senses, and leadership through projects, clubs, and internships👩‍💻.*/}
          <br></br><br></br>
          Since then, I have been working at a start-up founded by USC alums👥, I have consulted for Series B AI company, contributed to open-source development, developed algorithms to trade stocks📊, TAed for a class, and worked on other coding and business projects. I also led clubs to fundraise money for #BLM and to buy engineering toy sets for underpriveldged kids. See below for more information⬇️.  
          </div>
      </div>
      <div className="cream"></div>
      <div className="brownCircle"></div>
    </div>
  )
}

export default Intro
