import React, { useState } from "react";
import PaymentMode from "../checkoutCards/PaymentMode";
import AddressBox from "../checkoutCards/AddressBox";
import Coupon from "../checkoutCards/Coupon";
import { Link } from "react-router-dom";

const PlaceOrder = () => {
  const [currMode, setCurrMode] = useState({
    type: "Debit Card",
    details: {
      card_number: "1234-4567-7890-0123",
      expiry: "11/23",
    },
  });
  const [currAddress, setCurrAddress] = useState({
    name: "Aditya Dawadikar",
    line1: "201 A, Uday Glorious park",
    line2: "Gawadewada, near Vaishnav devi temple",
    pincode: "411033",
  });

  const [availableCoupons, setAvailableCoupons] = useState([
    {
      type: "flat",
      details: {
        amount: "100",
        description: "Get flat 100/- off on a purchase of 599/- and above",
        code: "First30",
      },
    },
    {
      type: "discount",
      details: {
        amount: "0.1",
        description: "Get flat 10% off on a purchase of 1299/- and above",
        code: "new90",
      },
    },
    {
      type: "flat",
      details: {
        amount: "1000",
        description:
          "Get flat 1000/- off on a purchase of 16999/-  and above using GPay",
        code: "GLoyal",
      },
    },
    {
      type: "discount",
      details: {
        amount: "0.33",
        description: "Get flat 10% off on a purchase of 1299/- and above",
        code: "new90",
      },
    },
    {
      type: "flat",
      details: {
        amount: "1000",
        description:
          "Get flat 1000/- off on a purchase of 16999/-  and above using GPay",
        code: "GLoyal",
      },
    },
    {
      type: "discount",
      details: {
        amount: "0.1",
        description: "Get flat 10% off on a purchase of 1299/- and above",
        code: "new90",
      },
    },
  ]);
  const [currCoupon, setCurrCoupon] = useState<any>(null);

  const dummyCartTotal = 2999;
  const dummyDeliveryCharge = 90;

  function getSubTotal() {
    if (currCoupon !== null) {
      if (currCoupon.type === "flat") {
        return dummyCartTotal + dummyDeliveryCharge - currCoupon.details.amount;
      }
      return (
        dummyCartTotal +
        dummyDeliveryCharge -
        dummyCartTotal * currCoupon.details.amount
      );
    }
    return dummyCartTotal + dummyDeliveryCharge;
  }

  function handleSelectCoupon(index: number) {
    setCurrCoupon(availableCoupons[index]);
  }
  function printPrecision() {
    let d = dummyCartTotal * currCoupon.details.amount;
    return d.toFixed();
  }

  return (
    <div className="row">
      <div className="col-3">
        <div className="m-2">
          <p className="std-font2">Shipping Address</p>
          <AddressBox address={currAddress} />
        </div>
        <div className="m-2">
          <p className="std-font2">Payment Method</p>
          <PaymentMode mode={currMode} />
        </div>
      </div>
      <div className="col-9">
        <div className="row">
          <div className="col">
            <div className="m-2">
              <p className="std-font2">Appled Coupon</p>
              {currCoupon !== null ? (
                <div>
                  <button
                    className="std-btn"
                    onClick={() => {
                      setCurrCoupon(null);
                    }}
                  >
                    remove
                  </button>
                  <Coupon coupon={currCoupon} />
                </div>
              ) : (
                <>No Coupon Selected</>
              )}
            </div>
          </div>
          <div className="col">
            <div>
              <p className="std-font2">Payable Amount</p>
              <div className="row">
                <div className="col">
                  <p className="std-boldFont p-2 m-0">Cart Total:</p>
                </div>
                <div className="col d-flex">
                  <p className="std-font2 std-redText m-0">2999</p>
                  <p className="p-2 m-0">INR</p>
                </div>
              </div>
              <div className="row">
                <div className="col">
                  <p className="std-boldFont p-2 m-0">Delivery Charges:</p>
                </div>
                <div className="col d-flex">
                  <p className="std-font2 std-redText m-0">+80</p>
                  <p className="p-2 m-0">INR</p>
                </div>
              </div>
              {currCoupon !== null ? (
                <div className="row">
                  <div className="col">
                    <p className="std-boldFont p-2 m-0">Coupon Discount</p>
                  </div>
                  <div className="col d-flex">
                    {currCoupon.type === "flat" ? (
                      <p className="std-font2 std-greenText m-0">
                        -{currCoupon.details.amount}
                      </p>
                    ) : (
                      <p className="std-font2 std-greenText m-0">
                        -{printPrecision()}
                      </p>
                    )}

                    <p className="p-2 m-0">INR</p>
                  </div>
                </div>
              ) : (
                <></>
              )}
              <div className="std-section"></div>
              <div className="row">
                <div className="col">
                  <p className="std-boldFont p-2 m-0">Net Payable:</p>
                </div>
                <div className="col d-flex">
                  <p className="std-font2 std-redText m-0">{getSubTotal()}</p>
                  <p className="p-2 m-0">INR</p>
                </div>
              </div>
            </div>
            <br />
            <div className="d-flex justify-content-center">
              <Link to="/invoice" style={{ textDecoration: "none" }}>
                <button
                  className="std-btn std-btnOrange"
                  style={{ width: "20rem" }}
                  // onClick={(e) => {}}
                >
                  Pay
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="m-2">
          <p className="std-font2">Available Coupons</p>
          <div className="d-flex flex-wrap">
            {availableCoupons.map((coupon, index) => {
              return (
                <div
                  key={index}
                  onClick={() => {
                    handleSelectCoupon(index);
                  }}
                >
                  <Coupon coupon={coupon} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceOrder;
