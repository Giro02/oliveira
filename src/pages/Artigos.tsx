import React from 'react'
import Navbar from "../components/Navbar"
import Topnav from '../components/topnav'
import Whats from "../components/whats"
import ArtigosComponent from '../components/ArtigosComponent'
import Footer from '../components/footer'


export default function Artigos() {
  return (
    <main>
      <Whats></Whats>
      <Topnav></Topnav>
      <Navbar/>
      <ArtigosComponent></ArtigosComponent>
      <Footer></Footer>
    </main>
  )
}

