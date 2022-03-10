import React, { useEffect, useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import BecomeSeller from "./innerScreens/becomeSeller/BecomeSeller";
import MyDetail from "./innerScreens/myDetails/MyDetail";
import MyOrders from "./innerScreens/myOrders/MyOrders";
import Payments from "./innerScreens/payments/Payments";
import Watchlist from "./innerScreens/watchlist/Watchlist";
import "./ProfileDashboard.scss";
import axios from "axios";
import NavBar from "../../components/nav/NavBar";
import Footer from "../../components/footer/Footer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const ProfileDashboard = () => {
  const sidebarItems = [
    "My details",
    "Payments",
    "Watch List",
    "My Orders",
    "Become a Seller",
  ];
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);
  const navigate = useNavigate();

  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");

  useEffect(() => {
    if (!auth["email"]) {
      toast.info("Please sign in first");
      navigate("/products");
    }
  }, []);
  const renderSelectedScreen = () => {
    switch (selectedItemIndex) {
      case 0:
        return <MyDetail />;
      case 1:
        return <Payments />;
      case 2:
        return <Watchlist />;
      case 3:
        return <MyOrders />;
      case 4:
        return <BecomeSeller />;
      default:
        return <MyDetail />;
    }
  };
  return (
    <div className="std-bg">
      <NavBar />
      <div className="row">
        <div className="col-2 p-0">
          <Sidebar
            selectedItemIndex={selectedItemIndex}
            sidebarItems={sidebarItems}
            setSelectedItemIndex={setSelectedItemIndex}
          />
        </div>
        <div className="col-10 p-1">
          <div className="main">{renderSelectedScreen()}</div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ProfileDashboard;
