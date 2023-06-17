import { useContext } from 'react';
import { ContextCart } from '../../context/ContextCart';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const {totalAmount} = useContext(ContextCart);

    const cartLogo = "https://cdn-icons-png.flaticon.com/512/107/107831.png";

  return (
    <div>
        <Link to='/cart'>
        <img className='cartLogo' src={cartLogo} alt="cart"></img>
        {
          totalAmount > 0 && <span> {totalAmount} </span>
        }
        </Link>
    </div>
  )
}

export default CartWidget