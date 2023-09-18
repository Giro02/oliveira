import React from 'react'
import Navbar from "../components/Navbar"
import Topnav from "../components/topnav"
import Titulo_fale from "../components/titulo_fale"
import Footer from "../components/footer"
import OndeEstamos_fale from "../components/ondeEstamos_fale"
import Reuniao from "../components/reuniao"
import Location from "../components/location"
import Top_reuniao_fale from "../components/top_reuniao_fale"


export default function Fale() {
  return (
    <main>
      <Topnav></Topnav>
      <Navbar/>
      <Titulo_fale></Titulo_fale>
      <OndeEstamos_fale></OndeEstamos_fale>
      <Top_reuniao_fale></Top_reuniao_fale>
      <Reuniao></Reuniao>
      <Location></Location>
      <Footer></Footer>
    </main>
  )
}

