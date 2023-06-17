


import './App.css';
import NavB from './components/NavB/NavB.jsx';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer.jsx';
import Cart from './components/Cart/Cart';
import Checkout from './components/Checkout/Checkout';
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import { CartProvider } from './context/ContextCart';


function App() {
  return (
    
    <div className="App">

      <BrowserRouter>
      <CartProvider>
      <NavB/>  
      <Routes>

      <Route path='/' element={<ItemListContainer/>} />
      <Route path='/category/:idCategory' element= {<ItemListContainer/>} />
      <Route path='/item/:idItem' element= {<ItemDetailContainer/>} />
      <Route path='*' element={(<h2>sit</h2>)} />
      <Route path='/cart' element = {<Cart/>} />
      <Route path='/checkout' element ={<Checkout/>}/>
      </Routes>
      </CartProvider>
      </BrowserRouter>


    
    
    
    
  
    
    </div>
  )
}

export default App;
