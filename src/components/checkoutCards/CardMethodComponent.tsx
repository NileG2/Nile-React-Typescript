import React from 'react'
import { AiFillDelete } from 'react-icons/ai'

const CardMethodComponent = (props: any) => {
  function getPresentableNumber(number: string) {
    let tokens = number.split('-')
    let dummy = "XXXX-XXXX-XXXX-"
    return dummy + tokens[tokens.length - 1]
  }

  return <div className='std-card std-mode-dimension'>
    <p className='std-boldFont m-0'>{props.card.type}</p>
    <p className='std-boldFont m-0'>{getPresentableNumber(props.card.details.card_number)}</p>
    <p className='m-0'>Expiry: {props.card.details.expiry}</p>
    {
      props.edit === true ? <button className='std-btn  std-btnOrange'>
        <AiFillDelete /> Remove
      </button> : <></>
    }
  </div>
}

export default CardMethodComponent