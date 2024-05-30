import React from 'react'
import './Offers.css'
import exclusive_image from '../Assests/tyty.png'
const Offers = () => {
  return (
    <div className='offers'>
      <div className='offers-left'>
        <h1>𝐄𝐱𝐜𝐥𝐮𝐬𝐢𝐯𝐞</h1>
        <h1>𝐎𝐟𝐟𝐞𝐫 𝐅𝐨𝐫 𝐘𝐨𝐮</h1>
        <p>𝐎𝐍𝐋𝐘 𝐎𝐍 𝐁𝐄𝐒𝐓 𝐒𝐄𝐋𝐋𝐄𝐑𝐒 𝐏𝐑𝐎𝐃𝐔𝐂𝐓𝐒</p>
        <button>𝐂𝐡𝐞𝐜𝐤 𝐍𝐨𝐰</button>
      </div>
      <div className='offers-right'>
            <img src={exclusive_image} alt=""/>
      </div>
    </div>
  )
}

export default Offers
