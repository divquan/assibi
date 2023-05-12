import React from "react";
import Categories from "../../components/Home/Categories/Categories";
import Card1 from "../../components/Product Cards/Card1";
import Card2 from "../../components/Product Cards/Card2";
import Card3 from "../../components/Product Cards/Card3";
import HeroSection from "../../components/Home/HeroSection";
import "./Home.scss";

const Home = () => {
  return (
    <section className="home-container">
      <HeroSection />
      <Categories />
      <h2>Buy farm produce</h2>
      <div className="jjj">
        <Card1 />
        <Card2 />
        <Card3 />
      </div>
    </section>
  );
};

export default Home;
