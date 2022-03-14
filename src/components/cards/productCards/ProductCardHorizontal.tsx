import React, { useEffect, useState } from "react";
import "./ProductCard.scss";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";

import {
    setItemQuantity,
    removeItemFromCart,
    setCartSubTotal,
} from "../../../redux/actions/Cart";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import { addItemToWatchlist, removeItemFromWatchlist } from "../../../redux/actions/Watchlist";

import axios from "axios";

const ProductCardHorizontal = (props: any) => {

    console.log(props.product);

    const navigate = useNavigate();

    const auth = JSON.parse(sessionStorage.getItem("user") || "{}");
    const baseUrlCart = "http://localhost:9000/api/cart";
    const baseUrlWatchlist = "http://localhost:9000/api/watchlist";

    const allProducts = useSelector((state: any) => state.cart.userCart);
    const watchlistArray = useSelector(
        (state: any) => state.watchlist.userWatchlist
    );

    const [quantity, setQuantity] = useState(props.product.quantity || 1);
    const [addedToWatchlist, setAddedToWatchlist] = useState(false);

    const dispatch = useDispatch();

    function removeProductFromCart() {
        const requiredProducts = allProducts.filter((p: any, index: number) => {
            return index !== props.index;
        });
        axios
            .post(`${baseUrlCart}/delete`, {
                userid: auth.userid,
                product: {
                    product_id: props.product.product_id,
                },
            })
            .then((res) => {
                dispatch(removeItemFromCart(requiredProducts));
                setSubTotal(requiredProducts);
                toast.success("removed item from cart");
            })
            .catch((err) => {
                toast.error(err);
            });
    }

    function removeProductFromWatchlist() {
        const requiredProducts = allProducts.filter((p: any, index: number) => {
            return index !== props.index;
        });
        axios
            .post(`${baseUrlWatchlist}/delete/${props.product.product_id}`, {
                userid: auth.userid
            })
            .then((res) => {
                dispatch(removeItemFromWatchlist(requiredProducts));
                setSubTotal(requiredProducts);
                toast.success("removed item from watchlist");
            })
            .catch((err) => {
                // toast.error(err);
                console.log(err);
            });
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

        const tempProduct = props.product;
        tempProduct.quantity = e.target.value;
        tempProduct.payable = e.target.value * props.product.price;

        axios
            .post(`${baseUrlCart}/update`, {
                userid: auth.userid,
                product: {
                    product_id: props.product.product_id,
                    quantity: e.target.value,
                },
            })
            .then((res) => {
                dispatch(setItemQuantity(tempProduct, props.index));
                setSubTotal(allProducts);
                toast.success("updated quantity successfully");
            })
            .catch((err) => {
                toast.error(err);
            });
    }

    function addProductToWatchlist() {
        const allWatchlistProducts = watchlistArray;

        for (let i = 0; i < allWatchlistProducts.length; i++) {
            if (allWatchlistProducts[i].product_id === props.product.product_id) {
                toast.success("Product already exists in watchlist");
                return;
            }
        }

        allWatchlistProducts.push(props.product);
        console.log(props.product);

        axios
            .post("http://localhost:9000/api/watchlist/watchlists", {
                userid: auth.userid,
                watch_list: [
                    {
                        product_id: props.product.product_id,
                        product_name: props.product.name,
                        product_image: props.product.product_image,
                        price: props.product.price,
                        category: props.product.category
                    },
                ],
            })
            .then((res) => {
                dispatch(addItemToWatchlist(allWatchlistProducts));
                toast.success("Added item to Watchlist");
            })
            .catch((err) => {
                toast.error(err);
            });
    }

    return (
        <div className="Card">
            <div className="std-card std-card-dimension-horizontal std-no-shadow p-0">
                <div className="row m-2">
                    <div className="col-2">
                        <img
                            src={props.product.product_image}
                            width="150px"
                            height="150px"
                            alt="productImg"
                            onClick={() => {
                                console.log(props);
                                // navigate(
                                //   `/product/details?pid=${props.product.product_id}&category=${props.product.category}`
                                // );
                            }}
                        />
                    </div>
                    <div className="col-10">
                        <div className="row">
                            <div className="col-8">
                                <p className="m-0 std-boldFont overflow-hidden"
                                    onClick={() => {
                                        console.log(props);
                                        // navigate(
                                        //   `/product/details?pid=${props.product.product_id}&category=${props.product.category}`
                                        // );
                                    }}
                                >
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
                            {props.isCart === true ? <div className='col-5 row'>
                                <div className="col">
                                    <p
                                        onClick={() => {
                                            removeProductFromCart(); //from cart
                                        }}
                                        className="std-btn std-btnGray"
                                    >
                    Remove from Cart
                                    </p>
                                </div>
                                <div className="col" onClick={() => addProductToWatchlist()}>
                                    <p className="std-btn std-btnOrange">Add to watchlist</p>
                                </div>
                            </div> : <div className='col-5 row'>
                                <div className='col'></div>
                                <div className="col">
                                    <p
                                        onClick={() => {
                                            removeProductFromWatchlist(); //from watchlist
                                        }}
                                        className="std-btn std-btnGray"
                                    >
                    Remove from watchlist
                                    </p>
                                </div>
                            </div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductCardHorizontal;
