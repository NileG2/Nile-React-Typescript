import React from "react";
import "./BecomeSeller.scss";
const BecomeSeller = () => {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    //validation checks
    alert("Business registered");
  };
  return (
    <div className="std-bg becomeSellerWrapper">
      <div className="row m-1">
        <div className="col-9">
          <div className="std-card">
            <p className="p-2 m-0 text-left std-font2 std-bold">
              Become a seller on Nile
            </p>
            <div className="std-section"></div>

            <div className="sellerFormWrapper">
              <div className="std-font2">
                Please provide the following details to get started
              </div>
              <form
                onSubmit={(e: React.FormEvent<HTMLFormElement>) =>
                  handleSubmit(e)
                }
              >
                <div className="formRow">
                  <div className="label">Business name</div>
                  <input type="text" className="std-inputField" />
                </div>
                <div className="formRow">
                  <div className="label">Sector</div>
                  <input type="text" className="std-inputField" />
                </div>
                <hr />
                <div className="std-font1 std-bold">Your Business Address</div>
                <div className="formRow">
                  <div className="label">Address line 1</div>
                  <input type="text" className="std-inputField" />
                </div>
                <div className="formRow">
                  <div className="label">Locality</div>
                  <input type="text" className="std-inputField" />
                </div>
                <div className="formRow">
                  <div className="label">City</div>
                  <input type="text" className="std-inputField" />
                </div>
                <div className="formRow">
                  <div className="label">Pincode</div>
                  <input type="text" className="std-inputField" />
                </div>
                <div className="formRow">
                  <div className="label">State</div>
                  <input type="text" className="std-inputField" />
                </div>
                <div className="formRow">
                  <div className="label">Country</div>
                  <input type="text" className="std-inputField" />
                </div>
                <hr />
                <div className="std-font1 std-bold">Contact Details</div>

                <div className="formRow">
                  <div className="label">Mobile No:</div>
                  <input type="text" className="std-inputField" />
                </div>
                <div className="formRow">
                  <div className="label">Alternate mobile no:</div>
                  <input type="text" className="std-inputField" />
                </div>
                <button type="submit" className="std-btn std-btnOrange">
                  Register Business
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BecomeSeller;
