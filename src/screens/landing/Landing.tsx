import React from "react";
import NavigationBar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./Landing.scss";

const Landing: React.FC = () => {
  return <div className="LandingWrapper" ><NavigationBar />
  {/* <img className="landing__adds" src="assets/Adds.png" ></img> */}
          <div className="app">
            <Carousel>
                <div>
                    <img className="landing__adds" src="assets/Adds.png" />
                </div>
                <div>
                    <img className="landing__adds" src="assets/Adds2.png" />
                </div>
                <div>
                    <img className="landing__adds" src="assets/Adds3.png" />
                </div>
            </Carousel>
          </div>
          <Footer />
        </div>;
};

export default Landing;
