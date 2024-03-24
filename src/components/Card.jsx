import WheelComponent from "./WheelComponent";
import "../App.css";

const Card = ({ index, handleSpin }) => {
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
          styles={{color: "red"}}
        />  
        : <img className=" w-2/3" src={urls[index]} alt="Six Realms Skin" />}
    </>
  );
};

export default Card;