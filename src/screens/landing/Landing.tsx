import React, { useState, useEffect } from "react";
import "./Landing.scss";
import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/Footer";
import { Carousel } from "react-bootstrap";
import SidebarFilter from "../../components/filter/SidebarFilter";
import CardContainerHorizontal from "../../components/cardContainer/CardContainerHorizontal";
import ProductListing from "../productListing/ProductListing";
import axios from "axios";
import { Link } from "react-router-dom";

const Landing = () => {
  const bannerImages = [
    "assets/ad1.jpg",
    "assets/ad2.jpg",
    "assets/ad3.jpg",
    "assets/ad4.jpg",
  ];
  return (
    <div className="landingWrapper">
      <NavBar />
      <div className="banners">
        <Carousel>
          {bannerImages.map((image, index) => (
            <Carousel.Item key={index}>
              <img className="d-block w-100" src={image} alt={`${image}pic`} />
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <Link to="/products">
        <img
          className="d-block w-100"
          src="assets/longLanding.png"
          alt="landingProducts"
        />
      </Link>
      <Footer />
    </div>
  );
};

export default Landing;
