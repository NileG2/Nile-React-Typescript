import React, { useEffect, useState } from "react";
import "./QueryScreen.scss";
import { useSearchParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav/NavBar";
import SidebarFilter from "../../components/filter/SidebarFilter";
import CardContainerGrid from "../../components/cardContainer/CardContainerGrid";
import axios from "axios";

const QueryScreen = () => {
  const [params] = useSearchParams();
  const [loading, setLoading] = useState(false);

  let queryString = params.get("category") || params.get("search");
  const [queryProducts, setQueryProducts] = useState<any[]>([]);
  const baseURL = "http://localhost:9000/api";

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${baseURL}/products/all/${queryString}`)
      .then((res) => {
        setLoading(false);
        setQueryProducts([...res.data.docs]);
      })
      .catch((err) => {
        setLoading(false);
        console.log(err);
      });
  }, [queryString]);

  if (loading)
    return (
      <div className="loadingDiv">
        <h2>Loading...</h2>
      </div>
    );

  return (
    <div className="std-bg">
      <NavBar />
      <h2 className="std-smallHeader m-3">
        Choose from a variety of quality products
      </h2>
      <div className="content">
        <div className="filterSidebar">
          <SidebarFilter />
        </div>
        <div className="products">
          <CardContainerGrid products={queryProducts} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default QueryScreen;
