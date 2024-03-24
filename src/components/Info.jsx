const Info = ( { realm }) => {

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
    <div className="grid gap-6">
      <div>
        In Buddhist cosmology, there are six different realms one can exist in. 
        These are the God, Demi-god, Human, Animal, Hungry Ghost, and Hell realms. 
        The six realms are also used as a metaphor for the varying psychological states 
        of the human mind
      </div>

      {info.filter((element) => (element.realmName === realm))
        .map((element, i) => {
          return (
            <div className="grid gap-1" key={i}>
              <div>{element.realmName} - {element.description}</div>
              <ul className="grid gap-1">
                {element.childrenInfo.map((child, j) => {
                  return (
                    <li className="indent-8 list-disc list-inside" key={j}>{child}</li>
                  );
                })}
              </ul>
            </div>
          );
        })
      }
    </div>
  );
};

export default Info;