import React from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import {StoreContext} from '../../components/context/StoreContext'
const PlaceOrder = () => {
  const {getTotalCartAmount} = useContext(StoreContext)
  return (
    <form className='place-order'>
    <div className="place-order-left">
       <p className='place-order-title'>Delivery Information</p>
       <div className="multi-fields">
        <input type="text" placeholder="First Name" />
        <input type="text" placeholder="Last Name" />
       </div>
       <input type='email' placeholder='Email Address' />
       <input type="text" placeholder="Street " />
       <div className="multi-fields">
        <input type="text" placeholder="city" />
        <input type="text" placeholder="state" />
       </div>
       <div className="multi-fields">
        <input type="text" placeholder="zip-code" />
        <input type="text" placeholder="country" />
       </div>
       <input type="phone" placeholder="phone" />
    </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Totals</h2>
          <div>
            <div className="cart-total-details">
            <p>SubTotal</p>
            <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Deleivery Fee</p>
              <p>${getTotalCartAmount() === 0 ?"0": "2"}</p>
            </div>
            <hr />
            <div className="cart-total-details">
                 <p>Total</p>
                 <b>${getTotalCartAmount() === 0 ?"0":getTotalCartAmount()+2}</b>
            </div>
          </div>
            <button>PROCEED TO PAYMENT</button>
        </div>
      </div>
    </form>
  )
}

export default PlaceOrder;
