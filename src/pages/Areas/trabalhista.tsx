import React from 'react'
import Trabalhista from '../../components/Trabalhista_atua'
import Navbar from "../../components/Navbar"
import Topnav from "../../components/topnav"
import Footer from "../../components/footer"
import Whats from "../../components/whats"
import AreasMenu from '../../components/AreasMenu'

export default function trabalhista() {
  return (
    <main>
      <Topnav></Topnav>
      <Navbar></Navbar>
      <AreasMenu></AreasMenu>
      <Whats></Whats>
      <Trabalhista></Trabalhista>
      <Footer></Footer>
    </main>
  )
}
