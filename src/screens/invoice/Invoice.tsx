import React, { useEffect } from "react";
import NavBar from "../../components/nav/NavBar";
import InvoiceContainer from "../../components/checkoutCards/InvoiceContainer";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Invoice = () => {
  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");
  const navigate = useNavigate();

  useEffect(() => {
    if (!auth["userid"]) {
      toast.info("Please sign in first");
      navigate("/products");
    }
  }, []);

  return (
    <div className='std-bg'>
      <NavBar />
      <div className='container'>
        <InvoiceContainer />
      </div>
    </div>
  );
};

export default Invoice;
