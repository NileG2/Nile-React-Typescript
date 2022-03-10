import React, { useState, useEffect } from "react";
import CartCard from "../../components/cart/CartCard";
import CheckoutSidebar from "../../components/checkoutSidebar/CheckoutSidebar";
import { setCartSubTotal } from "../../redux/actions/Cart";
import { useDispatch, useSelector } from "react-redux";
import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/Footer";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import { initializeCart } from "../../redux/actions/Cart";
import { toast } from "react-toastify";

const Cart = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [email, setemail] = useState("");

  const productsFromCart = useSelector((state: any) => state.cart.userCart);

  const baseUrl = "http://localhost:9000/api/cart";

  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");

  useEffect(() => {
    if (!auth["userid"]) {
      toast.info("Please sign in first");
      navigate("/products");
    } else
      axios
        .post(`${baseUrl}/get`, {
          userid: auth.userid,
        })
        .then((res) => {
          dispatch(
            initializeCart(
              res.data.status.product_selected,
              res.data.status.total_amount
            )
          );
        });
  }, []);

  useEffect(() => {
    function setSubTotal(products: []) {
      function getSubTotal(products: any[]) {
        console.log(products);
        let sum = 0;
        for (let i = 0; i < products.length; i++) {
          sum += products[i].price * products[i].quantity;
        }
        return sum;
      }
      dispatch(setCartSubTotal(getSubTotal(products)));
    }

    setSubTotal(productsFromCart);
  }, []);

  return (
    <div className="std-bg">
      <NavBar />
      <div className="row m-1 mt-5 mb-5">
        <div className="col-9">
          <CartCard />
        </div>
        <div className="col-3">
          <CheckoutSidebar isCheckout={false} />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Cart;
