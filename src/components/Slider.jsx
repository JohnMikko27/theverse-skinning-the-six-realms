import { useState } from "react";
import "../styles/Slider.css";
import Card from "./Card";

const Slider = () => {
  // a main container
  // left and right buttons
  // the card itself
  // just have left and right buttons - no circles at the bottom
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
    <div className="slider">
      {/* change the color of the arrows to be the secondary bg color */}
      <img onClick={handleLeftClick} className="arrow left" src="src/assets/icons/leftArrow.png" alt="previous" />
      <img onClick={handleRightClick} className="arrow right" src="src/assets/icons/rightArrow.png" alt="next" />
      <Card url={urls[index]}/>
    </div>
  );
};

export default Slider;