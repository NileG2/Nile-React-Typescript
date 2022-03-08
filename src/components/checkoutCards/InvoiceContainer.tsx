import React from 'react'

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
    </div>
}


const OrderDetails = (props: any) => {

    function getTotal() {
        let total = 0
        props.orderProductDetails.orderedProducts.map((product: any, index: number) => {
            total += product.payable_amount
        })
        return total.toFixed(2)
    }

    return <div className='std-box p-3'>
        <p className='std-boldFont std-font2'>Product Details</p>
        <ul className='std-ul'>
            {
                props.orderProductDetails.orderedProducts.map((product: any, index: number) => {
                    return <li key={index} className='m-2'>
                        <div className='row'>
                            <div className='col'>
                                <p className='std-boldFont m-0'>{index + 1}. {product.product_name}</p>
                                <p className='std-font1 m-0'>Product Id: {product.product_id}</p>
                                <p className='std-font1 m-0'>Quantity: {product.product_quantity}</p>
                            </div>
                            <div className='col'>
                                <p className='text-end std-font1 m-0'>Price</p>
                                <p className='text-end std-boldFont std-font1 m-0'>{product.payable_amount.toFixed(2)} INR</p>
                            </div>
                        </div>
                    </li>
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
    </div>
}

const AddressDetails = (props: any) => {
    return <div className='m-2'>
        <p className='m-0'>Name: {props.address.name}</p>
        <p className='m-0'>email: {props.address.email}</p>
        <p className='m-0'>phone: {props.address.contact}</p>
        <p className='m-0'>Address: {props.address.addressLine1}</p>
        <p className='m-0'>{props.address.addressLine2}</p>
        <p className='m-0'>{props.address.city} ,{props.address.state} ,{props.address.country}</p>
        <p className='m-0'>{"Pincode:" + props.address.pincode}</p>
    </div>
}

const TransactionDetails = (props: any) => {

    function getTotal() {
        let total = props.transaction.cart_total + props.transaction.delivery - props.transaction.coupon_discount
        return total.toFixed(2)
    }

    return <div className='std-box p-3'>
        <p className='std-boldFont std-font2'>Transaction Details</p>
        <div className='row m-2'>
            <div className='col'>
                <p className='std-font1 m-0 std-boldFont'>Payment Details</p>
                <div className='m-2'>
                    <p className='text-start std-font1 m-0'>Transaction Id: {props.transaction.transaction_id}</p>
                    <p className='text-start std-font1 m-0'>Transaction Date and Time: {props.transaction.transaction_date} {props.transaction.transaction_time}</p>
                    <p className='text-start std-font1 m-0'>Payment Mode: {props.transaction.transaction_mode}/ last 4 digits: {props.transaction.last_four}</p>
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
    </div>
}

const InvoiceContainer = (props: any) => {

    const deliveryAddress = {
        type: "Delivery Address",
        name: "Aditya Dawadikar",
        email: "adityadawadikar2000@gmail.com",
        contact: "9850221407",
        addressLine1: "201-A, Uday glorious park",
        addressLine2: "Gurdwara colony, Akurdi",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        pincode: "411033"
    }
    const billingAddress = {
        type: "Billing Address",
        name: "Aditya Dawadikar",
        email: "adityadawadikar2000@gmail.com",
        contact: "9850221407",
        addressLine1: "201-A, Uday glorious park",
        addressLine2: "Gurdwara colony, Akurdi",
        city: "Pune",
        state: "Maharashtra",
        country: "India",
        pincode: "411033"
    }

    const OrderProductDetails = {
        orderedProducts: [
            {
                product_id: "abfl3wlifl2ufqwivg",
                product_name: "fbiqlbo2ngo",
                product_quantity: 2,
                payable_amount: 1299,
            }, {
                product_id: "wqf2l2ufqwivg",
                product_name: "fg32qf2go",
                product_quantity: 1,
                payable_amount: 599,
            }, {
                product_id: "w3g2o2g3gl2ufqwivg",
                product_name: "h23g2fqo2",
                product_quantity: 1,
                payable_amount: 128.50,
            }
        ]
    }

    const transaction = {
        transaction_id: "bfbifq2wcbwib",
        transaction_mode: "UPI",
        last_four: "2456",
        cart_total: 1029,
        coupon_discount: -150,
        delivery: 80,
        transaction_date: "12/2/2022",
        transaction_time: "12:00:78 PM"
    }

    const invoice={
        order_id: "qnof2oh2gqjpg2vg2",
        order_date: "12/2/2022",
        order_time: "12:00:78 PM"
    }

    return (
        <div className='container'>
            <InvoiceHeader invoice={invoice}/>
            <OrderDetails orderProductDetails={OrderProductDetails} />
            <div className='std-box p-3'>
                <div className='row'>
                    <div className='col'>
                        <p className='std-font2 m-0 std-boldFont'>Billing Address</p>
                        <AddressDetails address={billingAddress} />
                    </div>
                    <div className='col'>
                        <p className='std-font2 std-boldFont'>Shipping Address</p>
                        <AddressDetails address={deliveryAddress} />
                    </div>
                </div>

            </div>
            <TransactionDetails transaction={transaction} />
            <br/><br/>
        </div>
    )
}

export default InvoiceContainer