import React from 'react';
import ProductCart from '../../productCart/productCart';

const Cart = (props) => {
    const { carts} = props;
    
    return (
        <div>

          {carts.map((item)=> (
              <ProductCart key={item.id}
              item={item}></ProductCart>
          ))}  
        </div>
    );
};

export default Cart;