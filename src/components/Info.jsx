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
        <li>
            God realm - a world of ecstasy, beauty and pleasure.
          <ul>
            <li>Dulled to the world/sated.</li>
            <li>Lack compassion/empathy. Can not see the suffering of others.</li>
          </ul>
        </li>
        <li>
            Demi God realm - a world of violence, envy, and jealousy.
          <ul>
            <li>Angry w/ super powers/Continual struggle with other Demi Gods</li>
            <li>Fueled by ego/aggression</li>
          </ul>
        </li>
        <li>
            Human realm - a world of purpose, aspirations, and possibilities.
          <ul>
            <li>Present is old karma</li>
            {/* <li>Future is what you do as human (new karma). One's choices affects one future. Place to make a difference in your rebirth/life</li> */}
          </ul>
        </li>
        <li>
            Animal realm - a world of instincts, survival, and self preservations
          <ul>
            <li>Focused on survival activities. Driven by impulse and instinct, preying on others.</li>
            <li>Animal birth is seen as the result of past sins, and one expiates these sins through suffering in animal form (being hunted, worked, driven, slaughtered, etc.).</li>
          </ul>
        </li>
        <li>
            Ghost realm - a world of neediness, addictions, and compulsions.
          <ul>
            <li>Excessive craving and attachments. Never ending hunger or need, which is never satisfied.</li>
            <li>Always looking outside themselves for something to satisfy the craving within. Dependency on substances, fixations to things, and compulsion.</li>
          </ul>
        </li>
        <li>
            Hell realm - a world of agony, terror, and depression.
          <ul>
            <li>Full of sufferring </li>
            <li>Experience torment and torture every passing second</li>
          </ul>
        </li>
      </ul>
    </>
  );
};

export default Info;