import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Info from "./components/Info";

import "./App.css";

function App() {

  return (
    <>
      <Nav/>
      <section className="intro">
        {/* condense the words on the html page; make it so that it's not too lengthy*/}
        <div>
          Every person’s life experience from birth to death is a hero’s journey through a 
          dynamic, emergent world comprised of interconnected complex evolving systems. 
          Each individual’s worldview and mental schema are the product of action, interaction 
          and interpretation of the experiences within these interconnected complex systems.
        </div>
        <br />
        <div>
          The notion of karma and the cycle of rebirth in Hindu and Buddhist philosophy suggests 
          that we inherit in this life the cumulative result of our thoughts and deeds in previous lives. 
          This leads one to contemplate and reflect on one’s current life circumstances as a manifestation 
          of one’s karma.
        </div>
        <img className="tree" src="src/assets/img/tree.png" alt="" />
      </section>

      <section className="slider-container">
        <Header text={"A Glimpse Into The Verse: Skinning The Six Realms: A World-making practice"}/>
        <Slider/>
      </section>
      
      <section className="info">
        <Header text={"Welcome to The Verse thought experiment/thought exercise..."}/>
        <Info/>
      </section>

      {"update readme with how to run it"}
    </>
  );
}

export default App;
