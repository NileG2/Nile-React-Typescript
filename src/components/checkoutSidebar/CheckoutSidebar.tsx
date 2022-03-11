import React from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const CheckoutSidebar = ({ isCheckout }: any) => {

  const billingAddress = useSelector((state: any) => state.checkout.billingAddress)
  const deliveryAddress = useSelector((state: any) => state.checkout.deliveryAddress)
  const paymentOption = useSelector((state: any) => state.checkout.paymentMode)
  const subtotal = useSelector((state: any) => state.cart.subtotal);
  const navigate = useNavigate();

  return (
    <div className="std-card">
      <div>
        <p className="p-2 m-0 text-left std-font2">Subtotal</p>
        <div className="d-flex">
          <p
            className="std-fontSmall m-1 std-font1"
            style={{ paddingTop: "10px" }}
          >
            INR
          </p>
          <p className="std-boldFont m-1 std-font2">{subtotal}</p>
        </div>
      </div>
      {isCheckout === true && deliveryAddress !== null ? (
        <div>
          <div className="std-section"></div>
          <p className="p-2 m-0 text-left std-font2">Deliver to</p>
          <div className="p-1">
            {/* <p className="std-boldFont std-font1  m-0">{deliveryAddress.name}</p> */}
            <p className="std-font1 m-0">{deliveryAddress.address_line_1}</p>
            <p className="std-font1 m-0">{deliveryAddress.locality+", "+deliveryAddress.city+", "+deliveryAddress.country}</p>
            <div className="d-flex">
              <p className="std-font1 std-boldFont m-0">Pincode: </p>
              <p className="std-font1 m-0">{deliveryAddress.pincode}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {isCheckout === true && billingAddress !== null ? (
        <div>
          <div className="std-section"></div>
          <p className="p-2 m-0 text-left std-font2">Billing Address</p>
          <div className="p-1">
            {/* <p className="std-boldFont std-font1  m-0">{billingAddress.name}</p> */}
            <p className="std-font1 m-0">{billingAddress.address_line_1}</p>
            <p className="std-font1 m-0">{billingAddress.locality+", "+billingAddress.city+", "+billingAddress.country}</p>
            <div className="d-flex">
              <p className="std-font1 std-boldFont m-0">Pincode: </p>
              <p className="std-font1 m-0">{billingAddress.pincode}</p>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
      {isCheckout === true && paymentOption !== null ? (
        <div>
          <div className="std-section"></div>
          <p className="p-2 m-0 text-left std-font2">Payment Details</p>
          <div className="d-flex m-2">
            <p className="std-font1 std-boldFont m-0">Mode: </p>
            <p className="std-font1 m-0">{" " + paymentOption.BankingInfo.payment_type}</p>
          </div>
        </div>
      ) : (
        <></>
      )}
      <div className="std-section"></div>
      <br />
      {isCheckout === true ? (
        // <button className="std-btn std-btnOrange container" >Proceed</button>
        <></>
      ) : (
        <button
          className="std-btn std-btnOrange container"
          onClick={() => navigate("/checkout")}
        >
          Checkout
        </button>
      )}
    </div>
  );
};

export default CheckoutSidebar;
