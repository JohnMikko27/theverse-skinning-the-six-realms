import { useState } from "react";
import Card from "./Card";

const Slider = ({ handleSpin }) => {
  const [state, setState] = useState({ index: 0, direction: 0 });

  const handleLeftClick = () => {
    if (state.index === 0) {
      setState({ index: 5, direction: -1 });
    } else {
      setState({ index: state.index - 1, direction: -1 });
    }
  };

  const handleRightClick = () => {
    if (state.index === 5) {
      setState({ index: 0, direction: 1 });
    } else {
      setState({ index: state.index + 1, direction: 1 });
    }
  };

  return (
    <div className="relative flex justify-center items-center ">
      {/* change the color of the arrows to be the secondary bg color */}
      {/* // use just the triangles for the arrows */}
      <img onClick={handleLeftClick} 
        className="transition-all  hover:cursor-pointer hover:invert-0 hover:scale-75 invert absolute w-14 left-20 top-1/3" 
        src="src/assets/icons/left-arrow.svg" alt="previous" />
      <img onClick={handleRightClick} 
        className="transition-all  hover:cursor-pointer hover:invert-0 hover:scale-75 invert absolute w-14 right-20 top-1/3" 
        src="src/assets/icons/right-arrow.svg" alt="next" />
      <Card index={state.index} handleSpin={handleSpin} direction={state.direction}/>
    </div>
  );
};

export default Slider;