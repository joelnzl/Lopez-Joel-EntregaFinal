
import { Link } from "react-router-dom"
import './Item.css'


const Item = ({id, name, price, img}) => {
  return (
    <div className='product-card'>
        <img className='product-image' src={img} alt={name} />
        <h3> NAME: {name} </h3>
        <h3> PRICE: ${price} </h3>
        <p> ID: {id} </p>
        <Link to={`/item/${id}` } className="button-link"> DETAILS </Link>
    </div>
  )
}

export default Item