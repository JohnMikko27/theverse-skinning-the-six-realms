const Info = () => {

  return (
    <div className="grid gap-6">
      <div>
        In Buddhist cosmology, there are six different realms one can exist in. 
        These are the God, Demi-god, Human, Animal, Hungry Ghost, and Hell realms. 
        The six realms are also used as a metaphor for the varying psychological states 
        of the human mind
      </div>
      <ul className="grid gap-4">
        <li> 
            God realm - a world of ecstasy, beauty and pleasure.
          <ul className="">
            <li className="indent-8 list-disc list-inside">Dulled to the world/sated.</li>
            <li className="indent-8 list-disc list-inside">Lack compassion/empathy. Can not see the suffering of others.</li>
          </ul>
        </li>
        <li>
            Demi God realm - a world of violence, envy, and jealousy.
          <ul className="">
            <li className="indent-8 list-disc list-inside">Angry w/ super powers/Continual struggle with other Demi Gods</li>
            <li className="indent-8 list-disc list-inside">Fueled by ego/aggression</li>
          </ul>
        </li>
        <li>
            Human realm - a world of purpose, aspirations, and possibilities.
          <ul className="">
            <li className="indent-8 list-disc list-inside">Present is old karma</li>
            {/* <li className="indent-8 list-disc list-inside">Future is what you do as human (new karma). One's choices affects one future. Place to make a difference in your rebirth/life</li> */}
          </ul>
        </li>
        <li>
            Animal realm - a world of instincts, survival, and self preservations
          <ul className="">
            <li className="indent-8 list-disc list-inside">Focused on survival activities. Driven by impulse and instinct, preying on others.</li>
            <li className="indent-8 list-disc list-inside">Animal birth is seen as the result of past sins, and one expiates these sins through suffering in animal form (being hunted, worked, driven, slaughtered, etc.).</li>
          </ul>
        </li>
        <li>
            Ghost realm - a world of neediness, addictions, and compulsions.
          <ul className="">
            <li className="indent-8 list-disc list-inside">Excessive craving and attachments. Never ending hunger or need, which is never satisfied.</li>
            <li className="indent-8 list-disc list-inside">Always looking outside themselves for something to satisfy the craving within. Dependency on substances, fixations to things, and compulsion.</li>
          </ul>
        </li>
        <li>
            Hell realm - a world of agony, terror, and depression.
          <ul className="">
            <li className="indent-8 list-disc list-inside">Full of sufferring </li>
            <li className="indent-8 list-disc list-inside">Experience torment and torture every passing second</li>
          </ul>
        </li>
      </ul>
    </div>
  );
};

export default Info;