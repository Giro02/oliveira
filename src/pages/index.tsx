
import * as React from 'react'
import { Link } from 'gatsby'
import Navbar from "../components/Navbar"
import Topnav from "../components/topnav"
import Atua from "../components/atuacao_inicial"
import Carousel from "../components/Carousel"
import Apresentacao from "../components/apresentacao"
import Agende from "../components/agende"
import Footer from "../components/footer"
import Location from "../components/location"
import Reuniao from "../components/reuniao"
import Top_reuniao from "../components/top_reuniao"


const IndexPage = () => {
  return (
    <main>
      <Topnav></Topnav> 
      <Navbar/>
      <Carousel></Carousel>
      <Atua></Atua>
      <Apresentacao></Apresentacao>
      <Top_reuniao></Top_reuniao>
      <Agende></Agende>
      <Reuniao></Reuniao>
      <Location></Location>
      <Footer></Footer>
    </main>
  )
}

export const Head = () => <title>Oliveira Severo</title>

export default IndexPage
