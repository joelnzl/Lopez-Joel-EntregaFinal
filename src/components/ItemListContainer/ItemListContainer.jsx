import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
// import { getProducts, getProductsByCat } from '../../asyncmock'
import { useParams } from 'react-router-dom'
import { collection, getDocs, where, query } from "firebase/firestore";
import { db } from '../../service/config';

const ItemListContainer = ({ greeting }) => {
  const [products, setProducts] = useState([]);

  const { idCategory } = useParams();

  useEffect(() => {
    const myProducts = idCategory ? query(collection(db, "inventario"), where("idCat", "==", idCategory)) : collection(db, "inventario");
    getDocs(myProducts)
      .then(res => {
        const newProducts = res.docs.map(doc => {
          const data = doc.data()
          return { id: doc.id, ...data }
        })
        setProducts(newProducts)
      })
      .catch(error => console.log(error))
  }, [idCategory])

  return (
    <>
      <h2> {greeting} </h2>
      <ItemList products={products} />

    </>
  )
}

export default ItemListContainer