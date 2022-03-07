import React, { useState } from "react";
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
import { MdWavingHand } from "react-icons/md";
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";

const NavBar = () => {
  const categories = [
    "all",
    "electronics",
    "appliances",
    "fashion for kids",
    "fashion for men",
    "fashion for women",
    "toys and games",
  ];
  const isLoggedin = true;
  const isSeller = true;
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [choosen, setChoosen] = useState(categories[0]);
  const [queryString, setQueryString] = useState("");

  const handleSearch = (): void => {
    console.log("search button clicked with query:", queryString);
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
      {/* <div className="navWeb">
        <div className="logo">
          <img src="assets/logoWhite.png" alt="nileLogo" />
        </div>
        <div className="searchBar">
          <div className="text">Search</div>
          <div className="categories">
            <NavDropdown
              title={choosen}
              id="basic-nav-dropdown"
              className="dropDownButton"
            >
              {categories.map((cat, index) => {
                return (
                  <NavDropdown.Item
                    key={index}
                    href="/products"
                    onClick={() => {
                      setChoosen(cat);
                    }}
                  >
                    {cat}
                  </NavDropdown.Item>
                );
              })}
            </NavDropdown>
          </div>
          <form onSubmit={handleSearch}>
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
          <div className="linkItem">
            <FaHandsHelping />
            &nbsp; Help
          </div>
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
      </div> */}
    </div>
  );
};

export default NavBar;
