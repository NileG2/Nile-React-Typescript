import React, { useEffect, useState } from "react";
import "./Filter.scss";
import Rating from "@mui/material/Rating";

const SidebarFilter = (props: any) => {
  const rating = [4.5, 4, 3, 2, 1];
  const price = [
    { start: 100, end: 200 },
    { start: 200, end: 500 },
    { start: 500, end: 1000 },
    { start: 1000, end: 2000 },
    { start: 2000, end: 5000 },
  ];
  const discount = [60, 50, 30, 20, 10];
  const brands = ["Jaskire", "Jordan", "Apache", "ManHunter"];
  const departments = [
    {
      name: "Electronics",
      type: "electronics",
    },
    {
      name: "Appliances",
      type: "appliances",
    },
    {
      name: "Men's Fashion",
      type: "mens_fashions",
    },
    {
      name: "Women's Fashion",
      type: "womens_fashions",
    },
    {
      name: "Kids Fashion",
      type: "kids_fashions",
    },
    {
      name: "Sports",
      type: "sports",
    },
    {
      name: "Toys and Games",
      type: "toys_and_games",
    },
    {
      name: "Other",
      type: "other",
    },
  ];

  const [val, setVal] = useState<string[]>([]);

  let allQueryProducts = props.queryProducts;
  let allSearchProducts = props.searchProducts;

  //has some bugs
  const handleCatSelect = (e: React.ChangeEvent<HTMLInputElement>): void => {
    if (val.includes(e.target.value)) {
      let newVal = val.filter((x) => x !== e.target.value);
      setVal([...newVal]);
    } else {
      setVal([...val, e.target.value]);
    }
  };

  useEffect(() => {
    const handleDeptFilter = (): void => {
      if (val.length === 0 && props.operation === "query") {
        props.setQueryProducts([...allQueryProducts]);
        return;
      }
      if (val.length === 0 && props.operation === "search") {
        props.setSearchProducts([...allSearchProducts]);
        return;
      }
      if (props.operation === "query") {
        let all = [...props.queryProducts];
        let filtered = all.filter((prod: any) => val.includes(prod.category));
        props.setQueryProducts(filtered);
      }

      if (props.operation === "search") {
        let all = [...props.searchProducts];
        let filtered = all.filter((cat: any) => val.includes(cat.category));
        props.setSearchProducts([...filtered]);
      }
    };
    handleDeptFilter();
  }, [val]);

  return (
    <div className="Filter">
      <div className="std-card std-dimension">
        <button className="std-btn m-1">Reset</button>
        {props.operation === "search" && (
          <div>
            <p className="std-boldFont std-font1">Department</p>
            <ul className="std-ul">
              {departments.map((d, index) => {
                return (
                  <li key={index}>
                    <div className="d-flex">
                      <input
                        className="std-checkbox"
                        value={d.type}
                        type="checkbox"
                        onChange={(e) => handleCatSelect(e)}
                      ></input>
                      {d.name}
                    </div>
                  </li>
                );
              })}
            </ul>
          </div>
        )}

        <br />
        <div>
          <p className="std-boldFont std-font1">Brand</p>
          <ul className="std-ul">
            {brands.map((b, index) => {
              return (
                <li key={index}>
                  <div className="d-flex">
                    <input
                      className="std-checkbox"
                      value={index}
                      type="checkbox"
                    ></input>
                    {b}
                  </div>
                </li>
              );
            })}
            <li>
              <div className="d-flex">
                <input
                  className="std-checkbox"
                  value={-1}
                  type="checkbox"
                ></input>
                Other
              </div>
            </li>
          </ul>
        </div>
        <br />
        <div>
          <p className="std-boldFont std-font1">Avg. Customer Rating</p>
          <ul className="std-ul">
            {rating.map((stars, index) => {
              return (
                <li key={index}>
                  <div className="d-flex">
                    <input
                      className="std-checkbox"
                      value={index}
                      type="checkbox"
                    ></input>
                    <Rating
                      name="read-only"
                      value={stars}
                      precision={0.5}
                      readOnly
                    />
                    <p>& up</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <br />
        <div>
          <p className="std-boldFont std-font1">Price</p>
          <ul className="std-ul">
            {price.map((price, index) => {
              return (
                <li key={index}>
                  <div className="d-flex">
                    <input
                      className="std-checkbox"
                      value={index}
                      type="checkbox"
                    ></input>
                    {price.start + " to " + price.end}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <br />
      </div>
    </div>
  );
};

export default SidebarFilter;
