import React, { useEffect, useState } from "react";
import "./ProductCard.scss";
import Rating from "@mui/material/Rating";

import {
  setItemQuantity,
  removeItem,
  setCartSubTotal,
} from "../../../redux/actions/Cart";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

import axios from "axios";

const ProductCardHorizontal = (props: any) => {
  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");
  const baseUrl = "http://localhost:9000/api/cart"

  const allProducts = useSelector((state: any) => state.cart.userCart);
  const [currProduct, setCurrProduct] = useState(props.product);

  const [quantity, setQuantity] = useState(props.product.quantity || 1);

  useEffect(() => {
    setCurrProduct(props.product);
  }, [props.product]);

  const dispatch = useDispatch();

  function removeProduct() {
    let requiredProducts = allProducts.filter((p: any, index: number) => {
      return index !== props.index;
    });

    axios.post(`${baseUrl}/delete`, {
      "userid": auth.userid,
      "product": {
        product_id: props.product.product_id
      }
    }).then(res => {
      dispatch(removeItem(requiredProducts));
      setSubTotal(requiredProducts);
      toast.success("removed item from cart")
    }).catch(err => {
      toast.error(err)
    })
  }

  function setSubTotal(products: []) {
    function getSubTotal(products: any[]) {
      let sum = 0;
      for (let i = 0; i < products.length; i++) {
        sum += products[i].price * products[i].quantity;
      }
      return sum;
    }
    dispatch(setCartSubTotal(getSubTotal(products)));
  }

  function setProductQuantity(e: any) {
    setQuantity(e.target.value);

    let tempProduct = currProduct;
    tempProduct.quantity = e.target.value;
    tempProduct.payable = e.target.value * props.product.price;

    axios.post(`${baseUrl}/update`, {
      "userid": auth.userid,
      "product": {
        product_id: props.product.product_id,
        quantity: e.target.value
      }
    }).then(res => {
      setCurrProduct(tempProduct);
      dispatch(setItemQuantity(tempProduct, props.index));
      setSubTotal(allProducts);
      toast.success("updated quantity successfully")
    }).catch(err => {
      toast.error(err)
    })
  }

  return (
    <div className="Card">
      <div className="std-card std-card-dimension-horizontal std-no-shadow p-0">
        <div className="row m-2">
          <div className="col-2">
            <img src={
              props.product.image || "https://picsum.photos/100"
            } height="90%" alt="productImg" />
          </div>
          <div className="col-10">
            <div className="row">
              <div className="col-8">
                <p className="m-0 std-boldFont overflow-hidden">
                  {props.product.product_name}
                </p>
                <p className="std-bold std-greenText m-0 std-desc">In Stock</p>
                <p className="std-fontSmall std-desc m-0">
                  Sold By {props.product.brand || "Nile"}
                </p>
                <Rating name="read-only" value={3.5} precision={0.5} readOnly />
              </div>
              <div className="col-4">
                <div className="row">
                  <p
                    className="col-9 m-0 p-0 std-boldFont std-font2"
                    style={{ textAlign: "end" }}
                  >
                    {props.product.price}
                  </p>
                  <p className="col-3 m-0 std-desc std-fontSmall">INR</p>
                </div>
                {/* <button className='std-btn std-btnOrange'>Add to Cart</button> */}
              </div>
            </div>
            <div className="row">
              <div className="col-7 d-flex">
                <label style={{ marginRight: "1em" }} className="std-fontSmall">
                  Quantity
                </label>
                <input
                  type="number"
                  value={quantity}
                  name="quantity"
                  onChange={(e) => {
                    setProductQuantity(e);
                  }}
                  className="std-number-input std-btn"
                  min={1}
                  max={10}
                />
              </div>
              <div className="col-2">
                <p
                  onClick={() => {
                    removeProduct();
                  }}
                  className="std-btn std-btnGray"
                >
                  Delete
                </p>
              </div>
              <div className="col-3">
                <p className="std-btn std-btnOrange">Add to watchlist</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCardHorizontal;
