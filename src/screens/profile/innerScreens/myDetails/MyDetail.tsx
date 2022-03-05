import React from "react";
import "./MyDetail.scss";
import AddressForm from "../../../../components/forms/AddressForm";

const MyDetail = () => {
  return (
    <div className="std-bg">
      <div className="row">
        <div className="col">
          <div className="std-card m-2">
            <p className="py-1 std-font3">MY DETAILS</p>
            <div className="std-section"> </div>
            <form>
              <div className="row m-1">
                <label className="col-4 std-subHeader1">User Id:</label>
                <input className="std-inputField col-8"></input>
              </div>

              <div className="row m-2">
                <label className="col-4 std-subHeader1">Name :</label>
                <input className="std-inputField col-8"></input>
              </div>

              <div className="row m-2">
                <label className="col-4 std-subHeader1">Email :</label>
                <input className="std-inputField col-8"></input>
              </div>

              <div className="row m-2">
                <label className="col-4 std-subHeader1">Contact :</label>
                <input className="std-inputField col-8"></input>
              </div>

              <div className="row mb-3">
                <label
                  htmlFor="inputEmail"
                  className="col-sm-8 col-form-label std-boldFont "
                >
                  Saved Addresses
                </label>
                <div className="col-sm-4 d-grid gap-1 col-5 mx-auto">
                  <button type="button" className="std-btn std-btnOrange">
                    Add an address
                  </button>
                </div>
              </div>
              <div className="row m-1 py-3">
                <label className="col-2 std-subHeader1">1 </label>
                <textarea className="std-inputField col-10" rows={4}></textarea>
              </div>

              <div className="row m-1 py-3">
                <label className="col-2"> </label>
                <button type="button" className="std-btn std-btnOrange col-4">
                  Edit
                </button>
                <label className="col-2"> </label>
                <button type="button" className="std-btn std-btnOrange col-4">
                  Remove
                </button>
              </div>
              <div className="row m-1 py-3">
                <label className="col-2 std-subHeader1"> 2</label>
                <textarea className="std-inputField col-10" rows={4}></textarea>
              </div>
              <div className="row m-1 py-3">
                <label className="col-2"> </label>
                <button type="button" className="std-btn std-btnOrange col-4">
                  Edit
                </button>
                <label className="col-2"> </label>
                <button type="button" className="std-btn std-btnOrange col-4">
                  Remove
                </button>
              </div>
            </form>
          </div>
        </div>

        <div className="col">
          <AddressForm flag={true} />
        </div>
      </div>
    </div>
  );
};

export default MyDetail;
