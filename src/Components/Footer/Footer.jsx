import React from 'react'
import './Footer.css'
import footer_logo from '../Assests/Lowgooo.png'
import instagram_icon from '../Assests/instagram_icon.png'
import pintester_icon from '../Assests/pintester_icon.png'
import whatsapp_icon from '../Assests/whatsapp_icon.png'
const Footer = () => {
  return (
    <div className='footer'>
      <div className='footer-logo'>
        <img src={footer_logo} alt='' height="100"/>
        <p>𝕿𝖎𝖒𝖊𝕾𝖍𝖊𝖗𝖎𝖋𝖋</p>
      </div>
      <ul className='footer-links'>
        <li>Company</li>
        <li>Products</li>
        <li>Offices</li>
        <li>About</li>
        <li>Contact</li>
      </ul>
      <div className='footer-social-icon'>
        <div className='footer-icon-container'>
            <img src={instagram_icon} alt=''/>
        </div>
        <div className='footer-icon-container'>
            <img src={pintester_icon} alt=''/>
        </div>
        <div className='footer-icon-container'>
            <img src={whatsapp_icon} alt=''/>
        </div>
      </div>
      <div className='footer-copyright'>
        <hr/>
        <p>Copyright @ 2024 - All Right Reserved</p>

      </div>

    </div>
  )
}

export default Footer
