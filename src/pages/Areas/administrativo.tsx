import React from 'react'
import Adm from '../../components/Administrativo_atua'
import Navbar from "../../components/Navbar"
import Topnav from "../../components/topnav"
import Footer from "../../components/footer"
import Whats from "../../components/whats"
import AreasMenu from '../../components/AreasMenu'

export default function administrativo() {
  return (
    <main>
      <Topnav></Topnav>
      <Navbar></Navbar>
      <AreasMenu></AreasMenu>
      <Whats></Whats>
      <Adm></Adm>
      <Footer></Footer>
    </main>
  )
}
