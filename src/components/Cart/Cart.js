import React from 'react';
import ProductCart from '../../productCart/productCart';
import RandomCart from '../randomCart/RandomCart';
import { getLocal } from '../utilities/utilities';
import './Cart.css';


const Cart = (props) => {
    const { carts, Remove, RandomGenerate, random, blankCart} = props;
    const storedCart = getLocal();
    console.log(blankCart);
    return (
        <div className="div-color text-center">

            
            <div className='mt-3'>
            <button className='border-0 rounded-2 btn-color mt-2' onClick={()=> RandomGenerate(storedCart)}>Choose Randomly</button>
            <br /><br />
            
            <RandomCart random={random}></RandomCart>
            
            <button className='border-0 rounded-2 btn-color' onClick={() => blankCart()}>All Delete</button> <br/><br/>

          {carts.map((item)=> (
              <ProductCart key={item.id}
              item={item} Remove={Remove} ></ProductCart>
          )) }
            </div>
        </div>
    );
};

export default Cart;