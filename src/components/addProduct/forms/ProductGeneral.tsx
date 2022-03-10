import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createProduct } from "../../../redux/actions/Product";

const ProductGeneral = (props: any) => {
  let product = useSelector((state: any) => state.productDetail.product);
  let dispatch = useDispatch();

  const [name, setName] = useState({});
  const [brand, setBrand] = useState("");
  const [available_quantity, setAvailableQuantity] = useState("");
  const [price, setPrice] = useState("");
  const [sector, setsector] = useState("electronics");

  const categories = [
    {
      category: "Electronics",
      url: "electronics",
    },
    {
      category: "Appliances",
      url: "appliances",
    },
    {
      category: "Men's Fashion",
      url: "mens_fashions",
    },
    {
      category: "Women's Fashion",
      url: "womens_fashions",
    },
    {
      category: "Kids Fashion",
      url: "kids_fashions",
    },
    {
      category: "Sports",
      url: "sports",
    },
    {
      category: "Toys and Games",
      url: "toys_and_games",
    },
    {
      category: "Other",
      url: "other",
    },
  ];

  const [GeneralInfo, setGeneralInfo] = useState({
    name: "",
    brand: "",
    available_quantity: "",
    price: "",
  });

  useEffect(() => {
    product["name"] = name;
    product["brand"] = brand;
    product["available_quantity"] = available_quantity;
    product["price"] = price;
    product["category"] = sector;
    dispatch(createProduct(product));
  }, [available_quantity, brand, dispatch, name, price, product, sector]);


  const sendData = (e: any) => {
    e.preventDefault();
    dispatch(createProduct(product));
  };

  return (
    <form className="std-card m-2">
      <p className="std-font2">General Product Information</p>
      <div className="row m-2">
        <label className="col-4 std-boldFont">Name :</label>
        <input
          className="std-inputField col-8"
          name="name"
          onChange={(e) => setName(e.target.value)}
        ></input>
      </div>
      <div className="row m-2">
        <label className="col-4  std-boldFont">Category :</label>
        <select
          className="std-inputField col-8"
          onChange={(e) => {
            setsector(e.target.value);
          }}
          required
          defaultValue={sector}
        >
          {categories.map((cat, index) => (
            <option key={index} value={cat.url}>
              {cat.category}
            </option>
          ))}

          {sector}
        </select>
      </div>
      <div className="row m-2">
        <label className="col-4  std-boldFont">Brand :</label>
        <input
          className="std-inputField col-8"
          name="brand"
          onChange={(e) => setBrand(e.target.value)}
        ></input>
      </div>
      <div className="row m-2">
        <label className="col-4  std-boldFont">Available Quantity :</label>
        <input
          className="std-inputField col-8"
          type="number"
          min={1}
          name="available_quantity"
          onChange={(e) => setAvailableQuantity(e.target.value)}
        ></input>
      </div>
      <div className="row m-2">
        <label className="col-4  std-boldFont">Price :</label>
        <input
          className="std-inputField col-8"
          type="number"
          min={1}
          name="price"
          onChange={(e) => setPrice(e.target.value)}
        ></input>
      </div>
      <br />
      <div className="d-flex justify-content-center">
        <button
          className="std-btn std-btnOrange"
          style={{ width: "10rem" }}
          onClick={(e) => sendData(e)}
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default ProductGeneral;
