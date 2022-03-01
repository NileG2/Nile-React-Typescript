import React from "react";
import "./Signin.scss";

import { BsGoogle } from "react-icons/bs";

const Signin = () => {
  return <div>
    

<section className="vh-100 gradient-custom">
  <div className="container py-5 h-100">
  <img src={"assets/logoBlack.png"} alt="Image" style={{width:"150px", height:"100px", marginLeft: "auto", marginRight:"auto", display:"block"}} />
    <div className="row d-flex justify-content-center  align-items-center h-100">
      <div className="col-12 col-md-8 col-lg-6 col-xl-5">
        <div className="card" style={{borderRadius: "1rem"}}>
          <div className="card-body p-5 ">

            <div className="mb-md-1 mt-md-1 pb-1">

              <h2 className="fw-bold mb-2 text-uppercase">Sign-In</h2><br />

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typeEmailX">Email</label>
                <input type="email" id="typeEmailX" className="form-control form-control-lg" />
              </div>

              <div className="form-outline form-white mb-4">
              <label className="form-label" htmlFor="typePasswordX">Password</label>
                <input type="password" id="typePasswordX" className="form-control form-control-lg" />
              </div>

              <div className="d-grid gap-2">
                <button className="btn btn-warning std-subHeader1" type="button">Sign-In</button>
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
          <button className="btn btn-secondary std-subHeader1" type="button">Create your Amazon account</button>
      </div>
      </div>
      </div>
      
    </div>
    
  </div>
  
</section>

  </div>;
};

export default Signin;
