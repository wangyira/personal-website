import React from "react"
// import { Link } from "gatsby"
import "../styles/styles.scss"

import Header from "../components/header.js"
import Intro from "../components/intro.js"
import Project from "../components/project.js"
import {Link} from 'react-scroll'

const IndexPage = () => {

  return (
    <div className="container">
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
