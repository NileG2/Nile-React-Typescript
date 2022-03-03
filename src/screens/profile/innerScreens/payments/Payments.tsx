import React from "react";
import "./Payments.scss";

const Payments = () => {
  var divs = ["Menu1", "Menu2", "Menu3"];
  var visibleDivId: string | null = null;
  function toggleVisibility(divId: string) {
    if (visibleDivId === divId) {
    } else {
      visibleDivId = divId;
    }
    hideNonVisibleDivs();
  }
  function hideNonVisibleDivs() {
    var i, divId;
    var div: any;
    for (i = 0; i < divs.length; i++) {
      divId = divs[i];
      div = document.getElementById(divId);
      if (visibleDivId === divId) {
        div.style.display = "block";
      } else {
        div.style.display = "none";
      }
    }
  }

  return (
    <div className="container py-5 buyer-payment ">
      <div className="card card-style" style={{ float: "left" }}>
        <div className="card-body std-card">
          <span className="font-style2"> Saved Payment Methods </span>{" "}
          <button
            type="button"
            className="btn btn-warning"
            style={{ float: "right" }}
          >
            Add a methods
          </button>
          <br /> <br />
          <ol className="font-style1">
            <li>
              List of added payment methods
              <button type="button" className="btn btn-warning">
                Remove
              </button>
            </li>
            <li>
              List of added payment methods
              <button type="button" className="btn btn-warning">
                Remove
              </button>
            </li>
          </ol>
        </div>
      </div>

      <div
        className="card card-style std-card"
        style={{ float: "right", maxWidth: "700px" }}
      >
        <span className="font-style2">Add a payment method</span>
        <div className="card-body">
          <div
            style={{ float: "left", fontWeight: "bold", fontSize: "1.3rem" }}
          >
            <div className="form-check">
              
              <input
                className="form-check-input"
                type="radio"
                value=""
                name="payment"
                id="flexCheckDefault" onClick={() => toggleVisibility("Menu3")}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Credit/Debit Card
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value=""
                id="flexCheckDefault"
                name="payment"
                onClick={() => toggleVisibility("Menu1")}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                Netbanking
              </label>
            </div>

            <div className="form-check">
              <input
                className="form-check-input"
                type="radio"
                value=""
                id="flexCheckDefault"
                name="payment"
                onClick={() => toggleVisibility("Menu2")}
              />
              <label className="form-check-label" htmlFor="flexCheckDefault">
                UPI
              </label>
            </div>
          </div>

          <div style={{ float: "right" }}>
            <img src={"assets/Capture.png"} alt="Image" className="img-style" />
          </div>
        </div>

        <br />
        {/* CARD FOR UPI ID */}
        <div
          className="card-body std-card"
          id="Menu2"
          style={{ maxWidth: "600px" , backgroundColor:"grey"}}
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Enter VPA/UPI id
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button type="button" className="btn btn-warning">
              Save
            </button>
          </div>
        </div>


        {/* NET BANKING */}
        <div
          className="card-body std-card"
          id="Menu1"
          style={{ maxWidth: "600px", display: "none" , backgroundColor:"grey" }}
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Username
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Password
            </label>
            <input
              type="password"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button type="button" className="btn btn-warning">
              Save
            </button>
          </div>
        </div>


        {/* CREDIT/DEBIT CARD */}
        <div
          className="card-body std-card"
          id="Menu3"
          style={{ maxWidth: "600px", display: "none", backgroundColor:"grey" }}
        >
          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Card Number
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>
          <div className="mb-3 ">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Expiry Month/Year
            </label> &nbsp;
            <input type="month" id="expiry" name="expiry" />
            &emsp;
            <label htmlFor="exampleFormControlInput2" className="form-label">
              CVV
            </label>&nbsp;
            <input type="text" id="expiry" name="expiry" className="col-md-2" />
          </div>

          <div className="mb-3">
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Name on card
            </label>
            <input
              type="text"
              className="form-control"
              id="exampleFormControlInput1"
            />
          </div>

          <div className="d-grid gap-2 d-md-flex justify-content-md-center">
            <button type="button" className="btn btn-warning">
              Save
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Payments;
