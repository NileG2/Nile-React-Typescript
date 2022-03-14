import React, { useEffect, useState } from "react";
import "./ProductCard.scss";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";

const ProductCardHorizontalMini = (props: any) => {

    const navigate = useNavigate();

    const allProducts = useSelector((state: any) => state.cart.userCart);
    const [currProduct, setCurrProduct] = useState(props.product);

    return (
        <div className="Card">
            <div className="p-0" style={{ height: "4.5em" }}>
                <div className="row m-2">
                    <div className="col-2">
                        <img
                            src={props.product.product_image}
                            width="70px"
                            height="70px"
                            className="m-2"
                            onClick={() => {
                                console.log(props);
                                navigate(
                                    `/product/details?pid=${props.product.product_id}&category=${props.product.category}`
                                );
                            }}
                        />
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-8">
                                <p className="m-0 std-boldFont overflow-hidden"
                                    onClick={() => {
                                        console.log(props);
                                        navigate(
                                            `/product/details?pid=${props.product.product_id}&category=${props.product.category}`
                                        );
                                    }}>
                                    {props.product.product_name}
                                </p>
                                <p className="std-fontSmall std-desc m-0">
                  Sold By {props.product.brand || "Nile"}
                                </p>
                            </div>
                            <div className="col-4">
                                <div className="row">
                                    <p
                                        className="col-9 m-0 p-0 std-boldFont std-font2"
                                        style={{ textAlign: "end" }}
                                    >
                                        {props.product.quantity*props.product.price}
                                    </p>
                                    <p className="col-3 m-0 std-desc std-fontSmall">INR</p>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div style={{ marginRight: "1em" }} className="std-fontSmall">
                Quantity: {props.product.quantity}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardHorizontalMini;
