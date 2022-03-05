import React from 'react'

const NetBankingForm = () => {
    return (
        <div className="std-card" id="menu-2" >
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Username
                </label>
                <input
                    type="text"
                    className="form-control"
                    id="exampleFormControlInput1"
                />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Password
                </label>
                <input
                    type="password"
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

export default NetBankingForm