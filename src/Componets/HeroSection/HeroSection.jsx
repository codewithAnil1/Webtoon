import React from "react";
import "./HeroSection.css";
import TypeWriterEffect from "react-typewriter-effect";
import Typewriter from "typewriter-effect";

function HeroSection() {
  return (
    <section className="hero">
      <Typewriter
        options={{
          strings: ["The Future of Anime "],
          autoStart: true,
          loop: true,
        }}
        lives
      />

      <div className="hero-text">
        <h1 className="hero-title">Lore Olympus</h1>
        <p className="hero-subtitle">A Jaw Dropping Webtoon</p>
      </div>
    </section>
  );
}

export default HeroSection;
