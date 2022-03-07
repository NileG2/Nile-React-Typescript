import React from "react";
import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/Footer";
import "./Landing.scss";

const Landing = () => {
  return (
    <div className="landingWrapper">
      <NavBar />
      Welcome to Nile
      <Footer />
    </div>
  );
};

export default Landing;
