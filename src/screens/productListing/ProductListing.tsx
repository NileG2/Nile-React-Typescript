import axios from "axios";
import React, { useEffect, useState } from "react";
import { CircleSpinner } from "react-spinners-kit";
import CardContainerHorizontal from "../../components/cardContainer/CardContainerHorizontal";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav/NavBar";
import "./ProductListing.scss";

const ProductListing = () => {
  const [loading, setLoading] = useState(false);
  const [allProducts, setAllProducts] = useState<any>({});

  const baseURL = "http://localhost:9000/api";
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/products/landing?limit=10`)
      .then((res) => {
        setLoading(false);
        setAllProducts(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  if (loading)
    return (
      <div className="loadingDiv">
        <CircleSpinner size={30} color="#232f3e" />
      </div>
    );

  return (
    <div className="std-bg productListingWrapper">
      <NavBar />
      {/* <div className='d-flex'>
        <SidebarFilter />
        <div className='container'>
          <CardContainerHorizontal />
          <CardContainerHorizontal />
        </div>
      </div> */}
      <h2 className="std-smallHeader m-3 topHeader">
        Choose from a variety of quality products
      </h2>
      <div className="content">
        {/* <div className="filterSidebar">
          <SidebarFilter />
        </div> */}
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
      </div>
      <Footer />
    </div>
  );
};

export default ProductListing;
