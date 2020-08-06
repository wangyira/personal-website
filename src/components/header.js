import { Link } from "gatsby"
import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Header = () => {
  const data = useStaticQuery(graphql`
    query {
      landing: file(relativePath: { eq: "landing.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      github: file(relativePath: { eq: "github.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      linkedin: file(relativePath: { eq: "linkedin.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
      email: file(relativePath: { eq: "email.png" }) {
        childImageSharp {
          fluid(maxWidth: 300) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <header>
      <div className="nav-bar">
        <div className="nav">About</div>
        <div className="nav">Project</div>
        <div className="nav">Resume</div>
      </div>
      <div className="firstname">Amanda</div>
      <div className="lastname">Wang</div>
      <div className="landing">
        <Img fluid={data.landing.childImageSharp.fluid} />
      </div>
      <div className="row">
        <Link to="https://github.com/wangyira" target="_blank">
          <Img className="icon" fluid={data.github.childImageSharp.fluid} />
        </Link>
        <Link to="https://www.linkedin.com/in/amandawang14/" target="_blank">
          <Img className="icon" fluid={data.linkedin.childImageSharp.fluid} />
        </Link>
        <a href="mailto:wangyira@usc.edu" target="_blank">
          <Img className="icon" fluid={data.email.childImageSharp.fluid} />
        </a>
      </div>
      <div className="summary">
        <p>Computer Science @USC 22</p>
        <p>Previously:</p>
        <p>- Software Engineer & </p>
        <p>&nbsp; Program Manager @Microsoft Azure</p>
        <p>- Quant @Founder’s Securities</p>
      </div>
    </header>
  )
}

export default Header
