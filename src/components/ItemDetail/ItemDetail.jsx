import './ItemDetail.css'
import ProductButton from '../ProductButton/ProductButton'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { ContextCart } from '../../context/ContextCart';
import { useContext } from 'react';



const ItemDetail = ({ id, name, price, img, stock, desc }) => {

  
  const [agregaramount, setAddAmount] = useState(0);

  const {addProduct} = useContext(ContextCart);

  const amountHandler = (amount) => {
    setAddAmount(amount);

  const item = {id,name, price};
  addProduct(item, amount);

  }

  return (
    <div className='contenedorItem'>
      <h2>{name} </h2>
      <img src={img} alt={name} />
      <h3>PRICE: ${price} </h3>
      <h3>ID: {id} </h3>
      <h3>DESCRIPTION: {desc}</h3>
     
      {
        agregaramount > 0 ? (<Link to="/" className="button-link"> KEEP BUYING! </Link>) : (<ProductButton inicial={1} stock={stock} funcionAgregar={amountHandler} />)
      }
    </div>
  )
}

export default ItemDetail