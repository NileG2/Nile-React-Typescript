import React, { useEffect, useState } from 'react'
import OrderProductContainer from '../cardContainer/OrderProductContainer'
import { useSelector } from 'react-redux'
import axios from 'axios'

const Orders = () => {

    const ordersFromStore = useSelector((state: any) => state.orders.orders)

    const baseUrlForUserOrders ="http://localhost:9000/api/orders/"
    let auth = JSON.parse(sessionStorage.getItem("user") || "{}");

    const [userOrders,setUserOrders] = useState([])

    useEffect(()=>{
        axios.post(`${baseUrlForUserOrders}`,{
            userid:auth.userid
        }).then(res=>{
            setUserOrders(res.data.status.orders)
            console.log(res.data.status.orders)
        }).catch(err=>{
            console.log(err)
        })
    },[])

    return (
        <div className='std-card'>
            <p className='p-2 m-0 text-left std-font2'>Orders list</p>
            <div className='std-section'></div>
            {
                userOrders.length>0?userOrders.map((order: any, index: number) => {
                    return <OrderProductContainer key={index} order={order} />
                }):<>Nothing to show yet</>
            }
        </div>
    )
}

export default Orders