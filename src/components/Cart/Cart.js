import React from 'react';
import './Cart.css'
const Cart = (props) => {
    const cart = props.cart
    let total = 0;
    for(let i=0; i<cart.length; i++){
        const product = cart[i];
        total = total + product.price;
    }
    //ai total ta k amra array reduce hisebe ber korte pari same kaj korbe
   // const totalPrice = cart.reduce((total,prd)=> total+prd.price, 0)

   let shipping = 0;
   if(total > 35){
    shipping = 0;
   }else if (total > 15){
    shipping = 4.90;
   }else if(total > 0){
    shipping = 12.99;
   }

   const tex = (total/10).toFixed(2)
    return (
        <div>
            <h4>Order Summary </h4>
            <p>Items Orders: {cart.length}</p>
            <p>Product Price: {total.toFixed(2)}</p>
            <p><small>Shipping Cost: {shipping}</small></p>
            <p>Tax + Vat: {tex}</p>
            <p>Price: {(total + shipping + Number(tex)).toFixed(2)}</p>
           
        </div>
    );
};

export default Cart;