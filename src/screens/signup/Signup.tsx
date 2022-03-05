import React, { useState } from "react";
import "./Signup.scss";

import NavBar from '../../components/nav/NavBar'
import { BsGoogle } from "react-icons/bs";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [username, setusername] = useState("")
  const [mobile, setmobile] = useState("")
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const navigate = useNavigate();

  function signupUser(e: React.MouseEvent<HTMLButtonElement, MouseEvent>){
    e.preventDefault();
    if (username != null && mobile.length == 10 && email != null && password.length >6 ){
      axios.post("http://localhost:9000/api/register/register",{
        username : username,
        mobile : mobile,
        email : email,
        password: password
      
      }).then((resp)=>{
          alert("SignedUp Added Successfully")
          navigate("/signin")
      }).catch((err)=>{
        alert("You are already a member. Please sign in")
      })
    }
  
    else{
    alert("Please enter valid details")
  }
  }
  return <div>
    

<section className="vh-100 gradient-custom">
  <div className="container py-2 h-100">
  <img src={"assets/logoBlack.png"} alt="Image" style={{width:"150px", height:"100px", marginLeft: "auto", marginRight:"auto", display:"block"}} />
    <div className="row d-flex justify-content-center  align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 std-card">

            <div className="mb-md-1 mt-md-1 pb-1">

              <h2 className="fw-bold mb-2 text-uppercase">Create Account</h2><br />

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeNameX">Your name</label>
                <input type="text" id="typeNameX" className="form-control form-control-lg" value={username} onChange={(e)=>setusername(e.target.value)} required/>
              </div>

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeMobileX">Mobile</label>
                <input type="text" id="typeMobileX" className="form-control form-control-lg" value={mobile} onChange={(e)=>setmobile(e.target.value)} required/>
              </div>

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" value={email} onChange={(e)=>setemail(e.target.value)} required/>
              </div>

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" value={password} onChange={(e)=>setpassword(e.target.value)} required/>
                <span> Password must be at least 6 characters </span>
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-warning std-subHeader1" type="submit" onClick={(e)=>signupUser(e)}>Continue</button>
                <h2 className="std-centerAlign std-subHeader2"> OR </h2>
                <button className="btn btn-warning std-subHeader1" type="button"> <BsGoogle /> Continue with Google</button>
              </div>

            </div>


          </div>
         
        </div>
      
      </div>
      
    </div>
    
  </div>
  
</section>

  </div>;
};

export default Signup;
