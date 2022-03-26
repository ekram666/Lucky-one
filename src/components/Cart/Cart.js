import React from 'react';
import ProductCart from '../../productCart/productCart';
import RandomCart from '../randomCart/RandomCart';
import { getLocal } from '../utilities/utilities';


const Cart = (props) => {
    const { carts, Remove, RandomGenerate, random, blankCart} = props;
    const storedCart = getLocal();
    console.log(blankCart);
    return (
        <div className="text-center">

            <h3>Random Element</h3>
            <button onClick={()=> RandomGenerate(storedCart)}>Random</button>
            
            <RandomCart random={random}></RandomCart>

            <button onClick={() => blankCart()}>Delete</button>

          {carts.map((item)=> (
              <ProductCart key={item.id}
              item={item} Remove={Remove} ></ProductCart>
          )) }
        </div>
    );
};

export default Cart;