import React from "react";
import OrderListCard from '../../../../components/cart/Orders'

const MyOrders = () => {
  return <div className='std-bg'>
    <div className='row m-1'>
      <div className='col-9'>
        <OrderListCard />
      </div>
    </div>
  </div>
};

export default MyOrders;
