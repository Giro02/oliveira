import React from "react";
import Navbar from "../components/Navbar";
import Topnav from "../components/topnav";
import Footer from "../components/footer";
import Whats from "../components/whats";

export default function Areas() {
  return (
    <main>
      <Topnav></Topnav>
      <Navbar />
      <Whats></Whats>
      <Footer></Footer>
    </main>
  );
}
