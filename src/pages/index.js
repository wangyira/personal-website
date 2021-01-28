import React, {useEffect} from "react"
import "../styles/styles.scss"

import Header from "../components/header.js"
import Intro from "../components/intro.js"
import Project from "../components/project.js"
import {Link} from 'react-scroll'
import ReactGa from 'react-ga'

const IndexPage = () => {

  // useEffect(()=>{
  //   ReactGa.initialize('UA-188326269-1')

  //   ReactGa.pageview(window.location.pathname + window.location.search)
  // }, [])
  return (
      <div className="container">
          {/* <link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" /> */}
          {/* <script src="bower_components/aos/dist/aos.js"></script> */}

        {/* <script src="https://unpkg.com/aos@next/dist/aos.js"></script>
        <script>
          AOS.init();
        </script> */}
        <div className="nav-bar">
          <Link to="intro" spy={true} smooth={true} duration={400}><div className="nav">About</div></Link> 
          <Link to="project" spy={true} smooth={true} duration={600}><div className="nav">Project</div></Link>
          <a href="https://drive.google.com/file/d/1Cz8-nY8QvpYatOsHiqr1WYCrmjOgrLxC/view?usp=sharing" target="_blank">
            <div className="nav">Resume</div>
          </a>
        </div>
        <Header></Header>
        <Intro></Intro>
        <Project></Project>
      </div>
  )
}

export default IndexPage
