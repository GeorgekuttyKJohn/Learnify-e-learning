import React, { useContext } from 'react'
import './CartItem.css'
import { ShopContext } from '../../Context/ShopContext'


const CartItem = () => {
    const { getTotalCartAmount, allproduct,cartItems,removeFromCart} =useContext(ShopContext); 



 
  return (
    <div className='cartitem'>
        <h2>Cart Items</h2>
    
{allproduct.map((product) => {
    if (cartItems[product.id] > 0) {
        return (
            <div className='cart-item-main' key={product.id}>
                <div className='cart-item-main-left'>
                    <div className='cart-item-main-img'>
                        <img src={product.image} alt="" className='cart-img' />
                    </div>
                </div>
                <div className='cart-item-main-right'>
                    <h1>{product.name}</h1>
                    <p className='newprice'>₹{product.new_price}</p>
                    <p className='oldprice'>₹{product.old_price}</p>
                    <button className='add-to-cart' onClick={() => { removeFromCart(product.id) }}>
                        Remove
                    </button>
                </div>
            </div>
        )
    }
    return null;
})}
 <div className="cartitem-down">
    <div className="cartitem-total">
        <h1>Cart Total</h1>
        <div>
            <div className="cartitem-total-item">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>

            </div>
            <hr />
            <div className="cartitem-total-item">
                <h3>Total</h3>
                <h3>₹{getTotalCartAmount()}</h3>
            </div>

        </div>
        <button >Proceed to check out</button>
    </div>
 </div>



 




 

       

      
    </div>
  )
}

export default CartItem
