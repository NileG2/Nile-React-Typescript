import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";

const ProductCardVerticalInventory = (props: any) => {
  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  const handleToDelete = (): void => {
    console.log("handle delete");
  };

  console.log("props", props);
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
            width="200px"
            height="200px"
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
          <button
            className="std-btn std-btnOrange"
            onClick={() => {
              handleToDelete();
            }}
          >
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCardVerticalInventory;
