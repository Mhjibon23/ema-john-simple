import React, { useState } from 'react';
import fakeData from '../../fakeData';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
const Shop = () => {
    const first10 = fakeData.slice(0, 10);
   const [products, setProducts] = useState(first10)
   const [cart, setCart] = useState([]);

//    niche handleProductAdd(pd) perameter use korlam, then call korte somoy argument hisebe (props.produts) k pass korar jonno

   const handleProductAdd = (pd) =>{ 
    setCart([...cart, pd]) //akhane ...cart diye first cart er element k spread kore nilam, then pd mane argument hisebe (props.product) jacce, so (props.product) joto bar click kora hobe, tar value 1 kore barbe
   }
   
    return (
        <div className='shop_container'>
            <div className="product_container">
                    {
                        products.map(pd => <Product product = {pd} handleProductAdd={handleProductAdd}></Product>)
                    }
            </div>
            <div className="cart_container">
               <Cart cart = {cart}></Cart>
            </div>
           
        </div>
    );
};


export default Shop;