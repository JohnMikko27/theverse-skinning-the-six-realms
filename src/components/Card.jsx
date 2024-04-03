import { motion, AnimatePresence } from "framer-motion";
import WheelComponent from "./WheelComponent";
import "../App.css";

const Card = ({ index, handleSpin, direction }) => {
  const segments = [
    "God realm", 
    "Demigod realm", 
    "Human realm", 
    "Animal realm", 
    "Hungry Ghost realm", 
    "Hell realm"
  ];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    "#34A24F",
    "#F9AA1F",
  ];
  const onFinished = (winner) => {
    handleSpin(winner);
    console.log("on finished called");
  };
  const urls = [
    "src/assets/img/dragonb6t.jpg", 
    "src/assets/img/gaming6r.jpg",
    "src/assets/img/starwars6r.jpg",
    "src/assets/img/studentlife6r.jpg",
    "src/assets/img/womenmarvel6r.jpg",
  ];

  const variants = {
    enter: {
      x: direction > 0 ? 300 : -300,
      opacity: 0,
    }
    ,
    center: {
      x: 0,
      opacity: 1
    },
    exit:  {
      zIndex: 0,
      x: direction > 0 ? -300 : 300,
      opacity: 0
    }
  };
  return (
    <>
      {index === 5 
        ? <WheelComponent segments={segments}
          segColors={segColors}
          onFinished={(winner) => onFinished(winner)}
          primaryColor='black'
          contrastColor='white'
          buttonText='Spin'
          isOnlyOnce={false}
          size={250}
          upDuration={22}
          downDuration={357}
        />  
        : 
        // will prob have to set a isright or is left so that I can set correct animation for clicking left or right
        // maybe just use initial and enter
        // <AnimatePresence initial={false} custom={direction}>
        //   <motion.img 
        //     className=" w-2/3" 
        //     src={urls[index]} 
        //     alt="Six Realms Skin" 
        //     key={urls[index]}
        //     custom="wait"
        //     variants={variants}
        //     initial="enter"
        //     animate="center"
        //     exit="exit"
        //     transition={{
        //       x: { type: "spring", stiffness: 300, damping: 30 },
        //       opacity: { duration: 0.2 }
        //     }}
        //   />

        // </AnimatePresence>
        // <AnimatePresence initial={false}>
        <motion.img 
          className=" w-2/3" 
          src={urls[index]} 
          alt="Six Realms Skin" 
          key={urls[index]}
          variants={variants}
          initial="enter"
          animate="center"
          // exit="exit"
        />
        // </AnimatePresence>
       
      }
    </>
  );
};

export default Card;