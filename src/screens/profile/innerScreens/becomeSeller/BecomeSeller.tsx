import React, { useState } from "react";
import "./BecomeSeller.scss";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
const BecomeSeller = () => {
    const [business_name, setbusinessname] = useState("");
    const [sector, setsector] = useState("electronics");
    const [address_line_1, setaddressline] = useState("");
    const [locality, setlocality] = useState("");
    const [city, setcity] = useState("");
    const [pincode, setpincode] = useState("");
    const [state, setstate] = useState("");
    const [country, setcountry] = useState("");
    const [mobile_number, setmobileno] = useState("");
    // const [alternate_mobile_no, setalternateno] = useState("");
    const navigate = useNavigate();
    const auth = JSON.parse(sessionStorage.getItem("user") || "{}");
    const categories = [
        {
            category: "Electronics",
            url: "electronics",
        },
        {
            category: "Appliances",
            url: "appliances",
        },
        {
            category: "Men's Fashion",
            url: "mens_fashions",
        },
        {
            category: "Women's Fashion",
            url: "womens_fashions",
        },
        {
            category: "Kids Fashion",
            url: "kids_fashions",
        },
        {
            category: "Sports",
            url: "sports",
        },
        {
            category: "Toys and Games",
            url: "toys_and_games",
        },
        {
            category: "Other",
            url: "other",
        },
    ];
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        //validation checks
        if (
            business_name != null &&
      sector != null &&
      address_line_1 != null &&
      locality != null &&
      city != null &&
      pincode != null &&
      state != null &&
      country != null &&
      mobile_number.length == 10
        ) {
            axios
                .post("http://localhost:9000/api/sellers/seller", {
                    userid: auth["userid"],
                    business: {
                        business_name: business_name,
                        sector: sector,
                        addresses: [
                            {
                                address_line_1: address_line_1,
                                locality: locality,
                                city: city,
                                pincode: pincode,
                                state: state,
                                country: country,
                            },
                        ],

                        contact: [
                            {
                                mobile: {
                                    mobile_number: mobile_number,
                                },
                            },
                        ],
                    },
                })
                .then((resp) => {
                    toast.success("Seller Registered Successfully");
                    const auth = sessionStorage.getItem("user");
                    if (auth !== null) {
                        const user = JSON.parse(auth);
                        user["isSeller"] = true;
                        sessionStorage.setItem("user", JSON.stringify(user));
                    }
          
                    navigate("/seller-profile");
                })
                .catch((err) => {
                    alert("Something went wrong");
                });
        } else {
            alert("Please enter valid details");
        }
    };
    return (
        <div className="std-bg becomeSellerWrapper">
            <div className="row m-1">
                <div className="col-9">
                    <div className="std-card">
                        <p className="p-2 m-0 text-left std-font2 std-bold">
              Become a seller on Nile
                        </p>
                        <div className="std-section"></div>

                        <div className="sellerFormWrapper">
                            <div className="std-font2">
                Please provide the following details to get started
                            </div>
                            <form
                                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                                    handleSubmit(e)
                                }
                            >
                                <div className="formRow">
                                    <div className="label">Business name</div>
                                    <input
                                        type="text"
                                        className="std-inputField"
                                        value={business_name}
                                        onChange={(e) => setbusinessname(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="formRow">
                                    <div className="label">Sector</div>
                                    <select
                                        className="std-inputField selectField"
                                        // value={sector}
                                        onChange={(e) => {
                                            setsector(e.target.value);
                                        }}
                                        required
                                        defaultValue={sector}
                                    >
                                        {categories.map((cat, index) => (
                                            <option key={index} value={cat.url}>
                                                {cat.category}
                                            </option>
                                        ))}

                                        {sector}
                                    </select>
                                </div>
                                <hr />
                                <div className="std-font1 std-bold">Your Business Address</div>
                                <div className="formRow">
                                    <div className="label">Address line 1</div>
                                    <input
                                        type="text"
                                        className="std-inputField"
                                        value={address_line_1}
                                        onChange={(e) => setaddressline(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="formRow">
                                    <div className="label">Locality</div>
                                    <input
                                        type="text"
                                        className="std-inputField"
                                        value={locality}
                                        onChange={(e) => setlocality(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="formRow">
                                    <div className="label">City</div>
                                    <input
                                        type="text"
                                        className="std-inputField"
                                        value={city}
                                        onChange={(e) => setcity(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="formRow">
                                    <div className="label">Pincode</div>
                                    <input
                                        type="text"
                                        className="std-inputField"
                                        value={pincode}
                                        onChange={(e) => setpincode(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="formRow">
                                    <div className="label">State</div>
                                    <input
                                        type="text"
                                        className="std-inputField"
                                        value={state}
                                        onChange={(e) => setstate(e.target.value)}
                                        required
                                    />
                                </div>
                                <div className="formRow">
                                    <div className="label">Country</div>
                                    <input
                                        type="text"
                                        className="std-inputField"
                                        value={country}
                                        onChange={(e) => setcountry(e.target.value)}
                                        required
                                    />
                                </div>
                                <hr />
                                <div className="std-font1 std-bold">Contact Details</div>

                                <div className="formRow">
                                    <div className="label">Mobile No:</div>
                                    <input
                                        type="text"
                                        className="std-inputField"
                                        value={mobile_number}
                                        onChange={(e) => setmobileno(e.target.value)}
                                        required
                                    />
                                </div>
                                {/* <div className="formRow">
                  <div className="label">Alternate mobile no:</div>
                  <input 
                    type="text" 
                    className="std-inputField"
                    value={alternate_mobile_no}
                    onChange={(e) => setalternateno(e.target.value)}
                    required 
                  />
                </div> */}
                                <button type="submit" className="std-btn std-btnOrange">
                  Register Business
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BecomeSeller;
