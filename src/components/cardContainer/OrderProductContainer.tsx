import axios from 'axios';
import React, { useEffect, useState } from 'react'
import ProductCardHorizontalMini from '../cards/productCards/ProductCardHorizontalMini'

const OrderProductContainer = (props: any) => {

    console.log(props)

    const baseUrlForOrderDetails = "http://localhost:9000/api/order/get"
    const baseUrlForTransactionDetails = "http://localhost:9000/api/transaction/get"
    let auth = JSON.parse(sessionStorage.getItem("user") || "{}");

    const [currOrder, setCurrOrder] = useState<any>(null)
    const [transaction, setTransaction] = useState<any>(null)

    useEffect(() => {

        let url = `${baseUrlForOrderDetails}/${props.order.tracking_id}`

        axios.post(`${baseUrlForOrderDetails}/${props.order.tracking_id}`, {
            userid: auth.userid
        }).then(res => {
            // console.log(res.data.OrderDetail.product_selected)
            setCurrOrder(res.data.OrderDetail)
            axios.post(`${baseUrlForTransactionDetails}/${props.order.transaction_id}`, {
                userid: auth.userid
            }).then(res => {
                setTransaction(res.data.TransactionByTransactionId.transactions)
            }).catch(err => {
                throw err
            })
        }).catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(()=>{
        console.log(currOrder)
    },[currOrder])

    return (
        <div>
            {
                currOrder != null ? <div className='position-relative m-1 std-card'>
                    <div className='row'>
                        <div className='col-6'>
                            <p className='std-boldFont m-0'>Order-ID: </p>
                            <p className='text-primary'>{props.order.tracking_id}</p>
                        </div>
                        <div className='col-6'>
                            <p className='std-boldFont m-0'>Transaction-ID: </p>
                            <p className='text-primary'>{props.order.transaction_id}</p>
                        </div>
                        <div className='col-3'>
                            <p className='std-boldFont m-0'>Delivery Date: </p>
                            <p className='std-boldFont'>{currOrder.delivery.expected_date}</p>
                        </div>
                        <div className='col-3'>
                            <p className='std-boldFont m-0'>Amount Paid: </p>
                            <p className='std-boldFont std-font2 std-redText'>{transaction !== null ? transaction.amount : ""} INR</p>
                        </div>
                        <div className='col-3'>
                            <p className='std-boldFont m-0'>Payment Mode: </p>
                            <p className='std-boldFont text-primary'>{transaction !== null ? transaction.payment_mode.toUpperCase() : ""}</p>
                        </div>
                        <div className='col-3'>
                            <p className='std-boldFont m-0'>Status: </p>
                            <p className='std-greenText std-boldFont'>{currOrder.details.status.toUpperCase()}</p>
                        </div>
                    </div>
                    <div className='std-section'></div>
                    <ul className='std-ul'>
                        {
                            currOrder.product_selected.length>0 ? currOrder.product_selected.map((product: any, index: number) => {
                                    let productObject={}
                                    console.log(product)
                                
                                return <li key={index}>
                                    <ProductCardHorizontalMini key={index} index={index} product={product} />
                                </li>
                            }) : <>Nothing to show yet</>
                        }
                    </ul>
                </div> : <></>
            }
        </div>
    )
}

export default OrderProductContainer