import { useContext } from "react"
import { ContextCart } from "../../context/ContextCart"

const CartItems = ({item, amount}) => {
    const {deleteProduct} = useContext(ContextCart)
  return (
    <div>
    <h4> {item.name} </h4>
    <p>Amount: {amount}</p>
    <p>Price: {item.price} </p>
    <button onClick= {()=> deleteProduct(item.id)} className="button-link"> DELETE </button>

    </div>
  )
}

export default CartItems