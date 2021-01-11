import React from "react"
import { Link } from "gatsby"
import "../styles/styles.scss"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

//import component
import Header from "../components/header.js"
import Intro from "../components/intro.js"
import Project from "../components/project.js"

const IndexPage = () => {

  return (
    <div className="container">
      <Header></Header>
      <Intro></Intro>
      <Project></Project>
    </div>
  )
}

export default IndexPage
