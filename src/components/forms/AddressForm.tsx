import React from "react";

export default function AddressForm(props:any) {
  return (
    <div className="std-card m-2">
        {
            props.flag===true?
            <>
            <p className="std-font2">Enter/Edit your new address</p>
            <div className="std-section"></div>
            </>
            : <div> </div>
            
        }
      

      <form className="m-2">
        
        <div className="row m-2">
          <label className="col-4 std-subHeader1">Plot no :</label>
          <input className="std-inputField col-8"></input>
        </div>
        <div className="row m-2">
          <label className="col-4 std-subHeader1">Address Line 1 :</label>
          <input className="std-inputField col-8"></input>
        </div>
        <div className="row m-2">
          <label className="col-4 std-subHeader1">Address Line 2 :</label>
          <textarea className="std-inputField col-8" rows={4}></textarea>
        </div>
        <div className="row m-2">
          <label className="col-4 std-subHeader1">Pin code :</label>
          <input className="std-inputField col-8"></input>
        </div>

        <br />
        <div className="d-flex justify-content-center">
          <button
            className="std-btn std-btnOrange"
            style={{ width: "20rem" }}
            // onClick={(e) => {
            //   handleNextStep(e);
            // }}
          >
            ADD/UPDATE
          </button>
        </div>
      </form>
    </div>
  );
}
