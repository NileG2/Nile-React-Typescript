import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import ProductCardVertical from "../cards/productCards/ProductCardVertical";
import "./CardContainerHorizontal.scss";

const CardContainerHorizontal = (props: any) => {
  // const [products, setProducts] = useState<any>([
  //   {
  //     product_name: "Jordan for Mens",
  //     product_id: "621b9e2f0df9ccbd0e2e5155",
  //     image: "https://picsum.photos/100",
  //     price: 19999,
  //     brand: "Jordan",
  //   },
  //   {
  //     product_name: "Jordan for women",
  //     product_id: "621b9e2f0df9ccbd0e2e5155",
  //     image: "https://picsum.photos/100",
  //     price: 199,
  //     brand: "Jordan",
  //   },
  //   {
  //     product_name: "Jordan for kids",
  //     product_id: "621b9e2f0df9ccbd0e2e5155",
  //     image: "https://picsum.photos/100",
  //     price: 199,
  //     brand: "Jordan",
  //   },
  //   {
  //     product_name: "Jordan for Mens",
  //     product_id: "621b9e2f0df9ccbd0e2e5155",
  //     image: "https://picsum.photos/100",
  //     price: 19999,
  //     brand: "Jordan",
  //   },
  //   {
  //     product_name: "Jordan for women",
  //     product_id: "621b9e2f0df9ccbd0e2e5155",
  //     image: "https://picsum.photos/100",
  //     price: 199,
  //     brand: "Jordan",
  //   },
  // ]);
  // const [listName, setListName] = useState("Shoes");

  if (!props.products) {
    return <></>;
  }
  return (
    <div className="std-card cchWrapper">
      <p className="std-font2 m-0 p-0">{props.category}</p>
      <Link
        className="std-link seeMoreLink"
        to={`/products/query?category=${props.products[0].category}`}
      >
        See More...
      </Link>
      <div className="container">
        <div className="d-flex">
          {props.products.map((product: any, index: number) => {
            return <ProductCardVertical key={index} product={product} />;
          })}
          {/* {products.map((product: any, index: number) => {
            return <ProductCardVertical key={index} product={product} />;
          })} */}
        </div>
      </div>
    </div>
  );
};

export default CardContainerHorizontal;
