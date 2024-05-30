import React from 'react'
import './Item1.css'
const Item1 = (props) => {
  return (
    <div>
        <div className='item'>
            <img src={props.image} alt=""/>
            <p>{props.name}</p>
            <div className='item-prices'>
                <div className='item-price-new'>
                    {props.new_price}
                </div>
                <div className='item-price-old'>
                    {props.old_price}
                </div>
            </div>
        </div>
      
    </div>
  )
}

export default Item1
