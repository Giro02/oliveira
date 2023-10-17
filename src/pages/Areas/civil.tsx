import React from 'react'
import Civil from '../../components/Civil_atua'
import Navbar from "../../components/Navbar"
import Topnav from "../../components/topnav"
import Footer from "../../components/footer"
import Whats from "../../components/whats"
import AreasMenu from '../../components/AreasMenu'

export default function civil() {
  return (
    <main>
      <Topnav></Topnav>
      <Navbar></Navbar>
      <AreasMenu></AreasMenu>
      <Whats></Whats>
      <Civil></Civil>
      <Footer></Footer>
    </main>
  )
}
