import React from 'react'
import Navbar from "../components/Navbar"
import Topnav from "../components/topnav"
import Familiar_atua from "../components/familiar_atua"
import FamiliarIntro_atua from "../components/familiarIntro_atua"
import Footer from "../components/footer"
import Civil_atua from "../components/Civil_atua"


export default function Areas() {
  return (
    <main>
      <Topnav></Topnav>
      <Navbar/>
      <Familiar_atua></Familiar_atua>

      <Footer></Footer>
    </main>
  )
}