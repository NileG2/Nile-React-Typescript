import React from "react";
import "./Signup.scss";

import { BsGoogle } from "react-icons/bs";

const Signup = () => {
  return <div>
    

<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
  <img src={"assets/logoBlack.png"} alt="Image" style={{width:"150px", height:"100px", marginLeft: "auto", marginRight:"auto", display:"block"}} />
    <div className="row d-flex justify-content-center  align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 ">

            <div className="mb-md-1 mt-md-1 pb-1">

              <h2 className="fw-bold mb-2 text-uppercase">Create Account</h2><br />

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeNameX">Your name</label>
                <input type="text" id="typeNameX" className="form-control form-control-lg" />
              </div>

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeMobileX">Mobile</label>
                <input type="text" id="typeMobileX" className="form-control form-control-lg" />
              </div>

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" />
              </div>

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" />
                <span> Password must be at least 6 characters </span>
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-warning std-subHeader1" type="button">Continue</button>
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
