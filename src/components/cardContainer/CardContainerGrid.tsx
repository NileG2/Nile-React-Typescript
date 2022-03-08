import React, { useState } from "react";
import ProductCardVertical from "../cards/productCards/ProductCardVertical";
import "./CardContainerGrid.scss";

const CardContainerGrid = (props: any) => {
  return (
    <div className="row cardDiv">
      {props.products.map((product: any, index: number) => {
        return (
          <div className="col-2" key={index}>
            <ProductCardVertical key={index} product={product} />
          </div>
        );
      })}
    </div>
  );
};

export default CardContainerGrid;
