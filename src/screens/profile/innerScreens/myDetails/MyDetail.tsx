import React from "react";
import "./MyDetail.scss";

const MyDetail = () => {
  return (
    <div className="std-bg">
      <div className="row">
        <div className="col">
          <div className="std-card m-2">
            <h1 className="py-1">MY DETAILS</h1>
            <div className="std-section"> </div>
            <form>
              <div className="row mb-3 py-4">
                <label htmlFor="inputName" className="col-sm-2 col-form-label">
                  Name
                </label>
                <div className="col-sm-10">
                  <input
                    type="text"
                    className="form-control font-style1"
                    id="inputName"
                  />
                </div>
              </div>

              <div className="row mb-3 py-2">
                <label htmlFor="inputEmail" className="col-sm-2 col-form-label">
                  Email
                </label>
                <div className="col-sm-10">
                  <input
                    type="email"
                    className="form-control "
                    id="inputEmail"
                  />
                </div>
              </div>

              <div className="row mb-3 py-2">
                <label htmlFor="inputEmail" className="col-sm-8 col-form-label">
                  Saved Addresses
                </label>
                <div className="col-sm-4 d-grid gap-1 col-5 mx-auto">
                  <button type="button" className="btn btn-warning">
                    Add an address
                  </button>
                </div>
              </div>

              <div className="row mb-4 py-2">
                <label htmlFor="inputifsc" className="col-sm-1 col-form-label">
                  1.{" "}
                </label>
                <div className="col-sm-11">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea1"
                    rows={4}
                  ></textarea>
                </div>
              </div>

              <div className="row mb-4 col-sm-12 mx-4 py-3">
                <div className="col-sm-4 d-grid col-4 mx-auto ">
                  <button type="button" className="btn btn-warning">
                    Edit
                  </button>
                </div>

                <div className="col-sm-2 mx-auto "> </div>

                <div className="col-sm-4 d-grid  col-4 mx-auto ">
                  <button type="button" className=" btn btn-warning ">
                    Remove
                  </button>
                </div>
              </div>

              <div className="row mb-4 py-2">
                <label htmlFor="inputifsc" className="col-sm-1 col-form-label">
                  2.{" "}
                </label>
                <div className="col-sm-11">
                  <textarea
                    className="form-control"
                    id="exampleFormControlTextarea2"
                    rows={4}
                  ></textarea>
                </div>
              </div>
              <div className="row mb-2 col-sm-12 mx-4 py-2">
                <div className="col-sm-4 d-grid col-4 mx-auto ">
                  <button type="button" className="btn btn-warning">
                    Edit
                  </button>
                </div>

                <div className="col-sm-2 mx-auto "> </div>

                <div className="col-sm-4 d-grid  col-4 mx-auto ">
                  <button type="button" className=" btn btn-warning ">
                    Remove
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>

        <div className="col">
          <div className="std-card m-2">
            <div className="card-body">
              <h5 className="py-3">Enter/Edit your new address</h5>
              <form>
                <div className="row mb-3 py-2">
                  <label
                    htmlFor="inputPlotNo"
                    className="col-sm-2 col-form-label"
                  >
                    Plot No.
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control font-style1"
                      id="inputPlotNo"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="inputAddressLine1"
                    className="col-sm-2 col-form-label"
                  >
                    Address Line 1
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control font-style1"
                      id="inputAddressLine1"
                    />
                  </div>
                </div>

                <div className="row mb-3">
                  <label
                    htmlFor="inputAddressLine2"
                    className="col-sm-2 col-form-label"
                  >
                    Address Line 2
                  </label>
                  <div className="col-sm-10">
                    <textarea
                      className="form-control"
                      id="exampleFormControlTextarea1"
                      rows={5}
                    ></textarea>
                  </div>
                </div>

                <div className="row mb-3 py-2">
                  <label htmlFor="inputPin" className="col-sm-2 col-form-label">
                    Pin code
                  </label>
                  <div className="col-sm-10">
                    <input
                      type="text"
                      className="form-control font-style1"
                      id="inputPin"
                    />
                  </div>
                </div>

                <div className="d-grid gap-2 col-4 mx-auto">
                  <button className="btn btn-warning" type="button">
                    Add/Update
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyDetail;
