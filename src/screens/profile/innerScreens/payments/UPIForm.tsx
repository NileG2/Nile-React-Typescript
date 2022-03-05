import React from 'react'

const UPIForm = () => {
    return (
        <div className="std-card" id="menu-3">
            <div className="mb-3">
                <label htmlFor="exampleFormControlInput1" className="form-label">
                    Enter VPA/UPI id
                </label>
                <input
                    type="email"
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

export default UPIForm