import React from 'react'
import CardContainer from '../../components/cardContainer/CardContainer'
import SidebarFilter from '../../components/filter/SidebarFilter'

const ProductListing = () => {
  return (
    <div>
      <div className='d-flex'>
        <SidebarFilter />
        <div className='container'>
          <CardContainer />
          <CardContainer />
        </div>
      </div>
    </div>
  )
}

export default ProductListing