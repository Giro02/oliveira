
import * as React from 'react'
import { Link } from 'gatsby'
import Navbar from "../components/Navbar"
import Topnav from "../components/topnav"
import Atua from "../components/atuacao_inicial"
import { EmblaCarousel } from "../components/Carousel"
import Apresentacao from "../components/apresentacao"
import Agende from "../components/agende"
import Footer from "../components/footer"
import Location from "../components/location"
import Reuniao from "../components/reuniao"
import Top_reuniao from "../components/top_reuniao"

// OBSERVADOR
// const observer = new IntersectionObserver((entries) =>{
//   entries.forEach((entry) =>{
//       console.log(entry)
//       if (entry.isIntersecting){
//           entry.target.classList.add('show');
//       }else{
//           entry.target.classList.remove('show')
//       }
//   })
// })
// const hiddenElements = document.querySelectorAll('.hidden');
// hiddenElements.forEach((el) => observer.observe(el));


const IndexPage = () => {
  return (
    <main>
      <Topnav></Topnav> 
      <Navbar/>
      <EmblaCarousel></EmblaCarousel>
      <Atua></Atua>
      <Apresentacao></Apresentacao>
      <Top_reuniao></Top_reuniao>
      <Agende></Agende>
      <Reuniao></Reuniao>
      <Location></Location>
      <Footer></Footer>
    </main>
  )
}

export const Head = () => <title>Oliveira Severo</title>

export default IndexPage
