import React, { useState, useEffect } from 'react'
import ProductCardDetails from '../../components/cards/productCards/ProductCardDetails'

const ProductDetails = () => {
    const [product, setProduct] = useState({
        product_name: "Jordan for Mens",
        product_id: "621b9e2f0df9ccbd0e2e5155",
        image: "https://picsum.photos/100",
        price: 19999,
        brand: "Jordan",
        payable: 19999,
        quantity: 1,
        // options:["shoe-size","color","shirt-size","pant-size"],
        options: [
            {
                type: "shoe-size",
                available: ["7UK", "8UK", "9UK", "10UK", "11UK", "12UK"]
            }, {
                type: "shirt-size",
                available: ["S", "M", "L", "XL", "XXL", "XXXL"]
            }, {
                type: "pant-size",
                available: ["waist 28", "waist 30", "waist 32", "waist 34", "waist 36", "waist 38", "waist 40"]
            }, {
                type: "color",
                available: ["#ff1100", "#ffd900", "#00702b", "#00abd1", "#ffffff", "#000000"]
            }
        ],
        slides: [
            {
                image: "https://picsum.photos/600",
                text: "Custom Made for you"
            }, {
                image: "https://picsum.photos/600",
                text: "And your Lovedone"
            }, {
                image: "https://picsum.photos/600",
                text: "Check it out"
            }
        ],
        details: [
            "12+2+2MP triple rear camera.",
            "16.5 centimeters (6.5-inch) waterdrop multi touch screen",
            "Memory, Storage & SIM: 6GB RAM | 128GB internal memory",
            "4230mAH lithium-polymer battery providing talk-time of 45 hours",
            "1 year manufacturer warranty for device and 6 months manufacturer warranty",
            "Box also includes: USB cable, Sim tray ejecter"
        ],
        technicalDetails: {
            "batteries": "4230mAH Lithium-polymer",
            "front camera": "2 MP",
            "back camera": "12+2 MP",
            "android version": "OS 12"
        },
        rating: {
            total: 311,
            stars: {
                "5": 0.7,
                "4": 0.2,
                "3": 0.1,
                "2": 0.03,
                "1": 0.03
            }
        },
        reviews: [
            {
                poster: "Aditya Dawadikar",
                date: "18-12-2021",
                comment: "Quisque feugiat condimentum sem eget vestibulum. Nam purus felis, ullamcorper ut sem a, iaculis faucibus est. Donec congue, nisi vitae condimentum volutpat, quam magna porta ipsum, sed cursus tortor neque eget erat."
            }, {
                poster: "Farhan Akhtar",
                date: "2-2-2022",
                comment: "Quisque feugiat condimentum sem eget vestibulum. Nam purus felis, ullamcorper ut sem a, iaculis faucibus est. Donec congue, nisi vitae condimentum volutpat, quam magna porta ipsum, sed cursus tortor neque eget erat."
            }, {
                poster: "Richard",
                date: "13-2-2022",
                comment: "Quisque feugiat condimentum sem eget vestibulum. Nam purus felis, ullamcorper ut sem a, iaculis faucibus est. Donec congue, nisi vitae condimentum volutpat, quam magna porta ipsum, sed cursus tortor neque eget erat."
            }
        ]

    })
    return (
        <div className='std-bg'>
            <div className='row m-1'>
                <div className='col-9'>
                    <ProductCardDetails product={product} />
                </div>
                <div className='col-3'>
                    <div className='std-card'>
                        <button className='std-btn std-btnYellow container m-1'>Buy Now</button>
                        <button className='std-btn std-btnOrange container m-1'>Add to Cart</button>
                        <button className='std-btnGray container m-1'>Add to watchlist</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails