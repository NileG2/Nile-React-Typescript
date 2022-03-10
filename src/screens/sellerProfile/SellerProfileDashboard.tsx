import React, { useEffect, useState } from "react";
import Payments from "./innerScreens/payments/Payments";
import Inventory from "./innerScreens/inventory/Inventory";
import SalesSummary from "./innerScreens/sales/SalesSummary";
import Sidebar from "../../components/sidebar/Sidebar";
import "./SellerProfileDashboard.scss";
import { useDispatch, useSelector } from 'react-redux'
import NavBar from "../../components/nav/NavBar";
import AddProductFormContainer from "../../components/addProduct/AddProductFormContainer";
import Footer from "../../components/footer/Footer";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const SellerProfileDashboard = () => {
  const sidebarItems = [
    "Inventory",
    "Sales Summary",
    "Payments",
    "Add Product",
  ];

  const [selectedItemIndex, setSelectedItemIndex] = useState(3);
  const navigate = useNavigate();
  let [inventory, setInventory] = useState<any>([]);

  let inventoryInfo = useSelector((state:any)=>state.productDetail.inventoryInfo)
  let dispatch = useDispatch()

  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");

  useEffect(() => {
      axios.post("http://localhost:9000/api/order/orders", {
          userid: auth["userid"],
        })
        .then(({ data }) => {
          setInventory(data.Orders)
        })
        .catch((err) => {
          toast.error(`${err}`);
        });

    if (!auth["email"]) {
      toast.info("Please sign in first");
      navigate("/products");
    }
    if (auth["isSeller"] !== true) {
      navigate("/products");
    }
  }, []);

  const renderSelectedScreen = () => {
    switch (selectedItemIndex) {
      case 0:
        return <Inventory />;
      case 1:
        return <SalesSummary />;
      case 2:
        return <Payments />;
      case 3:
        return <AddProductFormContainer inventory = {inventory} />;
      default:
        return <Inventory />;
    }
  };

  return (
    <div className="std-bg">
      <NavBar />
      <div className="row ">
        <div className="col-2 p-0">
          <Sidebar
            selectedItemIndex={selectedItemIndex}
            sidebarItems={sidebarItems}
            setSelectedItemIndex={setSelectedItemIndex}
          />
        </div>
        <div className="col-10 p-2">
          <div className="main">{renderSelectedScreen()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default SellerProfileDashboard;
