import React, { useState } from "react";
import { Link } from "react-router-dom";

import ProductCardVertical from "../cards/productCards/ProductCardVertical";
import "./CardContainerHorizontal.scss";

const CardContainerHorizontal = (props: any) => {
    if (!props.products) {
        return <div className="std-subHeader">
      No products to show
        </div>;
    }
    if(props.products.length>0){

  
        return (
            <div className="std-card cchWrapper">
                <p className="std-font2 m-0 p-0">{props.category}</p>
                <Link
                    className="std-link seeMoreLink"
                    to={`/products/query?category=${props.products[0].category}`}
                >
        See More...
                </Link>
                <div className="products">
                    {props.products.map((product: any, index: number) => {
                        if (index < 6)
                            return <ProductCardVertical key={index} product={product} />;
                    })}
                </div>
            </div>
        );
    }
    else{
        return <div className="std-subHeader">
        </div>;
    }
};

export default CardContainerHorizontal;
