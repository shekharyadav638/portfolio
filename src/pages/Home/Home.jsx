import React from "react";
import styles from "./Home.module.css";
import HeroVideo from "../../components/Static/HeroVideo/HeroVideo";
import About from "../../components/Static/AboutHero/About";
import Skills from "../../components/Static/Skills/MySkills";

const Home = () => {
  return (
    <>
      <HeroVideo />
      <About />
      <Skills />
    </>
  );
};

export default Home;
