import React from 'react'
import OrderProductContainer from '../cardContainer/OrderProductContainer'
import { useSelector} from 'react-redux'

const Orders = () => {
    
    const ordersFromStore = useSelector((state: any) => state.orders.orders)
    console.log(ordersFromStore)

    return (
        <div className='std-card'>
            <p className='p-2 m-0 text-left std-font2'>Orders list</p>
            <div className='std-section'></div>
            {
                ordersFromStore.map((order:any,index:number)=>{
                    return <OrderProductContainer key={index} orders={order} />
                })
            }
        </div>
    )
}

export default Orders