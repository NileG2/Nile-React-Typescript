import React, { useState } from "react";
import "./Signin.scss";

import { BsGoogle } from "react-icons/bs";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Signin = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  function signinUser(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
    console.log(email + " " + password)
    if (email != null && password.length >6 ){
      axios.post("http://localhost:9000/api/login/login",{
        email : email,
        password: password
      
      }).then((resp)=>{
          alert("User Signedin Successfully")
          localStorage.setItem("user",JSON.stringify(email))
          navigate("/details")
      }).catch((err)=>{
        alert("Something went wrong")
      })
    }
  
    else{
    alert("Please enter valid details")
  }
  }

  return (
  
  <div className="signinuser">
    

<section className="vh-100 gradient-custom ">
  <div className="container py-5 h-100 ">
  <img src={"assets/logoBlack.png"} alt="Image" className="img-style" />
    <div className="row d-flex justify-content-center  align-items-center h-100 ">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5 ">
        <div className="card std-card" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 ">

            <div className="mb-md-1 mt-md-1 pb-1">

              <h2 className="fw-bold mb-2 text-uppercase">Sign-In</h2><br />

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" value={email} onChange={(e)=>setemail(e.target.value)} required/>
              </div>

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={(e)=>setpassword(e.target.value)} required />
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-warning std-subHeader1" type="submit"  onClick={(e)=>signinUser(e)}>Sign-In</button>
                <h2 className="std-centerAlign std-subHeader2"> OR </h2>
                <button className="btn btn-warning std-subHeader1" type="button"> <BsGoogle /> Continue with Google</button>
              </div>
              <br />
              <a href="#!" className="fw-bold remove-underline">Forgot password ? </a>

            </div>


          </div>
         
        </div>
        <div className="container py-4 h-100">
      <a href="#!" className="std-greyText remove-underline"> <p  className="std-centerAlign" > New to Amazon ?</p> </a>
      <div className="d-grid gap-2">
        <button className="btn btn-secondary std-subHeader1 " type="button"> <Link to="/signup" className="link-style">  Create your Amazon account </Link> </button>
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
