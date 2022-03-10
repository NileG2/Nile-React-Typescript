import React, { useEffect, useState } from "react";
import "./QueryScreen.scss";
import { useSearchParams } from "react-router-dom";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav/NavBar";
import SidebarFilter from "../../components/filter/SidebarFilter";
import CardContainerGrid from "../../components/cardContainer/CardContainerGrid";
import axios from "axios";
import CardContainerHorizontal from "../../components/cardContainer/CardContainerHorizontal";
import { CircleSpinner } from "react-spinners-kit";

const QueryScreen = () => {
  const [params] = useSearchParams();
  const [loading, setLoading] = useState(false);

  let queryString = params.get("category") || "";
  let searchString = params.get("search") || "";

  const [queryProducts, setQueryProducts] = useState<any[]>([]);
  const [searchProducts, setSearchProducts] = useState<any[]>([]);

  const baseURL = "http://localhost:9000/api";

  useEffect(() => {
    if (queryString !== "") {
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
    }
  }, [queryString]);

  useEffect(() => {
    if (searchString !== "") {
      setLoading(true);
      axios
        .get(`${baseURL}/products/search?name=${searchString}`)
        .then((res) => {
          setLoading(false);
          setSearchProducts([...res.data.results]);
        })
        .catch((err) => {
          setLoading(false);
          console.log(err);
        });
    }
  }, [searchString]);

  if (loading)
    return (
      <div className="loadingDiv">
        <CircleSpinner size={30} color="#232f3e" />
      </div>
    );

  return (
    <div className="std-bg queryScreenWrapper">
      <NavBar />
      <h2 className="std-smallHeader topHeader">
        Choose from a variety of quality products
      </h2>
      {queryString !== "" && (
        <div className="content">
          {/* <div className="filterSidebar">
            <SidebarFilter
              queryProducts={queryProducts}
              setQueryProducts={setQueryProducts}
              operation="query"
            />
          </div> */}
          <div className="products">
            <CardContainerGrid products={queryProducts} />
          </div>
        </div>
      )}

      {searchString !== "" && (
        <div className="content">
          {/* <div className="filterSidebar">
            <SidebarFilter
              searchProducts={searchProducts}
              setSearchProducts={setSearchProducts}
              operation="search"
            />
          </div> */}
          <div className="products">
            {searchProducts.length === 0 ? (
              <h2>No results to display</h2>
            ) : (
              <div className="products">
                <CardContainerGrid products={searchProducts} />
              </div>
            )}
          </div>
        </div>
      )}

      <Footer />
    </div>
  );
};

export default QueryScreen;
