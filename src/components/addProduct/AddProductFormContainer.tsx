import React from "react";
import ProductGeneral from "./forms/ProductGeneral";
import ProductHighlights from "./forms/ProductHighlights";
import TechnicalDetails from "./forms/TechnicalDetails";
import ProductSizes from "./forms/ProductSizes";
import ProductColor from "./forms/ProductColor";
import ProductImages from "./forms/ProductImages";

const AddProductFormContainer = () => {
  return (
    <div className="std-card m-2 addPFCWrapper">
      <div className="sellerDetails">{/* here comes the seller details */}</div>
      <p className="std-font2">ADD PRODUCT</p>
      <div className="std-section"></div>
      <div className="row">
        <div className="col">
          <ProductGeneral />
          <ProductHighlights />
          <TechnicalDetails />
        </div>
        <div className="col">
          <ProductImages />
          <ProductSizes />
          <ProductColor />
        </div>
      </div>
    </div>
  );
};

export default AddProductFormContainer;
