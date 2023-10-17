import React from 'react'
import Tribuario from '../../components/Tributario_atua'
import Navbar from "../../components/Navbar"
import Topnav from "../../components/topnav"
import Footer from "../../components/footer"
import Whats from "../../components/whats"
import AreasMenu from '../../components/AreasMenu'

export default function tributario() {
  return (
    <main>
      <Topnav></Topnav>
      <Navbar></Navbar>
      <AreasMenu></AreasMenu>
      <Whats></Whats>
      <Tribuario></Tribuario>
      <Footer></Footer>
    </main>
  )
}
