import React from 'react'
import ProductCardHorizontalMini from '../cards/productCards/ProductCardHorizontalMini'

const OrderProductContainer = (props: any) => {
    console.log(props)
    return (
        <div className='position-relative m-1 std-card'>
            <div className='row'>
                <div className='col'>
                    <p className='std-boldFont m-0'>Order-ID: </p>
                    <p className='text-primary'>{props.orders.order_id}</p>
                </div>
                <div className='col'>
                    <p className='std-boldFont m-0'>Transaction-ID: </p>
                    <p className='text-primary'>{props.orders.transaction_id}</p>
                </div>
                <div className='col'>
                    <p className='std-boldFont m-0'>Delivery Date: </p>
                    <p>{props.orders.delivery_date}</p>
                </div>
                <div className='col'>
                    <p className='std-boldFont m-0'>Amount Paid: </p>
                    <p>{props.orders.amount} INR</p>
                </div>
                <div className='col'>
                    <p className='std-boldFont m-0'>Payment Mode: </p>
                    <p>{props.orders.payment_mode}</p>
                </div>
            </div>
            <div className='std-section'></div>
            <ul className='std-ul'>
                {
                    props.orders.products.length > 0 ? props.orders.products.map((product: any, index: number) => {
                        return <li key={index}>
                            <ProductCardHorizontalMini key={index} index={index} product={product} />
                        </li>
                    }) : <>Nothing to show yet</>
                }
            </ul>
        </div>
    )
}

export default OrderProductContainer