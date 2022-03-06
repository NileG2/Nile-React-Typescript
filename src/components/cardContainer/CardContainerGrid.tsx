import React, { useState } from 'react'
import ProductCardVertical from '../cards/productCards/ProductCardVertical'

const CardContainerGrid = () => {
    const [products, setProducts] = useState<any>([{
        product_name: "Jordan for Mens",
        product_id: "621b9e2f0df9ccbd0e2e5155",
        image: "https://picsum.photos/100",
        price: 19999,
        brand: "Jordan"
    }, {
        product_name: "Jordan for women",
        product_id: "621b9e2f0df9ccbd0e2e5155",
        image: "https://picsum.photos/100",
        price: 199,
        brand: "Jordan"
    }, {
        product_name: "Jordan for kids",
        product_id: "621b9e2f0df9ccbd0e2e5155",
        image: "https://picsum.photos/100",
        price: 199,
        brand: "Jordan"
    },{
        product_name: "Jordan for Mens",
        product_id: "621b9e2f0df9ccbd0e2e5155",
        image: "https://picsum.photos/100",
        price: 19999,
        brand: "Jordan"
    }, {
        product_name: "Jordan for women",
        product_id: "621b9e2f0df9ccbd0e2e5155",
        image: "https://picsum.photos/100",
        price: 199,
        brand: "Jordan"
    }, {
        product_name: "Jordan for kids",
        product_id: "621b9e2f0df9ccbd0e2e5155",
        image: "https://picsum.photos/100",
        price: 199,
        brand: "Jordan"
    }, {
        product_name: "Jordan for Mens",
        product_id: "621b9e2f0df9ccbd0e2e5155",
        image: "https://picsum.photos/100",
        price: 19999,
        brand: "Jordan"
    }, {
        product_name: "Jordan for women",
        product_id: "621b9e2f0df9ccbd0e2e5155",
        image: "https://picsum.photos/100",
        price: 199,
        brand: "Jordan"
    }, {
        product_name: "Jordan for kids",
        product_id: "621b9e2f0df9ccbd0e2e5155",
        image: "https://picsum.photos/100",
        price: 199,
        brand: "Jordan"
    }])
    return (
        <div className='row'>
            {
                products.map((product: any, index: number) => {
                    return <div className='col-2'>
                        <ProductCardVertical key={index} product={product} />
                    </div>
                })
            }
        </div>
    )
}

export default CardContainerGrid