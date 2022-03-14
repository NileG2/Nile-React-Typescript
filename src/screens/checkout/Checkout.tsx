import axios from "axios";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import CheckoutContainer from "../../components/checkoutComponents/CheckoutContainer";
import CheckoutSidebar from "../../components/checkoutSidebar/CheckoutSidebar";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav/NavBar";
import { addNewPayment, setPayment } from "../../redux/actions/BuyerPayment";
import {  useDispatch } from "react-redux";
import { initializeCart } from "../../redux/actions/Cart";

const Checkout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const auth = JSON.parse(sessionStorage.getItem("user") || "{}");
    const baseUrlPayment = "http://localhost:9000/api/payment";
    const baseUrlCart = "http://localhost:9000/api/cart";

    useEffect(() => {

        if (!auth["userid"]) {
            toast.info("Please sign in first");
            navigate("/products");
        }

        axios.post(`${baseUrlPayment}`, {
            userid: auth.userid
        })
            .then(async ({ data }) => {
                dispatch(addNewPayment(data.status.payment_methods));
                dispatch(setPayment(data.status.payment_methods[0]));
            }).catch(err => {
                console.log(err);
            });

        axios.post(`${baseUrlCart}/get`, {
            "userid": auth.userid
        }).then(res => {
            dispatch(initializeCart(res.data.status.product_selected, res.data.status.total_amount));
        });
    }, []);

    return (
        <div className="std-bg">
            <NavBar />
            <div className="row m-1 mb-5 mt-5">
                <div className="col-9">
                    <CheckoutContainer />
                </div>
                <div className="col-3">
                    <CheckoutSidebar isCheckout={true} />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Checkout;
