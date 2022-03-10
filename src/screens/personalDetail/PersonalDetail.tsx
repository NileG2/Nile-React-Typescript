import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./PersonalDetail.scss";
import NavBar from "../../components/nav/NavBar";
import { PushSpinner } from "react-spinners-kit";
import { toast } from "react-toastify";

export default function PersonalDetail() {
  const [email, setemail] = useState("");
  const [name, setname] = useState("");
  const [address, setaddress] = useState("");
  const [country, setcountry] = useState("");
  const [locality, setlocality] = useState("");
  const [city, setcity] = useState("");
  const [state, setstate] = useState("");
  const [zip, setzip] = useState("");
  const [mobile, setmobile] = useState("");
  const [alternatemobile, setalternatemobile] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);

  // let auth1 = JSON.parse(localStorage.getItem("user1") || "{}");
  // let auth = JSON.parse(localStorage.getItem("user") || "{}");
  let auth1 = JSON.parse(sessionStorage.getItem("useremail") || "{}");
  let auth = JSON.parse(sessionStorage.getItem("user") || "{}");

  useEffect(() => {
    if (!auth1["email"]) {
      navigate("/signup");
    }

    if (auth["userid"]) {
      navigate("/");
    } else {
      setemail(auth1["email"]);
    }
  }, []);

  function addUserDetails(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();

    if (
      email != null &&
      name != null &&
      address != null &&
      country != null &&
      city != null &&
      state != null &&
      zip != null &&
      mobile.length === 10 &&
      alternatemobile.length === 10
    ) {
      setLoading(true);
      axios
        .post("http://localhost:9000/api/user/add", {
          userid: auth1["userid"],
          Address: {
            country: country,
            address_line_1: address,
            locality: locality,
            city: city,
            state: state,
            pincode: zip,
          },
          Contact: {
            username: name,
            mobile: mobile,
            alternate_mobile: alternatemobile,
          },
        })
        .then((resp) => {
          setLoading(false);
          toast.success("Details saved Successfully");
          sessionStorage.removeItem("useremail");
          navigate("/signin");
        })
        .catch((err) => {
          toast.error("Something went wrong");
        });
    } else {
      toast.info("Please enter valid details");
    }
  }

  return (
    <div className="personalDetailsScreen">
      <section className="">
        <div className="container py-3 ">
          <img src={"assets/logoBlack.png"} alt="Image" className="img-style" />
          <div className="row justify-content-center align-items-center">
            <div className="card col-md-10 std-card">
              <div className="card-body mx-5 col-md-11 ">
                <h2 className="std-smallHeader" style={{ textAlign: "center" }}>
                  Great! Now lets get started with your details
                </h2>
                <form>
                  <div className="form-group mx-0 pl-3 py-3">
                    <label htmlFor="inputEmail">Email</label>
                    <input
                      type="email"
                      className="form-control form-control-lg"
                      id="inputEmail"
                      value={email}
                      required
                      disabled
                    />
                  </div>
                  <div className="form-group mx-0 pl-3">
                    <label htmlFor="inputName">Your Name</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="inputName"
                      value={name}
                      onChange={(e) => setname(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mx-0 pl-3 py-3">
                    <label htmlFor="inputAddress">Address Line 1</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="inputAddress"
                      value={address}
                      onChange={(e) => setaddress(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-group mx-0 pl-3">
                    <label htmlFor="inputCountry">Country</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="inputCountry"
                      value={country}
                      onChange={(e) => setcountry(e.target.value)}
                      required
                    />
                  </div>
                  <div className="form-group mx-0 pl-3 py-3">
                    <label htmlFor="inputLocality">Locality</label>
                    <input
                      type="text"
                      className="form-control form-control-lg"
                      id="inputLocality"
                      value={locality}
                      onChange={(e) => setlocality(e.target.value)}
                      required
                    />
                  </div>

                  <div className="form-row" style={{ display: "flex" }}>
                    <div className="form-group col-md-5">
                      <label htmlFor="inputCity">City</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="inputCity"
                        value={city}
                        onChange={(e) => setcity(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group col-md-5 mx-1">
                      <label htmlFor="inputState">State</label>
                      <select
                        id="inputState"
                        className="form-control form-control-lg"
                        value={state}
                        onChange={(e) => setstate(e.target.value)}
                        required
                      >
                        <option selected>Choose...</option>
                        <option>Madhya Pradesh</option>
                        <option>Maharashtra</option>
                        <option>Uttar Pradesh</option>
                        <option>Andhra Pradesh</option>
                        <option>Gujarat</option>
                        <option>Rajasthan</option>
                      </select>
                    </div>
                    <div className="form-group col-md-2">
                      <label htmlFor="inputZip">Zip</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="inputZip"
                        value={zip}
                        onChange={(e) => setzip(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div
                    className="form-row form-inline py-3"
                    style={{ display: "flex" }}
                  >
                    <div className="form-group col-md-6 ">
                      <label htmlFor="inputMobile">Mobile No.</label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="inputMobile"
                        value={mobile}
                        onChange={(e) => setmobile(e.target.value)}
                        required
                      />
                    </div>
                    <div className="form-group col-md-6 mx-1">
                      <label htmlFor="inputAlternateMobile">
                        Alternate Mobile No.
                      </label>
                      <input
                        type="text"
                        className="form-control form-control-lg"
                        id="inputAlternateMobile"
                        value={alternatemobile}
                        onChange={(e) => setalternatemobile(e.target.value)}
                        required
                      />
                    </div>
                  </div>

                  <div className="d-grid gap-2">
                    <button
                      className="btn btn-warning std-subHeader1"
                      type="submit"
                      onClick={(e) => addUserDetails(e)}
                    >
                      {loading ? (
                        <PushSpinner color="#000000" size={22} />
                      ) : (
                        `Continue`
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
function user(user: any) {
  throw new Error("Function not implemented.");
}
