import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

const ContactPage: React.FC<PageProps> = () => {
    return (
        <Layout pageTitle="Dane kontaktowe">
            
        </Layout>
    )
}

export default ContactPage

export const Head: HeadFC = () => <title>Informacje kontaktowe, telefon oraz dane do faktury</title>