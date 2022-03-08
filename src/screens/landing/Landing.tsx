import React, { useState, useEffect } from "react";
import "./Landing.scss";
import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/Footer";
import { Carousel } from "react-bootstrap";
import SidebarFilter from "../../components/filter/SidebarFilter";
import CardContainerHorizontal from "../../components/cardContainer/CardContainerHorizontal";
import ProductListing from "../productListing/ProductListing";
import axios from "axios";

const Landing = () => {
  const bannerImages = [
    "assets/ad1.jpg",
    "assets/ad2.jpg",
    "assets/ad3.jpg",
    "assets/ad4.jpg",
  ];

  // const [loading, setLoading] = useState(false);
  // const [allProducts, setAllProducts] = useState<any>({});

  // useEffect(() => {
  //   setLoading(true);
  //   axios
  //     .get("http://localhost:9000/api/products/landing?limit=10")
  //     .then((res) => {
  //       setLoading(false);
  //       setAllProducts(res.data);
  //     })
  //     .catch((error) => console.log(error));
  // }, []);

  // if (loading)
  //   return (
  //     <div className="loadingDiv">
  //       <h2>Loading...</h2>
  //     </div>
  //   );
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
      {/* <h2 className="std-smallHeader m-3">
        Choose from a variety of quality products
      </h2>

      <div className="content">
        <div className="filterSidebar">
          <SidebarFilter />
        </div>
        <div className="products">
          <CardContainerHorizontal
            products={allProducts["appliances"]}
            category="Appliances"
          />
          <CardContainerHorizontal
            products={allProducts["electronics"]}
            category="Electronics"
          />
          <CardContainerHorizontal
            products={allProducts["mens_fashions"]}
            category="Trending for Men"
          />
          <CardContainerHorizontal
            products={allProducts["womens_fashions"]}
            category="Exclusively for Women"
          />
          <CardContainerHorizontal
            products={allProducts["kids_fashions"]}
            category="Kids"
          />
          <CardContainerHorizontal
            products={allProducts["toys_and_games"]}
            category="Toys and Games"
          />
          <CardContainerHorizontal
            products={allProducts["sports"]}
            category="Sports"
          />
        </div>
      </div> */}

      <Footer />
    </div>
  );
};

export default Landing;
