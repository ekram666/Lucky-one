import React from 'react';

const ProductCart = (props) => {
    const {name, img, price} = props.item;
    const {Remove} = props;
    return (
        <div className=' ' >
            <img src={img} width="90px" alt="" />
            <h5>Name: {name}</h5>
            <h6>price: ${price}</h6>
            <button onClick={()=> Remove(props.item)}>Remove</button>
            <br /> <br />
        </div>
    );
};

export default ProductCart;