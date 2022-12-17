import React from "react";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import About from "./components/pages/About/About";
import Contact from "./components/pages/Contact/Contact";
import Home from "./components/pages/Home/Home";
import Service from "./components/pages/Services/Service";

const App = () => {
  return (
    <>
      <Header />
      <Home />
      <About />
      <Service />
      <Contact />
      <Footer />
    </>
  );
};
export default App;
