import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

const ProductCardVertical = (props: any) => {
  const auth = sessionStorage.getItem("user")
  const navigate = useNavigate();

  return (
    <div className="Card">
      <div className="std-card std-card-dimension std-no-shadow p-0 m-1">
        <div className="d-flex justify-content-center">
          <img
            alt="productImg"
            src={
              props.product.images.length > 0
                ? props.product.images[0]
                : "https://picsum.photos/100"
            }
            width="100%"
            height="100%"
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate(
                `/product/details?pid=${props.product.product_id}&category=${props.product.category}`
              )
            }
          />
        </div>
        <div className="p-2">
          <p
            className="m-0 std-boldFont overflow-hidden"
            style={{ cursor: "pointer" }}
            onClick={() =>
              navigate(`/product/details?pid=${props.product.product_id}`)
            }
          >
            {props.product.name}
          </p>
          <p className="std-bold std-greenText m-0 std-desc">
            {props.product.available_quantity > 0 ? (
              "In Stock"
            ) : (
              <span className="std-redText">Out of Stock</span>
            )}
          </p>
          <p className="std-fontSmall std-desc m-0">
            Sold by: {props.product.brand || "Nile"}
          </p>

          {/* hardcoded rating */}
          <Rating name="read-only" value={3.5} precision={0.5} readOnly />

          <div className="row">
            <p className="col-3 m-0 std-desc std-fontSmall">INR</p>
            <p className="col-9 m-0 p-0 std-boldFont  std-font1">
              {props.product.price}
            </p>
          </div>
          {
            auth ? <button className="std-btn std-btnOrange">Add to Cart</button> : <button className="std-btn std-btnOrange" onClick={()=>navigate("/signin")}>Sign In to buy</button>
          }
          
        </div>
      </div>
    </div>
  );
};

export default ProductCardVertical;
