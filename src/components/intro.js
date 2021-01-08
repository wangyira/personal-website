import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Intro = () => {
  const data = useStaticQuery(graphql`
    query {
      headshot: file(relativePath: { eq: "headshot.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <div className="intro">
      <div className="left-col">
        <Img className="headshot" fluid={data.headshot.childImageSharp.fluid} />
        <div className="resume">
          <div className="word">Resume</div>
        </div>
      </div>
      <div className="right-col">
        <div className="skinny-paragraph">
          <span>Hi! </span>My name is Yiran (Amanda) Wang and I am a junior
          majoring in computer science and minoring in disruptive innovation at
          USC💡. I entered college with no coding experience, having never heard
          of a compiler, but with the passion to solve problems and build
          products that will help users. I have been growing both my programming
          skills and product senses through projects, clubs, and internships👩‍💻.
          I love to create and build products that create positive impact and
          alleviate users’ pain points.
          <br></br>
          <br></br>
          A little bit more about me, I was born and raised in Beijing, China🐼, and I moved to Richmond, Virginia✈️, alone to attend high school when I was 13. As a result, I have a deep understanding of both the Eastern and Western cultures as well as tech products and landscapes. I also adapt to new environments very quickly and can empathize with people’s feelings and needs well.

        </div>
      </div>
    </div>
  )
}

export default Intro
