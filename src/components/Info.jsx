import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView, backInOut } from "framer-motion";

const Info = ({ realm }) => {
  const control = useAnimation();
  const ref = useRef(null);
  const isInView = useInView(ref);
  const boxVariant = {
    visible: { opacity: 1, scale: 1, y: 0},
    hidden: { opacity: 0, scale: 0, y: 100 },
  };
    
  useEffect(() => {
    if (isInView) {
      control.start("visible");
    } else {
      control.start("hidden");
    }
    // console.log("element is in view", isInView);
    
  }, [isInView]);

  const info = [
    {realmName: "God realm",
      description: "a world of ecstasy, beauty and pleasure",
      childrenInfo: ["Dulled to the world/sated", "Lack compassion/empathy. Can not see the suffering of others"]
    },
    {realmName: "Demigod realm",
      description: "a world of violence, envy, and jealousy",
      childrenInfo: ["Angry w/ super powers/Continual struggle with other Demi Gods", "Fueled by ego/aggression"] 
    },  
    {realmName: "Human realm",
      description: "a world of purpose, aspirations, and possibilities",
      childrenInfo: ["Present is old karma", "Future is what you do as human (new karma). One's choices affects one future. Place to make a difference in your rebirth/life"]
    },
    {realmName: "Animal realm",
      description: "a world of instincts, survival, and self preservations",
      childrenInfo: ["Focused on survival activities. Driven by impulse and instinct, preying on others.", "Animal birth is seen as the result of past sins, and one expiates these sins through suffering in animal form (being hunted, worked, driven, slaughtered, etc.)"]
    },
    {realmName: "Hungry Ghost realm",
      description: "a world of neediness, addictions, and compulsions",
      childrenInfo: ["Excessive craving and attachments. Never ending hunger or need, which is never satisfied.", "Always looking outside themselves for something to satisfy the craving within. Dependency on substances, fixations to things, and compulsion."]
    },
    {realmName: "Hell realm",
      description: "a world of agony, terror, and depression",
      childrenInfo: ["Full of suffering", "Experience torment and torture every passing second"]
    }
  ];

  return (
    <div className="">
      {info.filter((el) => el.realmName === realm)
        .map((element, i) => {
          return (
            <motion.div 
              variants={boxVariant}
              animate={control}
              initial="hidden"
              transition={{duration: .8, ease: backInOut}}
              ref={ref}
              className="grid gap-1 mx-16" key={i}>
              <div>{element.realmName} - {element.description}</div>
              <ul className="grid gap-1">
                {element.childrenInfo.map((child, j) => {
                  return (
                    <li
                      className="indent-8 list-disc list-inside" key={j}>
                      {child}
                    </li>
                  );
                })}
              </ul>
            </motion.div>
          );
        })
      }
    </div>
  );
};

export default Info;