import React, { useEffect, useState } from "react";
import "./Signin.scss";

import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { PushSpinner } from "react-spinners-kit";
import { toast } from "react-toastify";

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [loading2, setLoading2] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    // const auth = localStorage.getItem("user");
    const auth = sessionStorage.getItem("user");
    if (auth) {
      navigate("/");
    }
  }, []);

  function signinUser(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (email != null && password.length > 6) {
      setLoading(true);
      axios
        .post("http://localhost:9000/api/login/login", {
          email: email,
          password: password,
        })
        .then((resp) => {
          // sessionStorage.setItem("userid", resp.data.userid)
          axios
            .post("http://localhost:9000/api/user/", {
              userid: resp.data.userid,
            })
            .then((res) => {
              console.log(res.data.status[0]);
              setLoading(false);
              sessionStorage.setItem(
                "user",
                JSON.stringify({
                  email: email,
                  username: res.data.status[0].Contact.username || " ",
                  isSeller :res.data.status[0].isSeller,
                  userid: resp.data.userid
                  
                })
              );
              toast.success("Signed in successfully");
              navigate("/products");
            })
            .catch((err) => {
              setLoading(false);
              toast.error("Some error occured");
              console.log(err);
            });
        })
        .catch((err) => {
          setLoading(false);
          toast.error("Some error occured");
        });
    } else {
      toast.info("Please enter valid details");
    }
  }

  return (
    <div className="signinuser">
      <section className="vh-100 gradient-custom ">
        <div className="container py-5 h-100 ">
          <img
            src={"assets/logoBlack.png"}
            alt="ImagePic"
            className="img-style"
          />
          <div className="row d-flex justify-content-center  align-items-center h-100 ">
            <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
              <div className="card std-card" style={{ borderRadius: "1rem" }}>
                <div className="card-body p-5 ">
                  <div className="mb-md-1 mt-md-1 pb-1">
                    <h2 className="fw-bold mb-2 text-uppercase">Sign-In</h2>
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
                    </div>

                    <div className="d-grid gap-2">
                      <button
                        className="std-btn std-btnOrange std-subHeader1"
                        type="submit"
                        onClick={(e) => signinUser(e)}
                      >
                        {loading ? (
                          <PushSpinner color="#000000" size={22} />
                        ) : (
                          `Sign-In`
                        )}
                      </button>
                      <h2 className="std-centerAlign std-subHeader2"> OR </h2>
                      <button
                        className="std-btn std-btnOrange std-subHeader1"
                        type="button"
                      >
                        {loading2 ? (
                          <PushSpinner color="#000000" size={22} />
                        ) : (
                          <span>
                            <BsGoogle /> &nbsp;&nbsp;Continue with Google
                          </span>
                        )}
                      </button>
                    </div>
                    <br />
                    <a href="#!" className="fw-bold remove-underline">
                      Forgot password ?{" "}
                    </a>
                  </div>
                </div>
              </div>
              <div className="container py-4 h-100">
                <div className="std-greyText remove-underline">
                  <p className="std-centerAlign"> New to Nile ?</p>
                </div>
                <div className="d-grid gap-2">
                  <button
                    className="btn btn-secondary std-subHeader1 "
                    type="button"
                  >
                    {" "}
                    <Link to="/signup" className="link-style">
                      {" "}
                      Create your Amazon account{" "}
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

export default Signin;
