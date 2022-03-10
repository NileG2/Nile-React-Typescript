import React, { useEffect, useState } from "react";
import "./Signup.scss";
import { BsGoogle } from "react-icons/bs";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { CircleSpinner } from "react-spinners-kit";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  useEffect(() => {
    const auth = sessionStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  function signupUser(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (email != null && password.length > 6) {
      setLoading(true);
      axios
        .post("http://localhost:9000/api/register/register", {
          email: email,
          password: password,
        })
        .then((resp) => {
          setLoading(false);
          toast.success("Signup intiated successfully");
          sessionStorage.setItem(
            "useremail",
            JSON.stringify({ email: email, userid: resp.data.userid })
          );
          navigate("/details");
        })
        .catch((err) => {
          setLoading(false);
          toast.error("You are already a member. Please sign in");
        });
    } else {
      toast.info("Please enter valid details");
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
              width: "120px",
              height: "80px",
              marginLeft: "auto",
              marginRight: "auto",
              marginTop: "2rem",
              display: "block",
            }}
          />
          <div className="row d-flex justify-content-center  align-items-center h-85">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5">
              <div className="card" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-4 std-card">
                  <div className="mb-md-1 mt-md-1 pb-1">
                    <h2 className="fw-bold mb-1 text-uppercase">
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
                        className="form-control form-control-md"
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
                        className="form-control form-control-md"
                        value={password}
                        onChange={(e) => setpassword(e.target.value)}
                        required
                      />
                      <span> Password must be at least 6 characters </span>
                    </div>

                    <div className="d-grid gap-1">
                      <button
                        className="std-btn std-btnOrange std-subHeader1"
                        type="submit"
                        onClick={(e) => signupUser(e)}
                      >
                        {" "}
                        {loading ? (
                          <CircleSpinner color="#000000" size={22} />
                        ) : (
                          `Continue`
                        )}
                      </button>
                      <h2 className="std-centerAlign std-subHeader2"> OR </h2>
                      <button
                        className="std-btn std-btnOrange std-subHeader1"
                        type="button"
                      >
                        {loading2 ? (
                          <CircleSpinner color="#000000" size={22} />
                        ) : (
                          <span>
                            <BsGoogle /> &nbsp;&nbsp;Continue with Google
                          </span>
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="container py-3 h-80">
                <p className="std-greyText remove-underline">
                  <p className="std-centerAlign"> Already a customer ?</p>{" "}
                </p>
                <div className="d-grid gap-1">
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
