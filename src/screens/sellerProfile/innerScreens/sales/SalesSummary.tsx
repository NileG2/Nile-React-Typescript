import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import "./SalesSummary.scss";

const SalesSummary = (props:any) => {
  const [orders, setOrders] = useState([]);
  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");
  
  const handleCategoryChange = (status:string):void =>{
    let allOrders = props.orders.Userorders;
    let filteredOrders = allOrders.filter((order:any)=>order.details.status===status);
    setOrders(filteredOrders)
  }
  

  

  useEffect(()=>{
    handleCategoryChange("ordered")
  },[props.orders])
 
  const changeOrderStatus = (oldStatus:any,tid:any) =>{
    let newStatus = oldStatus==="ordered" ? "shipped":"delivered";
    //api call
    axios.patch("http://localhost:9000/api/order/seller",{
      userid :auth['userid'],
      tracking_id : tid,
      status : newStatus

    }).then((res)=>{
      toast.success("Status changed to " + newStatus)
      console.log(res.data);
      props.fetchOrders()
      handleCategoryChange(newStatus)
    }).catch(err=>{
      console.log(err);
      toast.error("Something went wrong")
    })
    

  }

  return (

    <div className="salesOrdersWrapper">

      <div className="tabsDiv">
        <button onClick={()=>handleCategoryChange("ordered")}>Ordered</button>
        <button onClick={()=>handleCategoryChange("shipped")}>Shipped</button>
        <button onClick={()=>handleCategoryChange("delivered")}>Delivered</button>

      </div>
      {orders.map((order:any,index:number)=><div key={index} className="orderDiv"> 
        {/* here comes order detail */}
         Track id == {order.tracking_id} === Status === {order.details.status} <br />
         {order.details.status!=="delivered" && <button onClick = {()=>changeOrderStatus(order.details.status,order.tracking_id)}>{order.details.status === "ordered" ? "Mark as Shipped" : "Mark as delivered"}</button>}
        {order.product_selected.map((product:any,index2:number)=><div key={index2} className="productDiv">
          {/* here comes product details */}
          Product= == {product.product_name}
         
        </div>)}
      </div>)}
    </div>
  
  );
};

export default SalesSummary;
