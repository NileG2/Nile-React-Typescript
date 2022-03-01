import React, { useState } from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import BecomeSeller from "./innerScreens/becomeSeller/BecomeSeller";
import MyDetail from "./innerScreens/myDetails/MyDetail";
import MyOrders from "./innerScreens/myOrders/MyOrders";
import Payments from "./innerScreens/payments/Payments";
import Watchlist from "./innerScreens/watchlist/Watchlist";
import "./ProfileDashboard.scss";

const ProfileDashboard = () => {
  const sidebarItems = [
    "My details",
    "Payments",
    "Watch List",
    "My Orders",
    "Become a Seller",
  ];
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

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
    <div className="profileWrapper">
      {/* to be replaced by Navbar component */}
      <div className="nav"></div>

      <div className="content">
        <div className="sidebar">
          <Sidebar
            selectedItemIndex={selectedItemIndex}
            sidebarItems={sidebarItems}
            setSelectedItemIndex={setSelectedItemIndex}
          />
        </div>
        <div className="main">{renderSelectedScreen()}</div>
      </div>

      {/* to be replaced by Footer component */}
      <div className="footer"></div>
    </div>
  );
};

export default ProfileDashboard;
