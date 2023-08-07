import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    const { img, name, seller, price, stock } = props.product;
    return (
        <div className='product'>
            <div className='product_image'>
                <img src={img} alt="" />
            </div>
            <div className='product_content'>
                <h4 className='product_name'>{name}</h4>
                <br />
                <p><small>by: {seller}</small></p>
                <p>$ {price}</p>
                <p>only {stock} left in stock - order soon</p>
                <button className='cart-btn' onClick={()=>{props.handleProductAdd(props.product)}}> 
                    <FontAwesomeIcon icon={faCartShopping} /> Add to cart</button>
            </div>

        </div>
    );
};

export default Product;

/* very important note here
20 number line e amra onClick={props.handleProductAdd(props.product)} akhane handleProductAdd() function e 
(props.product) mane data k argument hisebe pass korteci, er age amra handleProductAdd(pd) avabe just pd k 
peremeter hisebe diyecilam, sei perameter er arguments hisebe data k pacci, akhon jokhon e amra (props.product)
data k arguments hisebe pass korci, tokhon e kintu handleProductAdd() function ta k avabe handleProductAdd() auto call
kora hoye jacce, jodi auto call kora hoye jai, tahole kintu click korar agei sob data show kore fele, toh ata 
bondo korar jonno amra onClick={} er vitor arekta empty funcion/arrow function use kore then amra
{props.handleProductAdd(props.product)} ata k use korbo, {()=>{props.handleProductAdd(props.product)}} 
avabe likhe dibo, tahole r auto call hobena, jokhon kono btn e click korbo tokhon e data golo k call korbe **/

