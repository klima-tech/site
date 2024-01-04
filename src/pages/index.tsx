import * as React from "react"
import type { HeadFC, PageProps } from "gatsby"
import Layout from "../components/layout"

type HomeSection = {
  title: string
  description: string
  options: string[]
}

const services: HomeSection[] = [
  {
    title: "Klimatyzacja",
    description: "Klimatyzacja jest dziedziną zapewniającą wysoki komfort, który realizujemy w pomieszczeniach",
    options: [
      "produkcyjnych i laboratoryjnych w przemyśle farmaceutycznym i spożywczym",
      "salach operacyjnych i zabiegowych w zakładach opieki zdrowotnej",
      "salach bankietowych i restauracyjnych",
      "biurowych i handlowych",
      "mieszkalnych"
    ]
  },
  {
    title: "Wentylacja",
    description: "Wentylacja jest dziedziną poprzez którą zapewniamy dostarczenie świeżego powietrza dla pomieszczeń",
    options: [
      "produkcyjnych i laboratoryjnych w przemyśle farmaceutycznym i spożywczym",
      "magazynowych i socjalnych",
      "gastronomicznych i handlowych",
      "biurowych i mieszkalnych"
    ]
  },
  {
    title: "Chłodnictwo",
    description: "Chłodnictwo jest dziedziną poprzez którą zapewniamy wytworzenie oraz dostarczenie chłodu dla instalacji obsługujących",
    options: [
      "pomieszczenia produkcyjne i laboratoryjne w przemyśle farmaceutycznym i spożywczym",
      "sale operacyjne i zabiegowe w zakładach opieki zdrowotnej",
      "sale bankietowe i restauracyjne",
      "pomieszczenia biurowe i handlowe",
      "pomieszczenia mieszkalne",
      "komory chłodnicze"
    ]
  }
]

const IndexPage: React.FC<PageProps> = () => {
  return (
    <Layout pageTitle="Klima-Tech">
      <p>Klima-Tech jest firmą funkcjonującą w branży od roku 1998. Na bazie nowoczesnych technologii tworzymy i wdrażamy innowacyjne rozwiązania technologiczne w dziedzinie wentylacji, klimatyzacji i chłodnictwa dla dowolnych obiektów przemysłowych, handlowych, gastronomicznych oraz hotelowych. Wieloletni okres działalności w branży zaowocował dużym doświadczeniem zawodowym, wysokimi kwalifikacjami jak również rzetelnością oraz fachowością działania.</p>
    
      {services.map(service => (
        <div>
          <p>{service.title}</p>
          <p>{service.description}</p>
          <ul>
            {service.options.map(option => (
              <li>{option}</li>
            ))}
          </ul>
        </div>
      ))}

    </Layout>
  )
}

export default IndexPage

export const Head: HeadFC = () => <title>Home Page</title>
