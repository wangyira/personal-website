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
  // const data = useStaticQuery(graphql`
  //   query {
  //     plane: file(relativePath: { eq: "plane.png" }) {
  //       childImageSharp {
  //         fluid(maxWidth: 300) {
  //           ...GatsbyImageSharpFluid
  //         }
  //       }
  //     }
  //   }
  // `)

  return (
    <div className="container">
      <Header></Header>
      {/* <Img className="plane" fluid={data.plane.childImageSharp.fluid} /> */}
      <Intro></Intro>
      <Project></Project>
    </div>
  )
}

export default IndexPage
