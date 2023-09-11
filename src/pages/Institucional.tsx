import React from 'react'
import Navbar from "../components/Navbar"
import Topnav from "../components/topnav"
import Apresentacao_inst from "../components/apresentacao_inst"
import Escritorio_inst from "../components/escritorio_inst"
import NossaCultura_inst from "../components/nossaCultura_inst"
import Cards_inst from "../components/cards_inst"
import Footer from "../components/footer"


export default function Institucional() {
  return (
    <main>
      <Topnav></Topnav>
      <Navbar/>
      <Apresentacao_inst></Apresentacao_inst>
      <Escritorio_inst></Escritorio_inst>
      <NossaCultura_inst></NossaCultura_inst>
      <Cards_inst></Cards_inst>
      <Footer></Footer>
    </main>
  )
}





export const Head = () => <title>Institucional</title>

