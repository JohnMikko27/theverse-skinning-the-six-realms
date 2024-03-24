import { useState } from "react";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Info from "./components/Info";
import "./App.css";

function App() {
  const [realm, setRealm] = useState(0);

  const handleSpin = (winner) => {
    setRealm(winner);
    console.log(`this is the winner ${winner}`);
  };

  return (
    <>
      <Nav/>
      <section className="grid justify-items-center px-12 text-lg">
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
        <img className="" src="src/assets/img/tree.png" alt="" />
      </section>

      <section className="">
        <Header text={"A Glimpse Into The Verse: Skinning The Six Realms: A World-making Practice"}/>
        <Slider handleSpin={handleSpin}/>
      </section>

      <section className="text-lg">
        <Header text={"Welcome to The Verse thought experiment/thought exercise..."}/>
        <Info realm={realm}/>
      </section>
      {/* <Wheel/> */}
    </>
  );
}

// ask serena what the font is, maybe padding and stuff and line innerHeight, font size and stuff
// talk about the form; the stuff on the form; what we're going to ask, etc. 
// talk about future plan of asking users to put images and then we create an infographic with those img
//https://codesandbox.io/p/sandbox/react-wgftkn?file=%2Fsrc%2FApp.js
export default App;
