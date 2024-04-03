import { motion, useInView, useAnimation, backInOut } from "framer-motion";
import { useRef, useEffect } from "react";

const Images = ({ text, url }) => {
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
    // console.log("element is in view", isInView);
    
  }, [isInView]);
    
  
  return (
    <motion.div
      variants={boxVariant}
      animate={control}
      initial="hidden"
      transition={{duration: .8, ease: backInOut}}
      ref={ref}
      className="h-screen w-screen p-20"
    >
      <img className=" w-full" src={url} alt={text} />
      <div>{text}</div>
    </motion.div>
  );
};

export default Images;
