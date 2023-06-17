import React from 'react'
import { ContextCart } from '../../context/ContextCart'
import { useContext } from 'react'
import { Link } from 'react-router-dom'
import CartItems from '../CartItems/CartItems'





const Cart = () => {
    const {cart, emptyCart, total, totalAmount} = useContext(ContextCart);
    if(totalAmount === 0) {
        return (
            <>
            <h2>THERE ARE NO PRODUCTS ON YOUR CART. COME ON, BUY SOMETHING!</h2>
            <Link to='/'> SEE PRODUCTS </Link>
            </>
        )

    }
    
    return (
        <div>
        {cart.map(product => <CartItems key={product.id} {...product} />)}
        <h3>TOTAL PRICE: ${total}</h3>
        <h3>Total AMOUNT: {totalAmount}</h3>
        <button onClick={() => emptyCart()} className="button-link">EMPTY CART</button>
        <Link to='/checkout' className="button-link">END PURCHASE</Link>
        </div>
    )

}

export default Cart