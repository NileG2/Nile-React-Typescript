import "./Inventory.scss";
import { FaSearch } from "react-icons/fa";
import axios from "axios";
import React, { useState, useEffect } from "react";

import CardContainerGrid from "../../../../components/cardContainer/CardContainerGrid";
import { useDispatch, useSelector } from "react-redux";
import { getProductList } from "../../../../redux/actions/Product";
import { CircleSpinner } from "react-spinners-kit";

const Inventory = () => {
    const [addProductForm, setAddProductForm] = useState(true);
    const [Products,setProducts] = useState();
    const [MyProducts,setMyProducts] = useState<any>([]);
    const [loading,setLoading] = useState<any>(false);
    const auth = JSON.parse(sessionStorage.getItem("user") || "{}");
    const dispatch = useDispatch();
    const productList = useSelector((state:any)=>state.productDetail.productList);

    useEffect(() => {
        setLoading(true);
        axios.post("http://localhost:9000/api/myproducts/", {
            userid: auth["userid"]
        }).then(({ data }) => {
            setProducts(data.products);
      
            axios.post("http://localhost:9000/api/products/list", 
                data.products
            ).then(({ data }) => {
                setMyProducts(data.products);
                setLoading(false);
                dispatch(getProductList(data.products));
      
            }).catch(err=>{
                console.log(err);
            });
        }).catch(err=>{
            console.log(err);
            setLoading(false);
        });

    }, []);


    return (
        <div className="std-card m-2">
            <p className="std-font2">INVENTORY</p>
            <div className="std-section"></div>
            <div className="d-flex m-2">
            </div>
            <br />
            {
                loading === true ? <div className="loadingDiv">
                    <CircleSpinner size={30} color="#232f3e" />
                </div> : <>{
                    productList.length >0 ? <div><CardContainerGrid products = {productList} type={"seller"}/></div> : 
                        <h2 className="std-subHeader">No items in inventory... Please add some products.</h2>
        
                }</>
            }
        </div>
    );
};

export default Inventory;
