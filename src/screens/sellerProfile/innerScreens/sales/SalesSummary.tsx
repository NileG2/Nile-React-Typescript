import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./SalesSummary.scss";

const SalesSummary = (props: any) => {
  const [orders, setOrders] = useState([]);
  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");

  const [currentCat, setCurrentCat] = useState("ordered");
  const [allOrders, setAllOrders] = useState(props.orders.Userorders);

  const handleCategoryChange = (status: string): void => {
    let filteredOrders = allOrders.filter(
      (order: any) => order.details.status === status
    );
    setOrders(filteredOrders);
    setCurrentCat(status);
  };
  useEffect(() => {
    handleCategoryChange("ordered");
  }, []);

  const changeOrderStatus = (oldStatus: any, tid: any) => {
    let newStatus = oldStatus === "ordered" ? "shipped" : "delivered";
    //api call
    axios
      .patch("http://localhost:9000/api/order/seller", {
        userid: auth["userid"],
        tracking_id: tid,
        status: newStatus,
      })
      .then((res) => {
        toast.success("Status changed to " + newStatus + ", Please wait!");
        console.log(res.data);
        props.fetchOrders();
        setAllOrders(props.orders.Userorders);
        setTimeout(() => {
          window.location.href = "/seller-profile";
        }, 2000);
        // handleCategoryChange(newStatus);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Something went wrong");
      });
  };

  return (
    <div className="std-card salesOrdersWrapper">
      <div className="stats">
        <div className="total">
          <span className="std-subHeader">
            Total orders: {props.orders.Userorders.length}
          </span>
        </div>
      </div>
      <div className="tabsDiv">
        <button
          onClick={() => handleCategoryChange("ordered")}
          className={currentCat === "ordered" ? "active" : ""}
        >
          Ordered
        </button>
        <button
          className={currentCat === "shipped" ? "active" : ""}
          onClick={() => handleCategoryChange("shipped")}
        >
          Shipped
        </button>
        <button
          className={currentCat === "delivered" ? "active" : ""}
          onClick={() => handleCategoryChange("delivered")}
        >
          Delivered
        </button>
      </div>

      {orders.map((order: any, index: number) => (
        <div key={index} className="orderDiv">
          {/* here comes order detail */}
          <div className="orderDetails">
            <div className="coreDetails">
              <div className="status">
                <span className="std-bold std-font2">Status: </span>Product has
                been <span className="std-bold">{order.details.status}</span>
              </div>
              <div className="time">
                <span className="std-bold std-font2">Bought by: </span>
                <span className="std-bold std-font1">{order.buyer.name}</span>
              </div>
              <div className="time">
                <span className="std-bold std-font2">Ordered on: </span>
                <span className="std-bold std-font1">{order.details.time}</span>
              </div>
            </div>
            <div className="buttonDiv">
              {order.details.status !== "delivered" && (
                <button
                  className="std-btn std-btnOrange mark"
                  onClick={() =>
                    changeOrderStatus(order.details.status, order.tracking_id)
                  }
                >
                  {order.details.status === "ordered"
                    ? "Mark as Shipped"
                    : "Mark as delivered"}
                </button>
              )}
              <div className="tracking">
                <span className="std-bold std-font2">Tracking id: </span>
                {order.tracking_id}
              </div>
            </div>
          </div>
          <hr />
          <div className="std-subHeader std-underline std-bold">
            Products ordered:
          </div>
          <div className="products std-card">
            {order.product_selected.map((product: any, index2: number) => (
              <div className="product" key={index2}>
                <div className="image">
                  <img src={product.product_image} alt="imgProduct" />
                </div>
                <div className="desc">
                  <div className="name std-bold std-font2">
                    {product.product_name}
                  </div>
                  <div className="price std-font1 std-bold std-italic">
                    Price: INR {product.price}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SalesSummary;
