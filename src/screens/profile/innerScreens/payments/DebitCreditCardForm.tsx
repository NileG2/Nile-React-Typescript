import React from 'react'

const DebitCreditCardForm = () => {
  return (
    <div className="std-card" id="menu-1">
      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Card Number
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>
      <div className="mb-3 ">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Expiry Month/Year
        </label> &nbsp;
        <input type="month" id="expiry" name="expiry" />
        &emsp;
        <label htmlFor="exampleFormControlInput2" className="form-label">
          CVV
        </label>&nbsp;
        <input type="text" id="expiry" name="expiry" className="col-md-2" />
      </div>

      <div className="mb-3">
        <label htmlFor="exampleFormControlInput1" className="form-label">
          Name on card
        </label>
        <input
          type="text"
          className="form-control"
          id="exampleFormControlInput1"
        />
      </div>

      <div className="d-grid gap-2 d-md-flex justify-content-md-center">
        <button type="button" className="std-btn std-btnOrange">
          Save
        </button>
      </div>
    </div>
  )
}

export default DebitCreditCardForm