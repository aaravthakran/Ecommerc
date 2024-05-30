import React, { useContext } from 'react'
import './ProductDisplay.css'
import star_icon from '../Assests/star_icon.png'
import star_dull_icon from '../Assests/star_dull_icon.png'
import xc1 from '../Assests/xc1.png'
import xc2 from '../Assests/xc2.png'
import xc3 from '../Assests/xc3.png'
import xc4 from '../Assests/xc4.png'
import { BrandsContext } from '../../Context/BrandsContext'
const ProductDisplay = (props) => {
    const {product} = props;
    const {addToCart} = useContext(BrandsContext);
      return (
    <div className='productdisplay'>
        <div className='productdisplay-left'>
            <div className='productdisplay-img'>
                <img className='productdisplay-main-img' src={product.image} alt=""/>
            </div>
        </div>
        <div className='productdisplay-right'>
           <h1>{product.name}</h1>
           <div className='productdisplay-right-star'>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_icon} alt=""/>
                <img src={star_dull_icon} alt=""/>
                <p>(122)</p>
           </div>
           <div className='productdisplya-right-prices'>
                <div className='productdisplya-right-price-old'>${product.old_price}</div>
                <div className='productdisplya-right-price-new'>${product.new_price}</div>
           </div>
           <button onClick={()=>{addToCart(product.id)}}>ADD TO CART</button>
           <p className='categoo'> <span> <img src={xc1} alt="" width="20" height="20"/> 100% secure and safe transaction</span> </p>
           <p className='categoo'> <span> <img src={xc2} alt="" width="20" height="20"/> 100% genuine products </span> </p>
           <p className='categoo'> <span> <img src={xc3} alt="" width="20" height="20"/> Authorised dealers</span> </p>
           <p className='categoo'> <span> <img src={xc4} alt="" width="20" height="20"/> Leaders in watch retail since 1948</span> </p>
           
        </div>
    </div>
  )
}

export default ProductDisplay
