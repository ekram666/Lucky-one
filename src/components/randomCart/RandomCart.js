import React from 'react';

const RandomCart = (props) => {
    if (props.random[0] !== undefined) {
        const { name, img, price } = props.random[0];
        return (
            <div>
                <img src={img} width="150px" alt="" />
                <h5>Name: {name}</h5>
                <h5>Price: ${price}</h5>
            </div>
        );
    }
    else {
        return <div></div>;

    }

};

export default RandomCart;