import React, { useEffect, useState } from "react";
import "./Signup.scss";
import { BsGoogle } from "react-icons/bs";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  useEffect(()=>{
    const auth = localStorage.getItem("user");
    if(auth){
        navigate("/")
    }
  },[])

  function signupUser(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (email != null && password.length > 6) {
      axios
        .post("http://localhost:9000/api/register/register", {
          email: email,
          password: password,
        })
        .then((resp) => {
          alert("SignedUp Added Successfully");
          localStorage.setItem("user1", JSON.stringify(email));
          navigate("/details");
        })
        .catch((err) => {
          alert("You are already a member. Please sign in");
        });
    } else {
      alert("Please enter valid details");
    }
  }
  return (
    <div>
      <section className="vh-100 gradient-custom">
        <div className="container py-2 h-100">
          <img
            src={"assets/logoBlack.png"}
            alt="ImagePic"
            style={{
              width: "150px",
              height: "100px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "5rem",
              display: "block",
            }}
          />
          <div className="row d-flex justify-content-center  align-items-center h-85">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 std-card">
                  <div className="mb-md-1 mt-md-1 pb-1">
                    <h2 className="fw-bold mb-2 text-uppercase">
                      Create Account
                    </h2>
                    <br />

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typeEmailX">
                        Email
                      </label>
                      <input
                        type="email"
                        id="typeEmailX"
                        className="form-control form-control-lg"
                        value={email}
                        onChange={(e) => setemail(e.target.value)}
                        required
                      />
                    </div>

                    <div className="form-outline form-white mb-4">
                      <label className="form-label" htmlFor="typePasswordX">
                        Password
                      </label>
                      <input
                        type="password"
                        id="typePasswordX"
                        className="form-control form-control-lg"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required
                      />
                      <span> Password must be at least 6 characters </span>
                    </div>

                    <div className="d-grid gap-2">
                      <button
                        className="btn btn-warning std-subHeader1"
                        type="submit"
                        onClick={(e) => signupUser(e)}
                      >
                        Continue
                      </button>
                      <h2 className="std-centerAlign std-subHeader2"> OR </h2>
                      <button
                        className="btn btn-warning std-subHeader1"
                        type="button"
                      >
                        {" "}
                        <BsGoogle /> Continue with Google
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container py-4 h-100">
                <p className="std-greyText remove-underline">
                  <p className="std-centerAlign"> Already a customer ?</p>{" "}
                </p>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-secondary std-subHeader1 "
                    type="button"
                  >
                    {" "}
                    <Link to="/signin" className="link-style">
                      {" "}
                      Sign in to your Account
                    </Link>{" "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signup;
