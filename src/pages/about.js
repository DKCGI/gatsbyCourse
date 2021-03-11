import { Link } from "gatsby"
import React from "react"
import Layout from "../components/layout"

const AboutPage = () => {
  return (
    <Layout>
      <h1>About Me</h1>
      <p>
        I teach graphic design and web development while discovering and
        learning new tools and resources for creating professional websites and
        applications.
      </p>
      <p>
        <Link to="/contact">Contact Me</Link>
      </p>
    </Layout>
  )
}

export default AboutPage
