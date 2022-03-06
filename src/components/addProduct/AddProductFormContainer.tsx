import React from 'react'
import ProductGeneral from './forms/ProductGeneral'
import ProductHighlights from './forms/ProductHighlights'
import TechnicalDetails from './forms/TechnicalDetails'

const AddProductFormContainer = () => {
  return (
    <div className='std-card m-2'>
        <p className='std-font2'>ADD PRODUCT</p>
        <div className='std-section'></div>
        <div className='row'>
            <div className='col'>
                <ProductGeneral/>
                <ProductHighlights/>
                <TechnicalDetails/>
            </div>
            <div className='col'>
                {/* Images and availble sizes */}
            </div>
        </div>
    </div>
  )
}

export default AddProductFormContainer