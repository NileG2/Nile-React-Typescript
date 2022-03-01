import React, { useState } from 'react'
import Rating from '@mui/material/Rating';
import ProgressBar from '../../helpers/ProgressBar';
import ProductCarousal from '../productCarousal/ProductCarousal';
import SelectOptions from '../../helpers/SelectOptions'

const ProductCardDetails = (props: any) => {

    const [technicalDetailsKeys, setTechnicalDetailsKeys] = useState<any>(Object.keys(props.product.technicalDetails))
    const [technicalDetailsValues, setTechnicalDetailsValues] = useState<any>(Object.values(props.product.technicalDetails))
    const [ratingStarKeys, setRatingStartKeys] = useState<any>(Object.keys(props.product.rating.stars).reverse())

    return (
        <div className='Card'>
            <div className='std-card std-no-shadow p-0'>
                <div className='row p-3'>
                    <div className='col-5'>
                        <ProductCarousal slides={props.product.slides} />
                        <br />
                        <div className='p-2' style={{border:"solid 1px gray",borderRadius:"12px"}}>
                            {
                                props.product.options.map((option: any, index: number) => {
                                    return <SelectOptions option={option} key={index} />
                                })
                            }
                        </div>
                    </div>
                    <div className='col-7'>
                        <p className='m-0 std-boldFont std-font3 overflow-hidden'>{props.product.product_name}</p>
                        <div className='std-section'></div>
                        <div className='row'>
                            <div className='col'>
                                <p className='std-bold std-greenText std-font1 m-0'>In Stock</p>
                                <p className='std-font1 m-0'>Sold By {props.product.brand}</p>
                                <Rating name="read-only" value={3.5} precision={0.5} readOnly />
                            </div>
                            <div className='col'>
                                <div className='row'>
                                    <p className='col-9 m-0 p-0 std-boldFont std-font2' style={{ textAlign: "end" }}>{props.product.price}</p>
                                    <p className='col-3 m-0 std-desc std-fontSmall'>INR</p>
                                </div>
                            </div>
                        </div>
                        <div className='std-section'></div>
                        <div>
                            <p className='std-font2 std-boldFont'>About this product</p>
                            <ul>
                                {
                                    props.product.details.map((detail: any, index: number) => {
                                        return <li key={index}>
                                            <p className='std-bold std-font1 m-0'>{detail}</p>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className='std-section'></div>
                        <div>
                            <p className='std-font2 std-boldFont'>Technical Details</p>
                            <ul className='list-group'>
                                {
                                    technicalDetailsKeys.map((key: any, index: number) => {
                                        return <li className='list-group-item' key={index}>
                                            <div className='row'>
                                                <div className='col std-boldFont'>{key}</div>
                                                <div className='col'>{technicalDetailsValues[index]}</div>
                                            </div>
                                        </li>
                                    })
                                }
                            </ul>
                            <br />
                        </div>
                        <div className='std-section'></div>
                        <div>
                            <p className='std-font2 std-boldFont'>Rating</p>
                            <div>
                                <Rating name="read-only" value={3.5} precision={0.5} readOnly />
                                <p>Average Customer Rating based is on a total of {props.product.rating.total} ratings</p>
                            </div>
                            <ul className='std-ul'>
                                {
                                    ratingStarKeys.map((key: any, index: number) => {
                                        return <li className='d-flex' key={index}>
                                            <p className='std-font1 p-2'>{key} Star</p>
                                            <ProgressBar bgcolor="#444" progress={props.product.rating.stars[ratingStarKeys[index]] * 100} height="10px" />
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                        <div className='std-section'></div>
                        <div>
                            <p className='std-font2 std-boldFont'>Reviews</p>
                            <p>Total reviews 37</p>
                            <ul className='std-ul'>
                                {
                                    props.product.reviews.map((review: any, index: number) => {
                                        return <li className='std-card m-1' key={index}>
                                            <p className='std-font1 std-boldFont'>Posted by {review.poster} on {review.date}</p>
                                            <p className='std-font1'>{review.comment}</p>
                                        </li>
                                    })
                                }
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductCardDetails