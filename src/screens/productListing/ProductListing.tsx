import React from 'react'
import CardContainerHorizontal from '../../components/cardContainer/CardContainerHorizontal'
import SidebarFilter from '../../components/filter/SidebarFilter'

const ProductListing = () => {
  return (
    <div className='std-bg'>
      <div className='d-flex'>
        <SidebarFilter />
        <div className='container'>
          <CardContainerHorizontal />
          <CardContainerHorizontal />
        </div>
      </div>
    </div>
  )
}

export default ProductListing