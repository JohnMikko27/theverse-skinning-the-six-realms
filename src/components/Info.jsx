import "../styles/Info.css";

const Info = () => {

  return (
    <>
      <div>
        In Buddhist cosmology, there are six different realms one can exist in. 
        These are the God, Demi-god, Human, Animal, Hungry Ghost, and Hell realms. 
        The six realms are also used as a metaphor for the varying psychological states 
        of the human mind
      </div>
      <ul>
        <li className="realm"> 
            God realm - a world of ecstasy, beauty and pleasure.
          <ul className="details">
            <li>Dulled to the world/sated.</li>
            <li>Lack compassion/empathy. Can not see the suffering of others.</li>
          </ul>
        </li>
        <li className="realm">
            Demi God realm - a world of violence, envy, and jealousy.
          <ul className="details">
            <li>Angry w/ super powers/Continual struggle with other Demi Gods</li>
            <li>Fueled by ego/aggression</li>
          </ul>
        </li>
        <li className="realm">
            Human realm - a world of purpose, aspirations, and possibilities.
          <ul className="details">
            <li>Present is old karma</li>
            {/* <li>Future is what you do as human (new karma). One's choices affects one future. Place to make a difference in your rebirth/life</li> */}
          </ul>
        </li>
        <li className="realm">
            Animal realm - a world of instincts, survival, and self preservations
          <ul className="details">
            <li>Focused on survival activities. Driven by impulse and instinct, preying on others.</li>
            <li>Animal birth is seen as the result of past sins, and one expiates these sins through suffering in animal form (being hunted, worked, driven, slaughtered, etc.).</li>
          </ul>
        </li>
        <li className="realm">
            Ghost realm - a world of neediness, addictions, and compulsions.
          <ul className="details">
            <li>Excessive craving and attachments. Never ending hunger or need, which is never satisfied.</li>
            <li>Always looking outside themselves for something to satisfy the craving within. Dependency on substances, fixations to things, and compulsion.</li>
          </ul>
        </li>
        <li className="realm">
            Hell realm - a world of agony, terror, and depression.
          <ul className="details">
            <li>Full of sufferring </li>
            <li>Experience torment and torture every passing second</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Info;