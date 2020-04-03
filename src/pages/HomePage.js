import React from "react";
import Hero from "../components/Hero";
import Banner from "../constants/Banner";
import WhyUS from "../components/WhyUS";
import About from "../components/About";
import FeaturedItems from "../components/storeItems/FeaturedItems";

const HomePage = () => (
  <div>
    <Hero>
      <Banner title="Southern Ohio Inflatables LLC." />
    </Hero>
    <About />
    <WhyUS />
    <FeaturedItems />
  </div>
);

export default HomePage;
