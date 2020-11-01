import React from 'react';
import CartItem from './CartItem'

const CartList = ({value}) => {
    const {cart} = value
    console.log(value, cart)
    return (
        <div className='container-fluid'>
            {cart.map(item=>{
                return <CartItem key={item.id} value={value} item={item}/>
            })}         
        </div> 
    );
}

export default CartList;
