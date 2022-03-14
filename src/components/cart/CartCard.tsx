import React, { useEffect, useState } from "react";
import CardContainerVertical from "../cardContainer/CardContainerVertical";
import { useSelector} from "react-redux";

const CartCard = () => {

    const productsFromCart = useSelector((state: any) => state.cart.userCart);
    const subtotal = useSelector((state: any) => state.cart.subtotal);

    return (
        <div className='std-card'>
            <div className='row'>
                <div className='col'>
                    <p className='p-2 m-0 text-left std-font2'>CART</p>
                </div>
                <div className='col'>
                    <p className='m-0 p-2 std-font1' style={{ textAlign: "right" }}>Price</p>
                </div>
            </div>
            <div className='std-section'></div>
            <CardContainerVertical products={productsFromCart} isCart={true}/>
            <div className='std-section'></div>
            <div className='row'>
                <div className='col-7'>
                </div>
                <div className='col-5'>
                    <div className='d-flex justify-content-end'>
                        <p className='std-font2 m-1' style={{ paddingRight: "10px" }}>Subtotal</p>
                        <p className='std-fontSmall m-1 std-font1' style={{ paddingTop: "10px" }}>INR</p>
                        <p className='std-boldFont m-1 std-font2'>{subtotal}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CartCard;