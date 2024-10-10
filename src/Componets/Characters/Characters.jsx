import React from "react";
import "./Characters.css";
import img1 from "./img1.webp";
import image1 from "./153823.jpg";
import image2 from "./721955.png";
import image3 from "./1193944.jpg";
import image4 from "./1331354.jpeg";
import image5 from "./1348854.png";
const characters = [
  {
    name: "Persephone",
    description: "The goddess of spring.",
    image: image1,
  },
  {
    name: "Hades",
    description: "The god of the underworld.",
    image: image2,
  },
  {
    name: "Hades",
    description: "The god of the underworld.",
    image: image3,
  },
  {
    name: "Hades",
    description: "The god of the underworld.",
    image: image4,
  },
  {
    name: "Hades",
    description: "The god of the underworld.",
    image: image5,
  },
];

function Characters() {
  return (
    <section className="characters">
      <div className="Heading">
        <h1>CHARACTERS</h1>
      </div>
      {characters.map((character, index) => (
        <div key={index} className="character-card">
          <img src={character.image} alt={character.name} />
          <div className="character-info">
            <h3>{character.name}</h3>
            <p>{character.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}

export default Characters;
