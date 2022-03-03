import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <div className="main-footer">
      <div className="container">
        <div className="row">
          {/* Column1 */}
          <div className="col">
            <h4><b>Get to know us</b></h4>
            <h6 className="list-unstyled">
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">About us</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">About us</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">About us</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">About us</a></li>
            </h6>
          </div>
          {/* Column2 */}
          <div className="col">
            <h4><b>Connect with us</b></h4>
            <h6 className="list-unstyled">
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Facebook</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Twitter</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Instagram</a></li>
            </h6>
          </div>
          {/* Column3 */}
          <div className="col">
            <h4><b>Make Money with us</b></h4>
            <h6 className="list-unstyled">
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Sell on Amazon</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Sell under amazon escalator</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Amazon Global Selling</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Become an Affiliate</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Fullfillment by amazon</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Advertise your products</a></li>
            </h6>
          </div>
          {/* Column4 */}
          <div className="col">
            <h4><b>Let us Help you</b></h4>
            <h6 className="list-unstyled">
            <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Covid-19 and Amazon</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Your Account</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Amazon App download</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">100% Purchase Protecion</a></li>
              <li><a href="https://www.aboutamazon.in/?utm_source=gateway&utm_medium=footer">Help</a></li>
        
            </h6>
          </div>
        </div>
        <hr />
        <div className="row">
          <p className="col-sm">
            &copy;{new Date().getFullYear()} Nile | All rights reserved |
            Terms Of Service | Privacy
          </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;