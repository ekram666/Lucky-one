import React from 'react';

const ProductCart = (props) => {
    const {name, img, price} = props.item;
    return (
        <div>
            <img src={img} width="90px" alt="" />
            <h5>Name: {name}</h5>
            <h6>price: {price}</h6>
            <button>Remove</button>
        </div>
    );
};

export default ProductCart;