import { useState } from "react";
import Card from "./Card";

const Slider = ({ handleSpin }) => {
  const [index, setIndex] = useState(0);

  const handleLeftClick = () => {
    if (index === 0) setIndex(5);
    else setIndex(index - 1);
    console.log("left");
  };

  const handleRightClick = () => {
    if (index === 5) setIndex(0);
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
      <Card index={index} handleSpin={handleSpin}/>
    </div>
  );
};

export default Slider;