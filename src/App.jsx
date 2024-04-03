import { useState, useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
import Nav from "./components/Nav";
import Header from "./components/Header";
import Info from "./components/Info";
import Images from "./components/Images";
import "./App.css";

function App() {
  
  const data = [
    {
      id: 1,
      text: "Star Wars",
      url: "src/assets/img/starwars6r.jpg",
    },
    {
      id: 2,
      text: "Marvel Women",
      url: "src/assets/img/womenmarvel6r.jpg",
    },
    {
      id: 3,
      text: "Dragon Ball",
      url: "src/assets/img/dragonb6t.jpg",
    },
    {
      id: 4,
      text: "Stranger Things",
      url: "src/assets/img/stthings6r.jpg",
    },
  ];

  // const handleSpin = (winner) => {
  //   setRealm(winner);
  //   console.log(`this is the winner ${winner}`);
  // };
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const boxVariant = {
    visible: { opacity: 1, scale: 1, y: 0},
    hidden: { opacity: 0, scale: 0, y: 50 },
  };
    
  useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
    console.log("element is in view", isInView);
    
  }, [control, isInView]);

  return (
    <>
      <Nav/>
      <section className="grid justify-items-center px-12 text-lg relative">
        <div className="text-xl px-20 pt-8"> 
          Every person’s life experience from birth to death is a hero’s journey through a dynamic, 
          emergent world comprised of interconnected complex evolving systems. 
          Each individual’s worldview and mental schema are the product of action, 
          interaction and interpretation of the experiences within these interconnected complex systems.</div>
        <img className="w-1/2" src="src/assets/img/tree.png" alt="Tree" />
        <motion.div
          variants={boxVariant}
          animate={control}
          initial="hidden"
          transition={{duration: .8, type: "spring"}}
          ref={ref}
          className="text-xl px-20"
        >
        The notion of karma and the cycle of rebirth in Hindu and Buddhist philosophy suggests that
        we inherit in this life the cumulative result of our thoughts and deeds in previous lives. 
        This leads one to contemplate and reflect on one’s current 
        life circumstances as a manifestation of one’s karma.
        </motion.div>
      </section>

      <section className="grid justify-items-center text-lg gap-4">
        <img className="" src="src/assets/img/six-realms.png" alt="Karma Six Realms" />
        <Header text={"A Glimpse Into The Verse: Skinning The Six Realms: A World-making Practice"}/>
        <div className="mx-8">
          In Buddhist cosmology, there are six different realms one can exist in. 
          These are the God, Demi-god, Human, Animal, Hungry Ghost, and Hell realms. 
          The six realms are also used as a metaphor for the varying psychological states 
          of the human mind
        </div>
        <div className="grid gap-2">
          <Info realm="God realm"/>
          <Info realm="Demigod realm"/>
          <Info realm="Human realm"/>
          <Info realm="Animal realm"/>
          <Info realm="Hungry Ghost realm"/>
          <Info realm="Hell realm"/>
        </div>
      </section>

      <section className="text-lg ">
        <Header text={"Let's explore a few skins of The Verse"}/>
      </section>

      {data.map((img) => (
        <Images key={img.id} text={img.text} url={img.url} />
      ))}
    </>
  );
}

// ask serena what the font is, maybe padding and stuff and line innerHeight, font size and stuff
// talk about the form; the stuff on the form; what we're going to ask, etc. 
// talk about future plan of asking users to put images and then we create an infographic with those img
//https://codesandbox.io/p/sandbox/react-wgftkn?file=%2Fsrc%2FApp.js
export default App;
