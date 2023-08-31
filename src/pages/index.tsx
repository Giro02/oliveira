
import * as React from 'react'
import { Link } from 'gatsby'
import Navbar from "../components/Navbar"
import Topnav from "../components/topnav"
import Atua from "../components/atuacao_inicial"
import Carousel from "../components/Carousel"


const IndexPage = () => {
  return (
    <main>
      <Topnav></Topnav> 
      <Navbar/>
      <Atua></Atua>
      <Carousel></Carousel>

    </main>
  )
}

export const Head = () => <title>Oliveira Severo</title>

export default IndexPage
