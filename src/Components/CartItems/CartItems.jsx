import React, { useContext } from 'react'
import './CartItems.css'
import remove_icon from '../Assests/cart_cross_icon.png'
import { BrandsContext } from '../../Context/BrandsContext'
const CartItems = () => {
    const {getTotalCartAmount,all_product,cartItems,removeFromCart} = useContext(BrandsContext);

  return (
    <div className='cartitems'>
      <div className='cartitems-format-main'>
        <p>Products</p>
        <p>Title</p>
        <p>Price</p>
        <p>Quantity</p>
        <p>Total</p>
        <p>Remove</p>
      </div>
      <hr/>
      {all_product.map((e) => {
    if (cartItems[e.id] > 0) {
        return (
            <div key={e.id}>
                <div className='cart-item-format cartitems-format-main'>
                    <img src={e.image} alt="" className='carticon-product'/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className='cart-item-quantity'>{cartItems[e.id]}</button>
                    <p>${e.new_price * cartItems[e.id]}</p>
                    <img className='remove' src={remove_icon} onClick={() => removeFromCart(e.id)} alt="" />
                </div>
                <hr/>
            </div>
        );
    }
    return null;
})}
    <div className='cart-down'>
        <div className='cart-total'>
            <h1>Cart Total</h1>
            <div>
                <div className='cartitem-total-item'>
                    <p>Subtotal</p>
                    <p>${getTotalCartAmount()}</p>

                </div>
                <hr/>
                <div className='cartitem-total-item'>
                    <p>Shipping Fee</p>
                    <p>Free</p>
                </div>
                <hr/>
                <div className='cartitem-total-item'>
                    <h3>Total</h3>
                    <h3>${getTotalCartAmount()}</h3>
                </div>
            </div>
            <button>Proceed To CheckOut</button>
        </div>
        <div className='promo'>
            <p>If You Have A promo Code ,Enter It Here</p>
            <div className='promo-box'>
                <input type="text" placeholder='Promo Code'/>
                <button>Submit</button>
            </div>
        </div>
    </div>

    </div>
  )
}

export default CartItems
