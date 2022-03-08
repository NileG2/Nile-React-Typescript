import React, { useEffect, useState } from "react";
import "./Nav.scss";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import {
  FaSearch,
  FaUserAlt,
  FaShoppingCart,
  FaHandsHelping,
} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillShop } from "react-icons/ai";
import { MdLogout, MdWavingHand } from "react-icons/md";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { Link, useSearchParams } from "react-router-dom";

const NavBar = () => {
  const categoryURLs = [
    {
      category: "All",
      url: "/products",
    },
    {
      category: "Electronics",
      url: "/products/query?category=electronics",
    },
    {
      category: "Appliances",
      url: "/products/query?category=appliances",
    },
    {
      category: "Men's Fashion",
      url: "/products/query?category=mens_fashions",
    },
    {
      category: "Women's Fashion",
      url: "/products/query?category=womens_fashions",
    },
    {
      category: "Kids Fashion",
      url: "/products/query?category=kids_fashions",
    },
    {
      category: "Sports",
      url: "/products/query?category=sports",
    },
    {
      category: "Toys and Games",
      url: "/products/query?category=toys_and_games",
    },
    {
      category: "Other",
      url: "/products/query?category=other",
    },
  ];
  const [params] = useSearchParams();

  let queryParam = params.get("category");
  let searchParam = params.get("search");
  const isLoggedin = true;
  const isSeller = true;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [choosen, setChoosen] = useState(categoryURLs[0].category);
  const [queryString, setQueryString] = useState("");

  useEffect(() => {
    categoryURLs.forEach((cat, index) => {
      let str = cat.url;
      let pos = str.indexOf("=");
      let p = str.slice(pos + 1);
      if (queryParam && p === queryParam) {
        setChoosen(cat.category);
      }
      if (searchParam) {
        setQueryString(searchParam);
      }
    });
  }, [queryParam]);

  const handleSearch = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();
    window.open(
      `http://localhost:3000/products/query?search=${queryString}`,
      "_blank"
    );
  };
  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === "keydown" &&
        ((event as React.KeyboardEvent).key === "Tab" ||
          (event as React.KeyboardEvent).key === "Shift")
      ) {
        return;
      }

      setDrawerOpen(open);
    };
  return (
    <div className="navbarWrapper">
      <div className="navWeb">
        <div className="logo">
          <Link to="/">
            <img src="assets/logoWhite.png" alt="nileLogo" />
          </Link>
        </div>
        <div className="searchBar">
          <div className="text">Search</div>
          <div className="categories">
            <NavDropdown
              title={choosen}
              id="basic-nav-dropdown"
              className="dropDownButton"
            >
              {categoryURLs.map((cat, index) => {
                return (
                  <Link
                    key={index}
                    to={cat.url}
                    className="dropLink"
                    onClick={() => {
                      setChoosen(cat.category);
                    }}
                  >
                    <div
                      onClick={() => {
                        setChoosen(cat.category);
                      }}
                    >
                      {cat.category}
                    </div>
                  </Link>
                );
              })}
            </NavDropdown>
          </div>
          <form onSubmit={(e) => handleSearch(e)}>
            <input
              type="text"
              className="searchField"
              value={queryString}
              onChange={(e) => setQueryString(e.target.value)}
            />
            <button className="std-btnOrange searchBtn" type="submit">
              <FaSearch />
            </button>
          </form>
        </div>
        <div className="links">
          {isLoggedin === true ? (
            <div className="linkItem">
              <MdWavingHand /> Hi, Jayesh
            </div>
          ) : (
            <div className="linkItem">
              <FaUserAlt />
              &nbsp; Sign In
            </div>
          )}

          {isSeller && (
            <div className="linkItem">
              <AiFillShop />
              &nbsp; Seller Profile
            </div>
          )}
          <div className="linkItem">
            <FaShoppingCart />
            &nbsp; My Cart
          </div>
          <Link to="/signin" style={{ textDecoration: "none" }}>
            <div className="linkItem">
              <MdLogout />
              &nbsp; Logout
            </div>
          </Link>
        </div>
      </div>

      <div className="navMob">
        <GiHamburgerMenu onClick={toggleDrawer(!drawerOpen)} />
        <Drawer anchor="right" open={drawerOpen} onClose={toggleDrawer(false)}>
          <List>
            {isLoggedin === true ? (
              <ListItem button>
                <ListItemIcon>
                  <MdWavingHand />
                </ListItemIcon>
                <ListItemText primary="Hi Jayesh" />
              </ListItem>
            ) : (
              <ListItem button>
                <ListItemIcon>
                  <FaUserAlt />
                </ListItemIcon>
                <ListItemText>Sign In</ListItemText>
              </ListItem>
            )}

            {isSeller === true && (
              <ListItem button>
                <ListItemIcon>
                  <AiFillShop />
                </ListItemIcon>
                <ListItemText primary="Seller Profile" />
              </ListItem>
            )}

            <ListItem button>
              <ListItemIcon>
                <FaShoppingCart />
              </ListItemIcon>
              <ListItemText primary="My Cart" />
            </ListItem>
            <ListItem button>
              <ListItemIcon>
                <FaHandsHelping />
              </ListItemIcon>
              <ListItemText primary="Help" />
            </ListItem>
          </List>
        </Drawer>
      </div>
    </div>
  );
};

export default NavBar;
