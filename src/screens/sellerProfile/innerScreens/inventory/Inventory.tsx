import React from "react";
import "./Inventory.scss";

const Inventory = () => {
  return (
  
  <div className="container py-5 mx-5 sellerInventory">

      
        <div style={{maxWidth:"70%", display:"flex"}}>
          <span className="headings"> INVENTORY</ span > &emsp;

            <div className="input-group mb-3 " > 
            <input type="text" className="form-control input-text search-borders" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                <div className="input-group-append"> <button className="btn btn-lg" type="button" style={{backgroundColor:"orange"}}><i className="fa fa-search" style={{color:"white"}}></i></button> </div>
            </div>

            <div>
            <button type="button" className="btn btn-warning font-style2" style={{float:"right", position:"absolute", right:"10%"}}>Add a Product</button>
            </div>
        </div>


<div className="card content-row std-card" style={{maxWidth: "1000px"}}>
  <div className="row ">
    <div className="col-md-4">
      <img src="https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body prod-style" >
        <h3 className="card-title font-style1">Jordan Shoe for Men</h3>
        <p className="font-style">In stock 198</p>
        <p className="font-style1">Sold By Jordan</p>
        <p><span className="font-style1"> Size:</span> 8 UK</p>
        <p><span className="font-style1"> Color:</span> Navy Blue</p>

      </div>
      
      <div className="py-3 price-style">
        <p className="font-style1" >INR <span className="font-style2">599.00</span> </p>
        <p className="font-style3">-100.00 INR</p>
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="buttons-style">
    <button type="button" className="btn btn-warning font-style2" style={{paddingLeft : "20px", paddingRight: "20px"}}>Edit</button>
        &emsp;&emsp;
    <button type="button" className="btn btn-warning font-style2">Delete</button>
  </div>

    </div>
  </div>
</div>


<div className="card std-card" style={{maxWidth: "1000px"}}>
  <div className="row g-0">
    <div className="col-md-4">
      <img src="https://m.media-amazon.com/images/I/71D9ImsvEtL._UY500_.jpg" className="img-fluid rounded-start" alt="..." />
    </div>
    <div className="col-md-8">
      <div className="card-body prod-style" >
        <h3 className="card-title font-style1">Jordan Shoe for Men</h3>
        <p className="font-style">In stock 198</p>
        <p className="font-style1">Sold By Jordan</p>
        <p><span className="font-style1"> Size:</span> 8 UK</p>
        <p><span className="font-style1"> Color:</span> Navy Blue</p>

      </div>
      
      <div className="py-3 price-style">
        <p className="font-style1" >INR <span className="font-style2">599.00</span> </p>
        <p className="font-style3">-100.00 INR</p>
      </div>

      <br /><br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <div className="buttons-style">
    <button type="button" className="btn btn-warning font-style2" style={{paddingLeft : "20px", paddingRight: "20px"}}>Edit</button>
        &emsp;&emsp;
    <button type="button" className="btn btn-warning font-style2">Delete</button>
  </div>

    </div>
  </div>
</div>




  </div>
  );
};

export default Inventory;
