import React from "react"
import "../styles/styles.scss"

import Header from "../components/header.js"
import Intro from "../components/intro.js"
import Project from "../components/project.js"
import { Link } from 'react-scroll'
import { OutboundLink } from "gatsby-plugin-google-analytics";

const IndexPage = () => {

  return (
    <div className="container">

      <div className="nav-bar">
        <Link to="intro" spy={true} smooth={true} duration={400}><div className="nav">About</div></Link>
        <Link to="project" spy={true} smooth={true} duration={600}><div className="nav">Project</div></Link>
        <OutboundLink href="https://drive.google.com/file/d/1jVgeRu5YOWVTnjh7Sp3AVRofpatHLDIu/view?usp=sharing" target="_blank">
          <div className="nav">Resume</div>
        </OutboundLink>
      </div>
      <Header></Header>
      <Intro></Intro>
      <Project></Project>
    </div>
  )
}

export default IndexPage
