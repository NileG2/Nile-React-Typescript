import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { toast } from "react-toastify";
import ProductCardDetails from "../../components/cards/productCards/ProductCardDetails";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav/NavBar";
import { useNavigate } from "react-router-dom";

import { addItemToCart } from "../../redux/actions/Cart";
import { addItemToWatchlist } from "../../redux/actions/Watchlist";

const ProductDetails = () => {
    const navigate = useNavigate();

    const [params] = useSearchParams();
    const [loading, setLoading] = useState(false);

    const productId = params.get("pid");
    const category = params.get("category");

    const baseUrlProduct = "http://localhost:9000/api/products";

    const dispatch = useDispatch();
    const cartArray = useSelector((state: any) => state.cart.userCart);
    const watchlistArray = useSelector(
        (state: any) => state.watchlist.userWatchlist
    );

    const auth = JSON.parse(sessionStorage.getItem("user") || "{}");
    const baseUrlAddToCart = "http://localhost:9000/api/cart";
    const baseUrlAddToWatchlist =
    "http://localhost:9000/api/watchlist/watchlists";

    function handleAddToCart() {
        const allCartProducts = cartArray;
        allCartProducts.push(product);

        console.log(product);

        const body = {
            userid: auth.userid,
            product: {
                product_id: product.product_id,
                product_name: product.product_name,
                product_image: product.image,
                price: product.price,
                quantity: 1,
            },
        };

        console.log(body);

        axios
            .post(`${baseUrlAddToCart}/new`, body)
            .then((res) => {
                console.log(res);
                dispatch(addItemToCart(allCartProducts));
                toast.success("Added item to cart");
            })
            .catch((err) => {
                toast.error(err);
            });
    }

    function handleAddToWatchlist() {
        const allWatchlistProducts = watchlistArray;

        for (let i = 0; i < allWatchlistProducts.length; i++) {
            if (allWatchlistProducts[i].product_id === product.product_id) {
                toast.success("Product already exists in watchlist");
                return;
            }
        }

        const reqProduct = {
            product_id: product.product_id,
            product_name: product.product_name,
            product_image: product.image,
            price: product.price,
            quantity: 1,
        };
        console.log(product);
        allWatchlistProducts.push(reqProduct);

        const body = {
            userid: auth.userid,
            watch_list: allWatchlistProducts,
        };

        console.log(body);
        console.log(allWatchlistProducts);

        axios
            .post(`${baseUrlAddToWatchlist}`, body)
            .then((res) => {
                console.log(res);
                dispatch(addItemToWatchlist(allWatchlistProducts));
                toast.success("Added item to watchlist");
            })
            .catch((err) => {
                toast.error(err);
                console.log(err);
            });
    }

    useEffect(() => {
        function getOptionsArray(buying_options: any) {
            const optionsArray: any[] = [];
            optionsArray.push({
                type: "color",
                available: buying_options.color,
            });
            optionsArray.push({
                type: "size",
                available: buying_options.size,
            });
            return optionsArray;
        }

        if (productId !== "") {
            setLoading(true);
            axios
                .get(`${baseUrlProduct}/${category}/${productId}`)
                .then((res) => {
                    setLoading(false);
                    // console.log(res.data.doc);
                    const doc = res.data.doc;
                    const currProduct = {
                        product_name: doc.name,
                        product_id: doc.product_id,
                        image: doc.images[0] || "https://picsum.photos/100",
                        price: doc.price,
                        brand: doc.brand,
                        payable: doc.price,
                        quantity: 1,
                        options: getOptionsArray(doc.buying_options),
                        slides: doc.images,
                        details: doc.highlights,
                        technicalDetails: doc.technical_details,
                        rating_id: doc.rating_id,
                        rating: {
                            total: 311,
                            stars: {
                                "5": 0.7,
                                "4": 0.2,
                                "3": 0.1,
                                "2": 0.03,
                                "1": 0.03,
                            },
                        },
                        reviews: [
                            {
                                poster: "Aditya Dawadikar",
                                date: "18-12-2021",
                                comment:
                  "Quisque feugiat condimentum sem eget vestibulum. Nam purus felis, ullamcorper ut sem a, iaculis faucibus est. Donec congue, nisi vitae condimentum volutpat, quam magna porta ipsum, sed cursus tortor neque eget erat.",
                            },
                            {
                                poster: "Farhan Akhtar",
                                date: "2-2-2022",
                                comment:
                  "Quisque feugiat condimentum sem eget vestibulum. Nam purus felis, ullamcorper ut sem a, iaculis faucibus est. Donec congue, nisi vitae condimentum volutpat, quam magna porta ipsum, sed cursus tortor neque eget erat.",
                            },
                            {
                                poster: "Richard",
                                date: "13-2-2022",
                                comment:
                  "Quisque feugiat condimentum sem eget vestibulum. Nam purus felis, ullamcorper ut sem a, iaculis faucibus est. Donec congue, nisi vitae condimentum volutpat, quam magna porta ipsum, sed cursus tortor neque eget erat.",
                            },
                        ],
                    };
                    setProduct(currProduct);
                })
                .catch((err) => {
                    setLoading(false);
                    console.log(err);
                });
        }
    }, []);

    const [product, setProduct] = useState<any>(null);
    return (
        <div className="std-bg">
            <NavBar />
            <div className="row m-1 mt-5 mb-5">
                <div className="col-9">
                    {product !== null ? <ProductCardDetails product={product} /> : <></>}
                </div>
                <div className="col-3">
                    <div className="std-card">
                        {auth ? (
                            <button
                                className="std-btn container m-2 std-btnOrange"
                                onClick={() => {
                                    handleAddToCart();
                                }}
                            >
                Add to Cart
                            </button>
                        ) : (
                            <button
                                className="std-btn std-btnOrange"
                                onClick={() => navigate("/signin")}
                            >
                Sign In to buy
                            </button>
                        )}
                        {auth ? (
                            <button
                                className="std-btn container m-2 std-btnGrey"
                                onClick={() => {
                                    handleAddToWatchlist();
                                }}
                            >
                Add to Watchlist
                            </button>
                        ) : (
                            <button
                                className="std-btn std-btnOrange"
                                onClick={() => navigate("/signin")}
                            >
                Sign In to add to watchlist
                            </button>
                        )}
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default ProductDetails;
