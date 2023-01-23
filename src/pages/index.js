import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import Header from "../components/header"
import Seo from "../components/seo"
import "../components/layout.css"
import Hero from "../components/hero"
import Projects from "../components/projects"
import Input from "../components/input"
import Footer from "../components/footer"

const IndexPage = () => {
  return (
    <div>
      <Header />
      <Hero />
      <Projects />
      <Input />
      <Footer />
    </div>
  )
}

export const Head = () => <Seo title="Home" />

export default IndexPage
