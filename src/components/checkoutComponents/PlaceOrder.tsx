import React, { useEffect, useState } from "react";
import AddressBox from "../checkoutCards/AddressBox";
import Coupon from "../checkoutCards/Coupon";
import { Link,useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import PaymentMode from "../checkoutCards/PaymentMode";
import axios from "axios";
import { toast } from "react-toastify";

const PlaceOrder = () => {

  const dispatch = useDispatch()
  const navigate = useNavigate()

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
        amount: "1.2",
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
        amount: "0.3",
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
        amount: "1.5",
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
      ).toFixed(2);
    }
    return (dummyCartTotal + dummyDeliveryCharge).toFixed(2);
  }

  function handleSelectCoupon(index: number) {
    setCurrCoupon(availableCoupons[index]);
  }
  function printPrecision() {
    let d = dummyCartTotal * currCoupon.details.amount;
    return d.toFixed();
  }


  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");
  const baseUrlTransaction = "http://localhost:9000/api/transaction"
  const baseUrlOrder = "http://localhost:9000/api/order"

  const paymentOption = useSelector((state: any) => state.checkout.paymentMode)
  const cartTotal = useSelector((state: any) => state.cart.subtotal)

  const billingAddress = useSelector((state: any) => state.checkout.billingAddress)
  const deliveryAddress = useSelector((state: any) => state.checkout.deliveryAddress)

  function handlePay(e: any) {
    e.preventDefault()

    let discount = ""

    if(currCoupon!==null){
      discount = printPrecision()
    }

    let body = {
      userid: auth.userid,
      amount: getSubTotal(),
      payment_mode: paymentOption.BankingInfo.payment_type,
      component: {
        cart_total: cartTotal,
        delivery_charge: 100,
        coupon_discount: discount
      }
    }

    axios.post(`${baseUrlTransaction}`,body).then((res)=>{
      let transaction_id = res.data.transaction_id
      let orderObject={
        userid:auth.userid,
        transaction_id:transaction_id,
        payment_mode: paymentOption.BankingInfo.payment_type,
        address:{
          billing_address:billingAddress,
          shipping_address:deliveryAddress
        }
      }
      // console.log(orderObject)
      axios.post(`${baseUrlOrder}`,orderObject).then((res)=>{
        toast.success(`order placed successfully, your tracking id is ${res.data.tracking_id}`,{autoClose:4000})
        navigate('/invoice')
      })
    }).catch(err=>{
      console.log(err)
    })
  }

  return (
    <div className="row">
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
                onClick={(e) => { handlePay(e) }}
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
  );
};

export default PlaceOrder;
