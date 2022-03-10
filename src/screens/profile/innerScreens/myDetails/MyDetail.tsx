import React, { useEffect, useState } from "react";
import "./MyDetail.scss";
import AddressForm from "../../../../components/forms/AddressForm";
import axios from "axios";

import { useDispatch, useSelector } from "react-redux";
import { fetchAllAddresses } from "../../../../redux/actions/UserDetails";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const MyDetail = () => {
  const addressList = useSelector(
    (state: any) => state.userDetails.addressList
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [users1, setusers1] = useState({
    email: "",
    mobile: "",
    userId: "",
    username: "",
  });

  const [userId, setUserId] = useState("");
  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");

  useEffect(() => {
    axios
      .post("http://localhost:9000/api/user/", {
        userid: auth["userid"],
      })
      .then(({ data }) => {
        setUserId(data.status[0].userId);
        console.log(data.status[0].Contact.email);
        setusers1(data.status[0].Contact);
        dispatch(fetchAllAddresses(data.status[0].Address));
      })
      .catch((err) => {
        toast.error(`${err}`);
      });
  }, []);

  const deleteAddress = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    id: number
  ) => {
    e.preventDefault();
    try {
      let data = addressList.filter((ele: any, ind: number) => {
        return ind !== id;
      });
      axios.delete(`http://localhost:9000/api/user/delete/${id}`, {
        data: { userid: auth["userid"] },
      });
      alert("data deleted successfully");
      dispatch(fetchAllAddresses(data));
    } catch (err) {
      console.log(err);
    }
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
                  value={users1.email}
                  disabled
                ></input>
              </div>

              <div className="row m-2">
                <label className="col-4 std-subHeader1">Email :</label>
                <input
                  className="std-inputField col-8"
                  value={users1["email"]}
                  disabled
                ></input>
              </div>

              <div className="row m-2">
                <label className="col-4 std-subHeader1">Contact :</label>
                <input
                  className="std-inputField col-8"
                  value={users1["mobile"]}
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

            {addressList.map((it: any, i: number) => (
              <div key={i}>
                <div className="row m-1 py-3">
                  <label className="col-2 std-subHeader1">{i + 1} </label>
                  <div className="card col-10 std-card std-font1">
                    <div className="card-body">
                      {it["address_line_1"] +
                        ", " +
                        it["locality"] +
                        ", " +
                        it["pincode"] +
                        ", " +
                        it["city"] +
                        ", " +
                        it["state"] +
                        ", " +
                        it["country"]}
                    </div>
                  </div>
                </div>

                <div className="row m-1 py-3">
                  <label className="col-2"> </label>
                  <button
                    type="button"
                    className="std-btn std-btnOrange col-4"
                    onClick={(e) => {
                      deleteAddress(e, i);
                    }}
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
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
