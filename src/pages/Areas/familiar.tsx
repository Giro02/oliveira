import React from 'react'
import Familiar from '../../components/familiarIntro_atua'
import Navbar from "../../components/Navbar"
import Topnav from "../../components/topnav"
import Footer from "../../components/footer"
import Whats from "../../components/whats"
import AreasMenu from '../../components/AreasMenu'

export default function familiar() {
  return (
    <main>
      <Topnav></Topnav>
      <Navbar></Navbar>
      <AreasMenu></AreasMenu>
      <Whats></Whats>
      <Familiar></Familiar>
      <Footer></Footer>
    </main>
  )
    
    
}
