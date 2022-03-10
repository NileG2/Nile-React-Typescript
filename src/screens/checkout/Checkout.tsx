import React from "react";
import CheckoutContainer from "../../components/checkoutComponents/CheckoutContainer";
import CheckoutSidebar from "../../components/checkoutSidebar/CheckoutSidebar";
import Footer from "../../components/footer/Footer";
import NavBar from "../../components/nav/NavBar";

const Checkout = () => {
  return (
    <div className="std-bg">
      <NavBar />
      <div className="row m-1 mb-5 mt-5">
        <div className="col-9">
          <CheckoutContainer />
        </div>
        <div className="col-3">
          <CheckoutSidebar isCheckout={true}/>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Checkout;
