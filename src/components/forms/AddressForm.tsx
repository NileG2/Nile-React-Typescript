import { async } from "@firebase/util";
import axios from "axios";
import React, { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import { addNewAddress } from "../../redux/actions/UserDetails";

export default function AddressForm(props: any) {
  const addressList = useSelector(
    (state: any) => state.userDetails.addressList
  );

  const dispatch = useDispatch()


  const [formData, setFormData] = useState({
        address_line_1: "",
        locality: "",
        city: "",
        country: "",
        state: "",
        pincode: "",
  });

  const onChangeHandler = (e: any) => {
    e.preventDefault();
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };


  const addAddress =  async (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    e.preventDefault();
    let allAddress = addressList
    allAddress.push({Address: formData})
    dispatch(addNewAddress(allAddress))

    console.log({Address: formData })

    axios.post(`http://localhost:9000/api/user/add`,{
            
              Address: formData 
        }).then((resp)=>{
          alert("Added Successfully")

        }).catch((err)=>{
            alert(err)
    })
  };

  return (
    <div className="std-card m-2">
      {props.flag === true ? (
        <>
          <p className="std-font2">Add your new address</p>
          <div className="std-section"></div>
        </>
      ) : (
        <div> </div>
      )}

      <form className="m-2">
        <div className="row m-2">
          <label className="col-4 std-subHeader1">Address Line 1 :</label>
          <input
            className="std-inputField col-8"
            value={formData.address_line_1}
            name="address_line_1"
            onChange={(e) => {
              onChangeHandler(e);
            }}
          ></input>
        </div>

        <div className="row m-2">
          <label className="col-4 std-subHeader1">Locality :</label>
          <input
            className="std-inputField col-8"
            value={formData.locality}
            name="locality"
            onChange={(e) => {
              onChangeHandler(e);
            }}
          ></input>
        </div>

        <div className="row m-2">
          <label className="col-4 std-subHeader1">City :</label>
          <input
            className="std-inputField col-8"
            value={formData.city}
            name="city"
            onChange={(e) => {
              onChangeHandler(e);
            }}
          ></input>
        </div>

        <div className="row m-2">
          <label className="col-4 std-subHeader1">Pin code :</label>
          <input
            className="std-inputField col-8"
            value={formData.pincode}
            name="pincode"
            onChange={(e) => {
              onChangeHandler(e);
            }}
          ></input>
        </div>

        <div className="row m-2">
          <label className="col-4 std-subHeader1">State :</label>
          <input
            className="std-inputField col-8"
            value={formData.state}
            name="state"
            onChange={(e) => {
              onChangeHandler(e);
            }}
          ></input>
        </div>

        <div className="row m-2">
          <label className="col-4 std-subHeader1">Country :</label>
          <input
            className="std-inputField col-8"
            value={formData.country}
            name="country"
            onChange={(e) => {
              onChangeHandler(e);
            }}
          ></input>
        </div>

        <br />
        <div className="d-flex justify-content-center">
          <button
            className="std-btn std-btnOrange"
            style={{ width: "20rem" }}
            onClick={(e) => {
              addAddress(e);
            }}
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
}