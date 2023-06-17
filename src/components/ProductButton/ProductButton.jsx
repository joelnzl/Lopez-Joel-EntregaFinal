import React from 'react'
import { useState } from 'react'
import './ProductButton.css';

const ProductButton = ({inicial, stock, funcionAgregar}) => {
    const [contador, setContador] = useState(inicial);
    
    const incrementar = () => {
        if(contador < stock) {
            setContador(contador + 1);
        }
    }

    const decrementar = () => {
        if(contador > inicial){
            setContador(contador - 1);
        }
    }

  return (
    <>
    <div>
      <button className="button-link" onClick={decrementar}>-</button>
      <span>{contador}</span>
      <button className="button-link" onClick={incrementar}>+</button>
    </div>
    <button className="button-link" onClick={() => funcionAgregar(contador)}>ADD TO THE CART</button>
  </>
  )
}



export default ProductButton
