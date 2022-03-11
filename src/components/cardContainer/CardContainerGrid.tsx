import React, { useState } from "react";
import ProductCardVertical from "../cards/productCards/ProductCardVertical";
import ProductCardVerticalInventory from "../cards/productCards/ProductCardVerticalInventory";
import "./CardContainerGrid.scss";

const CardContainerGrid = (props: any) => {
  const [pageNum, setPageNum] = useState(0);
  const pageSize = 10;
  const totalPages = Math.ceil(props.products.length / pageSize);
  if (!props.products) {
    return <></>;
  }
  if(props.type==="seller"){
    
    return (
      <div className="row cardDiv">
        <div className="products std-card">
          {props.products
            .slice(pageNum * pageSize, (pageNum + 1) * pageSize)
            .map((product: any, index: number) => {
              return (
                <div className="col-2" key={index}>
                  <ProductCardVerticalInventory key={index} product={product} />
                </div>
              );
            })}
        </div>
        <div className="paginationBar">
          <button
            className={`editPageNum std-btn ${
              pageNum === 0 ? "btnGray" : "std-btnOrange"
            }`}
            disabled={pageNum === 0}
            onClick={() => setPageNum(pageNum - 1)}
          >
            {"<"}
          </button>
          <span>
            Page {pageNum + 1} of {totalPages}
          </span>
          <button
            className={`editPageNum std-btn ${
              pageNum === totalPages - 1 ? "btnGray" : "std-btnOrange"
            }`}
            disabled={pageNum === totalPages - 1}
            onClick={() => setPageNum(pageNum + 1)}
          >
            {">"}
          </button>
        </div>
      </div>
    );


  }
  return (
    <div className="row cardDiv">
      <div className="products std-card">
        {props.products
          .slice(pageNum * pageSize, (pageNum + 1) * pageSize)
          .map((product: any, index: number) => {
            return (
              <div className="col-2" key={index}>
                <ProductCardVertical key={index} product={product} />
              </div>
            );
          })}
      </div>
      <div className="paginationBar">
        <button
          className={`editPageNum std-btn ${
            pageNum === 0 ? "btnGray" : "std-btnOrange"
          }`}
          disabled={pageNum === 0}
          onClick={() => setPageNum(pageNum - 1)}
        >
          {"<"}
        </button>
        <span>
          Page {pageNum + 1} of {totalPages}
        </span>
        <button
          className={`editPageNum std-btn ${
            pageNum === totalPages - 1 ? "btnGray" : "std-btnOrange"
          }`}
          disabled={pageNum === totalPages - 1}
          onClick={() => setPageNum(pageNum + 1)}
        >
          {">"}
        </button>
      </div>
    </div>
  );
};

export default CardContainerGrid;
