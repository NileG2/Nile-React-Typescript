import React, { useState } from "react";
import "./Inventory.scss";
import { FaSearch } from 'react-icons/fa'

import CardContainerGrid from "../../../../components/cardContainer/CardContainerGrid";

const Inventory = () => {
  const [addProductForm, setAddProductForm] = useState(true);
  return (

    <div className="std-card m-2">
      <p className="std-font2">INVENTORY</p>
      <div className='std-section'></div>
      <div className='d-flex m-2'>
        <div className="input-group" >
          <input type="text" className="std-inputField" aria-label="Recipient's username" />
          <button className="std-btn std-btnOrange" type="button"><FaSearch /></button>
        </div>
      </div>
      <br />
      <div>
        <CardContainerGrid />
      </div>
    </div>
  );
};

export default Inventory;
