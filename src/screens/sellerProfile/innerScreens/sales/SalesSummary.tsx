import React from "react";
import "./SalesSummary.scss";

const SalesSummary = () => {
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
    <div className="salesSummary mx-5">
      <div className="buttons py-3 mx-5">
        <a href="#!" onClick={() => toggleVisibility("Menu1")}>
          <button type="button" className="button1">
            In progress
          </button>
        </a> 
        <a href="#!" onClick={() => toggleVisibility("Menu2")}>
          <button type="button" className="button1">
            Delivered
          </button>
        </a> 
        <a href="#!" onClick={() => toggleVisibility("Menu3")}>
          <button type="button" className="button1">
            Cancelled
          </button>
        </a>
      </div>


      {/* In progress */}
      <div id="Menu1" className="mx-5" style={{ maxWidth: "1200px" }}>
        <div className="card container std-card">
          <div className="card-body">
            <table className="table container">
              <thead>
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Product</th>
                  <th scope="col">Details</th>
                  <th scope="col">Delivery Address</th>
                  <th scope="col">Transaction Id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>ihubbiknbkjbnnkj</td>
                  <td>
                    Jordan For Men <br />
                    <span className="font-bold">Size : </span> 8 <br />
                    <span className="font-bold">Color : </span> teal <br />
                    <span className="font-bold">Quantity : </span> 1 <br />


                  </td>
                  <td>
                    <span className="font-bold">For : </span>
                    Duihsio2k jnoe <br />
                    <span className="font-bold">Date : </span>
                    12/01/2022 <br />
                    <span className="font-bold">Time : </span>
                    10:30 pm
                  </td>
                  <td>201, bobiaa Ludhiyana 411015</td>
                  <td>hiuerhuey7ey87u2h</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>



            {/* Delivered */}
            <div id="Menu2" className="mx-5" style={{ maxWidth: "1200px", display:"none" }}>
        <div className="card container std-card">
          <div className="card-body">
            <table className="table container">
              <thead>
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Product</th>
                  <th scope="col">Details</th>
                  <th scope="col">Delivery Address</th>
                  <th scope="col">Transaction Id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>njnnnnnnnnnn</td>
                  <td>
                    Jordan For Men <br />
                    <span className="font-bold">Size : </span> 8 <br />
                    <span className="font-bold">Color : </span> teal <br />
                    <span className="font-bold">Quantity : </span> 1 <br />
                  </td>
                  <td>
                    <span className="font-bold">For : </span>
                    Duihsio2k jnoe <br />
                    <span className="font-bold">Date : </span>
                    12/01/2022 <br />
                    <span className="font-bold">Time : </span>
                    10:30 pm
                  </td>
                  <td>201, bobiaa Ludhiyana 411015</td>
                  <td>pppppppppppp</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>


      
      {/* Cancelled */}
      <div id="Menu3" className="mx-5" style={{ maxWidth: "1200px", display:"none" }}>
        <div className="card container std-card">
          <div className="card-body">
            <table className="table container">
              <thead>
                <tr>
                  <th scope="col">Order Id</th>
                  <th scope="col">Product</th>
                  <th scope="col">Details</th>
                  <th scope="col">Delivery Address</th>
                  <th scope="col">Transaction Id</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>nklsndsiihdiw89u</td>
                  <td>
                    Jordan For Men <br />
                    <span className="font-bold">Size : </span> 8 <br />
                    <span className="font-bold">Color : </span> teal <br />
                    <span className="font-bold">Quantity : </span> 1 <br />
                  </td>
                  <td>
                    <span className="font-bold">For : </span>
                    Duihsio2k jnoe <br />
                    <span className="font-bold">Date : </span>
                    12/01/2022 <br />
                    <span className="font-bold">Time : </span>
                    10:30 pm
                  </td>
                  <td>201, bobiaa Ludhiyana 411015</td>
                  <td>dklmsndioihihoi</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  );
};

export default SalesSummary;
