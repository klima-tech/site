import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import { Link } from "gatsby"
import Layout from "../components/layout"


const ReferencesPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Realizacje">
      <p>Kafelki prowadzące do realizacji</p>
    </Layout>
  )
}

export default ReferencesPage

export const Head: HeadFC = () => <title>Lista realizacji projektów oraz instalacji</title>
