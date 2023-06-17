import React from 'react'
import { useState, useContext } from 'react';
import { ContextCart } from '../../context/ContextCart';
import { db } from '../../service/config';
import {collection, addDoc} from 'firebase/firestore';
import './Checkout.css'


const Checkout = () => {
    const {cart, emptyCart, total} = useContext(ContextCart)
    const [name, setName] = useState ("");
    const [lastName, setlastName] = useState ("");
    const [email, setEmail] = useState ("");
    const [phone, setPhone] = useState("");
    const [emailConfirmation, setemailConfirmation] = useState ("");
    const [error, setError] = useState ("");
    const [orderId, setOrderId] = useState ("");

    
     const formHandler = (event) => {
        event.preventDefault();

        
        if(!name || !lastName|| !phone || !email || !emailConfirmation) {
            setError("PLEASE FILL ALL THE FIELDS"); 
            return;
        }

        
        if(email !== emailConfirmation) {
            setError("MAIL FIELDS DO NOT MATCH");
            return;
        }

        

        const order = {
            items: cart.map((product) => ({
              id: product.item.id,
              name: product.item.name,
              amount: product.amount
            })),
            total: cart.reduce(
              (total, product) => total + product.item.price * product.amount,
              0
            ),
            name,
            lastName,
            phone,
            email
            
          };
          console.log(order);
        
        addDoc(collection(db, "orders"), order)
            .then(docRef => {
                setOrderId(docRef.id);
                emptyCart();
            })
            .catch(error => {
                console.error("YOUR ORDER COULD NOT BE CREATED", error);
                setError("THERE WAS AN ERROR TRYING TO CREATE YOUR ORDER");
            })


    }

    return(


    <div>
        <h2>CHECKOUT</h2>
        <form onSubmit={ formHandler } className="form">
            {cart.map(product => (
                <div key={product.item.id}>
                    <p>
                        {product.item.name} x {product.amount}
                    </p>
                    <p> Precio $: {product.item.price} </p>
                    <hr />
                </div>
            ))}

            <p>Total Compra: ${total} </p>
            <hr />

                <div className="form-group">
                    <label htmlFor=""> NAME </label>
                    <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
                </div>
                
                <div className="form-group">
                    <label htmlFor=""> LAST NAME </label>
                    <input type="text" value={lastName} onChange={(e)=>setlastName(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor=""> PHONE NUMBER </label>
                    <input type="text" value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                </div>

                <div className="form-group">
                    <label htmlFor=""> EMAIL </label>
                    <input type="email" value={email} onChange={(e)=> setEmail(e.target.value)} />
                </div>

                <div className="form-group">
                    <label htmlFor=""> EMAIL CONFIRMATION </label>
                    <input type="email" value={emailConfirmation} onChange={(e)=> setemailConfirmation(e.target.value)} />
                </div>

                {error && <p style={{color:"red"}}> {error} </p>}
                <button type="submit" className="button"> PURCHASE </button>
        </form>
        {
            orderId && (
                <strong>THANKS FOR BUYING. HERE IS YOUR ORDER NUMBER {orderId} </strong>
            )
        }
    </div>
  )
}



export default Checkout