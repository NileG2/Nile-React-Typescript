import React from "react";
import "./Payments.scss"

const Payments = () => {
  return( 
  <div className="container py-3 sellerPayment">

<div className="card card-style std-card" >
  <div className="card-body">
    
  <div style={{float: "left", fontWeight:"bold", fontSize:"1.3rem"}}>
  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    <label className="form-check-label" htmlFor="flexCheckDefault">
      Credit/Debit Card
    </label>
  </div>

  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    <label className="form-check-label" htmlFor="flexCheckDefault">
      Netbanking
    </label>
  </div>

  <div className="form-check">
    <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
    <label className="form-check-label" htmlFor="flexCheckDefault">
      UPI
    </label>
  </div>
</ div>


<div style={{float:"right"}}>
<img src={"assets/Capture.png"} alt="Image" className="img-style" />

</div>

  </div>
</div>

<div className="container py-5">
<h1>VENDOR BANK ACCOUNT DETAILS</h1>


<div className="card font-style card-style std-card" >
  <div className="card-body">
    <form>
        <div className="row mb-3">
            <label htmlFor="inputBankname" className="col-sm-2 col-form-label">Bank Name</label>
            <div className="col-sm-10">
              <select className="form-select font-style1" aria-label="Default select example ">
                <option selected>  </option>
                <option value="sbi">SBI BANK</option>
                <option value="canara">CANARA BANK</option>
                <option value="baroda">BANK OF BARODA</option>
                <option value="icici">ICICI BANK</option>
              </select>
            </div>
        </div>

        <div className="row mb-3">
            <label htmlFor="inputBranchName" className="col-sm-2 col-form-label">Branch Name</label>
            <div className="col-sm-10">
                <input type="text" className="form-control font-style1" id="inputBranchName"  />
            </div>
        </div>
        

        <div className="row mb-3">
            <label htmlFor="inputAccountNumber" className="col-sm-2 col-form-label">Account Number</label>
            <div className="col-sm-10">
                <input type="text" className="form-control font-style1" id="inputAccountNumber"  />
            </div>
        </div>

        <div className="row mb-3">
            <label htmlFor="inputifsc" className="col-sm-2 col-form-label">IFSC Code</label>
            <div className="col-sm-10">
                <input type="text" className="form-control font-style1" id="inputifsc"  />
            </div>
        </div>

       <div className="row mb-3">
          <label htmlFor="inputifsc" className="col-sm-2 col-form-label ">Do you have UPI ID ?</label>
          <div className="col-sm-10">
          <input type="radio" name="upi" value="Yes" className="form-check-input" />
          &emsp;  <label htmlFor="upiyes">Yes</label> &emsp;
            <input type="radio" name="upi" value="No" className="form-check-input" />
            &emsp;  <label htmlFor="upino">No</label>  
        </div>
    
        <div className="row mb-3">
            <label htmlFor="inputupi" className="col-sm-2 col-form-label">UPI ID</label>
            <div className="col-sm-10">
                <input type="text" className="form-control font-style1" id="inputupi"  />
            </div>
        </div>

    </div>

</form>
  </div>
  
  </div>
</div>


  </div>
  );
};

export default Payments;
