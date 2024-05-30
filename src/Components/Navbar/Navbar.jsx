import React,{ useContext, useState,useRef} from 'react'
import './Navbar.css'
import logo from'../Assests/Lowgooo.png'
import cart_icon from'../Assests/cart_icon.png'
import { Link } from 'react-router-dom'
import { BrandsContext } from '../../Context/BrandsContext'
import nav_dropdown from '../Assests/nav_dropdown.png'
const Navbar = () => {
  const {getTotalCartItems } = useContext(BrandsContext);

  const [menu,setMenu] = useState("Brand");
  const menuRef = useRef();

  const dropdown_toggle =(e)=>{
      menuRef.current.classList.toggle('nav-menu-visible');
      e.target.classList.toggle('open');
  }

  return (
    <div className='navbar'>
        <div className='nav-logo'>
            <img width="80px"  src={logo} alt=""/ >
            <p>𝕿𝖎𝖒𝖊𝕾𝖍𝖊𝖗𝖎𝖋𝖋</p>
        </div>
        <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt=""/> 
        <ul ref={menuRef} className="nav-menu">
          <li onClick={()=>{setMenu("Brand")}}><Link style={{textDecoration:'none'}} to='/'>Brands</Link> {menu==="Brand"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("smart watch")}}><Link style={{textDecoration:'none'}} to='/smart watch'>Analog</Link> {menu==="smart watch"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("analog")}}><Link style={{textDecoration:'none'}} to='/analog'>Smart Watch</Link> {menu==="analog"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("showroom")}}><Link style={{textDecoration:'none'}} to='/showroom'>Showroom</Link> {menu==="showroom"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("watch guide")}}><Link style={{textDecoration:'none'}} to ='watch guide'>Watch Guide</Link> {menu==="watch guide"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
          <Link to='/login'><button>Login</button></Link>
          <Link to='/cart'><img src={cart_icon} alt=""/></Link>
          <div className="nav-cart-count">{getTotalCartItems()}</div>
        </div>
    </div>
  )
}

export default Navbar

