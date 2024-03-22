import { useState } from "react";
import Card from "./Card";

const Slider = () => {
  const [index, setIndex] = useState(0);
  const urls = [
    "src/assets/img/dragonb6t.jpg", 
    "src/assets/img/gaming6r.jpg",
    "src/assets/img/starwars6r.jpg",
    "src/assets/img/studentlife6r.jpg",
    "src/assets/img/womenmarvel6r.jpg",
  ];

  const handleLeftClick = () => {
    if (index === 0) setIndex(urls.length - 1);
    else setIndex(index - 1);
    console.log("left");
  };

  const handleRightClick = () => {
    if (index === urls.length - 1) setIndex(0);
    else setIndex(index + 1);
    console.log("right");

  };

  return (
    <div className="relative flex justify-center items-center">
      {/* change the color of the arrows to be the secondary bg color */}
      <img onClick={handleLeftClick} 
        className="transition-all  hover:cursor-pointer hover:invert-0 hover:scale-75 invert absolute w-14 left-20 top-1/3" 
        src="src/assets/icons/left-arrow.svg" alt="previous" />
      <img onClick={handleRightClick} 
        className="transition-all  hover:cursor-pointer hover:invert-0 hover:scale-75 invert absolute w-14 right-20 top-1/3" 
        src="src/assets/icons/right-arrow.svg" alt="next" />
      <Card url={urls[index]}/>
    </div>
  );
};

export default Slider;