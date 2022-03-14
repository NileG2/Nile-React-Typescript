import React, { useState, useEffect } from "react";
import ProductGeneral from "./forms/ProductGeneral";
import ProductHighlights from "./forms/ProductHighlights";
import TechnicalDetails from "./forms/TechnicalDetails";
import ProductSizes from "./forms/ProductSizes";
import ProductColor from "./forms/ProductColor";
import ProductImages from "./forms/ProductImages";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import "./AddPFC.scss";
import { CircleSpinner } from "react-spinners-kit";
import { useNavigate } from "react-router-dom";

const AddProductFormContainer = (props: any) => {
    const product = useSelector((state: any) => state.productDetail.product);
    const dispatch = useDispatch();
    const auth = JSON.parse(sessionStorage.getItem("user") || "{}");
    const [sellerDetails, setSellerDetails] = useState<any>({});
    const [loading, setLoading] = useState(true);
    console.log(props.inventory);
    const navigate = useNavigate();
    const addProductToMongoAndFirestore = (e: any) => {
        e.preventDefault();

        const productDetail = {
            product_name: product.name,
            product_price: product.price,
            product_category: product.category,
            brand: product.brand,
            product_tags: [],
            highlights: product.highlights,
            technical_details: product.technical_details,
            available_quantity: parseInt(product.available_quantity),
            buying_options: product.buying_options,
            product_images: product.images,
            inventory_id: props.inventory,
            rating_id: "",
        };

        let pid = "";

        axios
            .post("http://localhost:9000/api/products/", productDetail)
            .then((res) => {
                console.log(res.data.product_id);
                pid = res.data.product_id;
                axios
                    .post("http://localhost:9000/api/rating/new/", {
                        product_id: res.data.product_id,
                    })
                    .then((res) => {
                        console.log(res.data.rating_id);
                        axios
                            .put(
                                `http://localhost:9000/api/products/${product.category}/${pid}`,
                                {
                                    rating_id: res.data.rating_id,
                                }
                            )
                            .then((res) => {
                                console.log(res.data);
                                toast.success("Product added successfully");
                                // navigate("/seller-profile");
                                window.location.href = "http://localhost:3000/seller-profile";
                            });
                    });
                // console.log(res.data)
            })
            .catch((err) => {
                console.log(err);
            });
        console.log(productDetail);
    };

    const categories = [
        {
            category: "Electronics",
            url: "electronics",
        },
        {
            category: "Appliances",
            url: "appliances",
        },
        {
            category: "Men's Fashion",
            url: "mens_fashions",
        },
        {
            category: "Women's Fashion",
            url: "womens_fashions",
        },
        {
            category: "Kids Fashion",
            url: "kids_fashions",
        },
        {
            category: "Sports",
            url: "sports",
        },
        {
            category: "Toys and Games",
            url: "toys_and_games",
        },
        {
            category: "Other",
            url: "other",
        },
    ];

    useEffect(() => {
        axios
            .post("http://localhost:9000/api/sellers/", {
                userid: auth["userid"],
            })
            .then((res) => {
                setLoading(false);
                console.log(res.data.business);
                setSellerDetails(res.data.business);
            })
            .catch((err) => {
                setLoading(false);
                toast.error("Some error occured");
                console.log(err);
            });
    }, []);

    if (!sellerDetails["business_name"]) {
        return (
            <div className="loadingDiv" style={{ marginLeft: "-10%" }}>
                <CircleSpinner color="#000000" size={30} />
            </div>
        );
    }

    return (
        <div className="std-card m-2 addPFCWrapper">
            {loading !== true && (
                <div className="std-card sellerDetails">
                    <div className="fullRow">
                        <div className="title std-header">
                            {sellerDetails["business_name"]}
                        </div>
                        <div className="category std-subHeader">
                            <span className="std-bold std-greenText">Category: </span>
                            {
                                categories.filter(
                                    (cat) => cat.url === sellerDetails["sector"]
                                )[0]["category"]
                            }
                        </div>
                    </div>
                    <div className="fullRow">
                        <div className="address">
                            <span className="std-bold">Address: </span>
                            {sellerDetails["addresses"][0].address_line_1},{" "}
                            {sellerDetails["addresses"][0].locality},{" "}
                            {sellerDetails["addresses"][0].city},{" "}
                            {sellerDetails["addresses"][0].state},{" "}
                            {sellerDetails["addresses"][0].country},{" "}
                            {sellerDetails["addresses"][0].pincode}
                        </div>
                        <div className="contact">
                            <span className="std-bold">Mobile: </span>
                            {sellerDetails["contact"][0].mobile.mobile_number}, <br />
                            <span className="std-bold">Email: </span>
                            {sellerDetails["contact"][1].email.email}
                        </div>
                    </div>
                </div>
            )}

            <p className="std-font2">ADD PRODUCT</p>
            <div className="std-section"></div>
            <div className="row">
                <div className="col">
                    <ProductGeneral />
                    <ProductHighlights />
                    <TechnicalDetails />
                </div>
                <div className="col">
                    <ProductImages />
                    <ProductSizes />
                    <ProductColor />
                </div>
            </div>

            <div className="d-grid gap-2">
                <button
                    className="std-btn std-btnOrange"
                    type="button"
                    onClick={(e) => {
                        addProductToMongoAndFirestore(e);
                    }}
                >
          Save
                </button>
            </div>
        </div>
    );
};

export default AddProductFormContainer;
