
const addLocal = (Product) => {
    let cart = [];
    let temp = 0;

    const storedCart = localStorage.getItem("cart");
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    for(const items of cart){
        if(items.id === Product.id){
            temp = 1;
            break;
        }
    }
    if(temp === 0){
        cart.push(Product);
    }
    localStorage.setItem("cart", JSON.stringify(cart));

    return cart;
};



const getLocal = () => {
    let cart = [];
    const storedCart = localStorage.getItem("cart");
    if(storedCart){
        cart = JSON.parse(storedCart);
    }
    return cart;
};

export {addLocal, getLocal};