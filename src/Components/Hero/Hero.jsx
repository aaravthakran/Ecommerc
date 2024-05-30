import React from 'react'
import './Hero.css'
import arrow_icon from '../Assests/arrow.png'
import hero_img from '../Assests/aastik.png'
const Hero = () => {
  return (
    <div className='hero'>
        <div className='hero-left'>
            <h2>𝐍𝐄𝐖 𝐀𝐑𝐑𝐈𝐕𝐀𝐋𝐒 𝐎𝐍𝐋𝐘</h2>
            <div>
                <div>
                    <p>𝐍𝐄𝐖</p>
                </div>
                <p>𝐂𝐎𝐋𝐋𝐄𝐂𝐓𝐈𝐎𝐍</p>
                <p>𝐅𝐎𝐑 𝐄𝐕𝐄𝐑𝐘𝐎𝐍𝐄</p>
            </div>
            <div className='hero-latest-button'>
                <div>𝐋𝐚𝐭𝐞𝐬𝐭 𝐂𝐨𝐥𝐥𝐞𝐜𝐭𝐢𝐨𝐧</div>
                <img src= {arrow_icon} alt=''/>
            </div>
        </div>
        <div className='hero-right'>
            <img src={hero_img} alt=""/>
        </div>
    </div>
  )
}

export default Hero
