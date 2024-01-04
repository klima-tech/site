import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"


const ServicesPage: React.FC<PageProps> = () => {
return (
    <Layout pageTitle="Zakres usług">
        <p>Opis usług</p>
    </Layout>
    )
}

export default ServicesPage

export const Head: HeadFC = () => <title>Zakres usług klimatyzacji, wentylacji oraz chłodnictwa</title>