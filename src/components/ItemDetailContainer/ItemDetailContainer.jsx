import {useState, useEffect} from 'react'
//import {getProduct} from '../../asyncmock'
import ItemDetail from '../ItemDetail/ItemDetail.jsx';
import { useParams } from 'react-router-dom';
import { getDoc, doc } from "firebase/firestore";
import { db } from '../../service/config';


const ItemDetailContainer = () => {
    const [product, setProduct] = useState(null);


    const {idItem} = useParams();

      useEffect( () => {
      const newDoc = doc(db, "inventario", idItem);

      getDoc(newDoc)
          .then(res => {
              const data = res.data();
              const newProduct = {id: res.id, ...data}
              setProduct(newProduct);
          })
          .catch(error => console.log(error))
  }, [idItem])



  return (
    <ItemDetail {...product} />
  )
}

export default ItemDetailContainer