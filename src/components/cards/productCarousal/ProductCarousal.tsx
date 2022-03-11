import React, { useState,useEffect } from 'react'
import { Carousel } from 'react-bootstrap'

const ProductCarousal = (props: any) => {

    const [slides, setSlides] = useState(props.slides)

    return (
        <Carousel>
            {
                slides.map((slide: any, index: number) => {
                    return <Carousel.Item key={index}>
                        <img
                            className="d-block w-100"
                            src={slide}
                            alt="First slide"
                            width="500px"
                            height="500px"
                        />
                        {/* <Carousel.Caption>
                            <h3>{slide.text}</h3>
                        </Carousel.Caption> */}
                    </Carousel.Item>
                })
            }
        </Carousel>
    )
}

export default ProductCarousal