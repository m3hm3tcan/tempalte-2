import React from "react";

// import components
import Header from "./components/Header";
import Hero from "./components/Hero";
import Brands from "./components/Brands";
import About from './components/About';
import Portfolio from "./components/Portfolio";
import Services from "./components/Services";
import Videos from './components/Videos';
import Contact from './components/Contact';

const App = () => {
  return (
    <div className="h-full">
      <Header />
      <Hero />
      <Brands />
      <About />
      <Portfolio />
      <Services />
      <Videos />
      <Contact />
    </div>
  );
};

export default App;
