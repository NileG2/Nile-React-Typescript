import axios from "axios";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";

const InvoiceHeader = (props: any) => {
    return <div className='position-relative'>
        <img className='m-2' src="assets/logoBlack.png" style={{position:"absolute",top:"0",width:"100px",left:"0"}}></img>
        <br/><br/>
        <div className='std-header text-center'>INVOICE</div>
        <div>
            <div className='row'>
                <div className='col'>
                    <div className='d-flex'>
                        <p className='std-boldFont m-0'>Order Id: </p>
                        <p className='std-font1 m-0 mx-2'>{props.invoice.order_id}</p>
                    </div>
                    <div className='d-flex'>
                        <p className='std-boldFont m-0'>Order Date: </p>
                        <p className='std-font1 m-0 mx-2'>{props.invoice.order_date} {props.invoice.order_time}</p>
                    </div>
                </div>
                <div className='col'>
                </div>
            </div>
        </div>
    </div>;
};


const OrderDetails = (props: any) => {

    function getTotal() {
        let total = 0;
        props.cartProducts.map((product: any, index: number) => {
            total += product.price*product.quantity;
        });
        return total.toFixed(2);
    }

    return <div className='std-box p-3'>
        <p className='std-boldFont std-font2'>Product Details</p>
        <ul className='std-ul'>
            {
                props.cartProducts.map((product: any, index: number) => {
                    return <li key={index} className='m-2'>
                        <div className='row'>
                            <div className='col'>
                                <p className='std-boldFont m-0'>{index + 1}. {product.product_name}</p>
                                <p className='std-font1 m-0'>Product Id: {product.product_id}</p>
                                <p className='std-font1 m-0'>Quantity: {product.quantity}</p>
                            </div>
                            <div className='col'>
                                <p className='text-end std-font1 m-0'>Price</p>
                                <p className='text-end std-boldFont std-font1 m-0'>{(product.price*product.quantity).toFixed(2)} INR</p>
                            </div>
                        </div>
                    </li>;
                })
            }
        </ul>
        <br />
        <div className='std-section'></div>
        <div className='row m-2'>
            <div className='col'></div>
            <div className='col'>
                <p className='text-end std-font1 m-0'>Total Amount</p>
                <p className='text-end std-boldFont std-font1 m-0'>{getTotal()} INR</p>
            </div>
        </div>
    </div>;
};

const AddressDetails = (props: any) => {
    const auth = sessionStorage.getItem("user") || "";
    return <div className='m-2'>
        <p className='m-0'>Name: {JSON.parse(auth).username}</p>
        <p className='m-0'>email: {props.contact.email}</p>
        <p className='m-0'>phone: {props.contact.mobile}</p>
        <p className='m-0'>Address: {props.address.address_line_1},</p>
        <p className='m-0'>{props.address.locality}, {props.address.city}, {props.address.country}</p>
        <p className='m-0'>{"Pincode:" + props.address.pincode}</p>

    </div>;
};

const TransactionDetails = (props: any) => {

    function getTotal() {
        const total = props.transaction.cart_total + props.transaction.delivery - props.transaction.coupon_discount;
        return total.toFixed(2);
    }

    return <div className='std-box p-3'>
        <p className='std-boldFont std-font2'>Transaction Details</p>
        <div className='row m-2'>
            <div className='col'>
                <p className='std-font1 m-0 std-boldFont'>Payment Details</p>
                <div className='m-2'>
                    <p className='text-start std-font1 m-0'>Transaction Id: {props.transaction.transaction_id}</p>
                    <p className='text-start std-font1 m-0'>Transaction Date and Time: {props.transaction.transaction_date} {props.transaction.transaction_time}</p>
                    <p className='text-start std-font1 m-0'>Payment Mode: {props.transaction.transaction_mode}</p>
                </div>

            </div>
            <div className='col'>
                <p className='text-end std-font1 m-0'>Cart Total</p>
                <p className='text-end std-boldFont std-font1 m-0'>{props.transaction.cart_total} INR</p>
                <p className='text-end std-font1 m-0'>Delivery</p>
                <p className='text-end std-boldFont std-font1 m-0'>{props.transaction.delivery} INR</p>
                <p className='text-end std-font1 m-0'>Coupon Discount</p>
                <p className='text-end std-boldFont std-font1 m-0'>{props.transaction.coupon_discount} INR</p>
            </div>
            <div className='std-section'></div>
            <div className='row m-2'>
                <div className='col'></div>
                <div className='col'>
                    <p className='text-end std-font1 m-0'>Total Amount</p>
                    <p className='text-end std-boldFont std-font1 m-0'>{getTotal()} INR</p>
                </div>
            </div>
        </div>
    </div>;
};

const InvoiceContainer = () => {

    const auth = JSON.parse(sessionStorage.getItem("user") || "{}");

    const deliveryAddress = useSelector((state:any)=>state.checkout.deliveryAddress);
    const billingAddress = useSelector((state:any)=>state.checkout.billingAddress);
    const cartProducts = useSelector((state:any)=>state.cart.userCart);

    const [transaction, setTransactions ] = useState({
        transaction_id: "",
        transaction_mode: "",
        cart_total: 0,
        coupon_discount: 0,
        delivery: 0,
        transaction_date: "",
        transaction_time: ""
    }  );

    const [invoice, setInvoice ] = useState({
        order_id: "",
        order_date: "",
        order_time: ""
    });

    const tid = sessionStorage.getItem("tid") || "";
    useEffect(()=>{
        
        axios.post(`http://localhost:9000/api/transaction/get/${JSON.parse(tid).transaction_id}`).then((res)=>{
            
            const transaction = {
                transaction_id: res.data.TransactionByTransactionId.transactions.transaction_id,
                transaction_mode: res.data.TransactionByTransactionId.transactions.payment_mode,
                cart_total: res.data.TransactionByTransactionId.transactions.components.cart_total,
                coupon_discount: res.data.TransactionByTransactionId.transactions.components.coupon_discount,
                delivery: res.data.TransactionByTransactionId.transactions.components.delivery_charge,
                transaction_date: res.data.TransactionByTransactionId.transactions.transaction_date,
                transaction_time: res.data.TransactionByTransactionId.transactions.transaction_time
            };  
            console.log(transaction);
            setTransactions(transaction);

            const invoices={
                order_id: JSON.parse(tid).tracking_id,
                order_date:res.data.TransactionByTransactionId.transactions.transaction_date,
                order_time: res.data.TransactionByTransactionId.transactions.transaction_time
            };
            setInvoice(invoices);

        });
    },[]);





    

    return (
        <div className='std-card p-5 my-5'>
            <InvoiceHeader invoice={invoice}/>
            <OrderDetails cartProducts={cartProducts} />
            <div className='std-box p-3'>
                <div className='row'>
                    <div className='col'>
                        <p className='std-font2 m-0 std-boldFont'>Billing Address</p>
                        <AddressDetails address={billingAddress} contact={auth}/>
                    </div>
                    <div className='col'>
                        <p className='std-font2 std-boldFont'>Shipping Address</p>
                        <AddressDetails address={deliveryAddress} contact={auth} />
                    </div>
                </div>

            </div>
            <TransactionDetails transaction={transaction} />
            <br/><br/>
        </div>
    );
};

export default InvoiceContainer;