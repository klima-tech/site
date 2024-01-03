import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"


const AboutPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="O firmie">
      <p>Opis firmy</p>
    </Layout>
  )
}

export default AboutPage

export const Head: HeadFC = () => <title>Informacje o firmie, jej historia i wartości</title>
