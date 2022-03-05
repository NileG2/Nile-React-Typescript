import React, { useState } from "react";
import Payments from "./innerScreens/payments/Payments";
import Inventory from "./innerScreens/inventory/Inventory";
import SalesSummary from "./innerScreens/sales/SalesSummary";
import Sidebar from "../../components/sidebar/Sidebar";
import "./SellerProfileDashboard.scss";

import NavBar from '../../components/nav/NavBar'

const SellerProfileDashboard = () => {
  const sidebarItems = ["Inventory", "Sales Summary", "Payments"];
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

  const renderSelectedScreen = () => {
    switch (selectedItemIndex) {
      case 0:
        return <Inventory />;
      case 1:
        return <SalesSummary />;
      case 2:
        return <Payments />;
      default:
        return <Inventory />;
    }
  };

  return (
    <div className="sellerProfileWrapper">
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

export default SellerProfileDashboard;
