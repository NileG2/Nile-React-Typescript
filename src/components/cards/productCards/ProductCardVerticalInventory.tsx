import React, { useState } from "react";
import Rating from "@mui/material/Rating";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { toast } from "react-toastify";
import { getProductList } from "../../../redux/actions/Product";

const ProductCardVerticalInventory = (props: any) => {
    const auth = JSON.parse(sessionStorage.getItem("user") || "{}");
    const navigate = useNavigate();
    
    const dispatch = useDispatch();
    const productList = useSelector((state:any)=>state.productDetail.productList);
  

    const handleToDelete=(e:any, prod_cat:any, prod_id:any)=>{
        e.preventDefault();
        console.log(prod_cat + " " + prod_id);
        const data = productList.filter((prod:any,index:number)=>{
            return prod.product_id !==prod_id;
        });
        dispatch(getProductList(data));
        axios.delete(`http://localhost:9000/api/products/${prod_cat}/${prod_id}`, {
            data : {userid: auth["userid"]}
        }).then((res) => {
            toast.success("product deleted successfully");
        }).catch((err)=> {
            toast.error("something went wrong");
        }); 
    };

    return (
        <div className="Card" style={{maxWidth:"200px", maxHeight:"375px"}}>
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
                        style={{ cursor: "pointer" ,overflowY:"hidden", maxHeight:"24px"}}
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
                    <button className="std-btn std-btnOrange" onClick={(e) => { handleToDelete(e, props.product.category, props.product.product_id); }}>Delete</button>
          

                </div>
            </div>
        </div>
    );
};

export default ProductCardVerticalInventory;
