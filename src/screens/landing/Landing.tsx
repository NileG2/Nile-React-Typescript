import React, { useState } from "react";
import NavBar from '../../components/nav/NavBar'
import Footer from "../../components/footer/Footer";
import { Carousel } from "react-bootstrap";
import "./Landing.scss";

const Landing: React.FC = () => {
    const [index, setIndex] = useState(0);

    const handleSelect = (selectedIndex: any, e: any) => {
        setIndex(selectedIndex);
    };
    return <div className="LandingWrapper" ><NavBar />
        {/* <img className="landing__adds" src="assets/Adds.png" ></img> */}
        <Carousel activeIndex={index} onSelect={handleSelect}>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/Adds.png"
                    alt="First slide"
                />
                <Carousel.Caption>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/Adds2.png"
                    alt="Second slide"
                />
            </Carousel.Item>
            <Carousel.Item>
                <img
                    className="d-block w-100"
                    src="assets/Adds3.png"
                    alt="Third slide"
                />
            </Carousel.Item>
        </Carousel>

        <Footer />
    </div>;
}
export default Landing;
