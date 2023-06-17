import { useState, createContext } from "react";

export const ContextCart = createContext({
    cart: [],
    total: 0,
    totalAmount: 0

});





export const CartProvider = ({children}) => {
    const [cart, setCart] = useState ([]);
    const [total, setTotal] = useState(0);
    const [totalAmount, setTotalAmount] = useState(0);

    const addProduct= (item, amount) => {

    const existentProduct = cart.find(prod => prod.item.id === item.id);

    if(!existentProduct) {

        setCart(tot => [...tot, {item,amount}]);
        setTotalAmount( tot => tot + amount);
        setTotal(tot => tot + (item.price * amount));

     } else {

            const updatedCart = cart.map(prod => {
                if(prod.item.id === item.id) {
                    return {...prod, amount: prod.amount + amount };
                } else {
                    return prod;
                
                }
            });
            setCart(updatedCart);
            setTotalAmount( tot => tot + amount);
            setTotal(tot => tot + (item.price * amount));

        }
    }


    const deleteProduct = (id) => {
        const deletedProduct = cart.find(prod => prod.item.id === id);
        const updatedCart = cart.filter(prod => prod.item.id !== id);
        setCart(updatedCart);
        setTotalAmount(tot => tot - deletedProduct.amount);
        setTotal(tot => tot -(deletedProduct.item.price * deletedProduct.amount) );
    }

    const emptyCart = () => {
        setCart([]);
        setTotalAmount(0);
        setTotal(0);

    }

    return  (
        <ContextCart.Provider value={{ cart, addProduct, deleteProduct, emptyCart, total, totalAmount }}>
            {children}
        </ContextCart.Provider>
    )
    
}