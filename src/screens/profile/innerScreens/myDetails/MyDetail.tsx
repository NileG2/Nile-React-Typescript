import React, { useEffect, useState } from "react";
import "./MyDetail.scss";
import AddressForm from "../../../../components/forms/AddressForm";
import axios from "axios";

import { useDispatch,useSelector } from "react-redux";
import {fetchAllAddresses,setCurrAddressForEdit} from '../../../../redux/actions/UserDetails'


const MyDetail = () => {
  const dispatch = useDispatch()
  const addressList = useSelector((state:any)=>state.userDetails.addressList)

  const [users1, setusers1] = useState([
    {
      Personal_details: {
        email: "",
        mobile: "",
        userId: "",
        username: "",
        address_line_1: "",
        locality: "",
        city: "",
        country: "",
        state: "",
        pincode: "",
      },
    },
  ]);

  const [address, setaddress] = useState({
    email: "",
    userId: "",
    address_line_1: "",
    locality: "",
    city: "",
    country: "",
    state: "",
    pincode: "",
  });

  const [ind, setind] = useState(0);
  const [userId, setUserId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:9000/api/detail/users")
      .then(({ data }) => {
        setUserId(data.status.userId)
        setusers1(data.status.Personal_details);

        dispatch(fetchAllAddresses(data.status.Personal_details));
      })
      .catch((err) => {
        alert(err);
      });
  }, []);

  const updateAddress = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> , data:any, i:any
  ) => {
    e.preventDefault();
    setaddress(data);
    setind(i)
    
  };

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
                <input
                  className="std-inputField col-8"
                  value={userId}
                  disabled
                ></input>
              </div>

              <div className="row m-2">
                <label className="col-4 std-subHeader1">Name :</label>
                <input
                  className="std-inputField col-8"
                  value={users1[0].Personal_details["username"]}
                  disabled
                ></input>
              </div>

              <div className="row m-2">
                <label className="col-4 std-subHeader1">Email :</label>
                <input
                  className="std-inputField col-8"
                  value={users1[0].Personal_details["email"]}
                  disabled
                ></input>
              </div>

              <div className="row m-2">
                <label className="col-4 std-subHeader1">Contact :</label>
                <input
                  className="std-inputField col-8"
                  value={users1[0].Personal_details["mobile"]}
                  disabled
                ></input>
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
            </form>

            {addressList.map((it:any, i:number) => (
                <>
                <div className="row m-1 py-3">
                  <label className="col-2 std-subHeader1">{i+1} </label>
                  <div className="card col-10 std-card std-font1">
                    <div className="card-body">
                      {it.Personal_details["address_line_1"] +
                        ", " +
                        it.Personal_details["locality"] +
                        ", " +
                        it.Personal_details["pincode"] +
                        ", " +
                        it.Personal_details["city"] +
                        ", " +
                        it.Personal_details["state"] +
                        ", " +
                        it.Personal_details["country"]}
                    </div>
                  </div>
                </div>
              

              <div className="row m-1 py-3">
              <label className="col-2"> </label>
              <button
                type="button"
                className="std-btn std-btnOrange col-4"
                // onClick={(e) => updateAddress(e,users1[i].Personal_details,i)}
                onClick={()=>{dispatch(setCurrAddressForEdit(it,i))}}
              >
                Edit
              </button>
              <label className="col-2"> </label>
              <button type="button" className="std-btn std-btnOrange col-4">
                Remove
              </button>
              </div>
              </>
              ))}



          </div>
        </div>

        <div className="col">
          <AddressForm flag={true} index={ind} />
        </div>
      </div>
    </div>
  );
};

export default MyDetail;
