import React, { useEffect, useState } from 'react'
import '../assets/styles/style.css'
import { useParams } from 'react-router-dom'
import ItemList from './ItemList'
import {collection, getDocs, getFirestore} from "firebase/firestore"
import Loader from './Loader'



const ItemListContainer = () => {

    const [ items, setItems ] = useState([])
    const { categoryId } = useParams()
    const [loading, setLoading] = useState(true)

    useEffect(() => {

        const fetchData = async () => {
        const db = getFirestore()

        const itemsCollection = collection(db, "items")
        try{
          const snapshot = await getDocs(itemsCollection)
          const docs = snapshot.docs.map((doc) => ({
            ...doc.data(),
            id:doc.id,
        }))
        setItems(docs)
        setLoading(false)
       } catch (error) {
        console.log("Error obteniendo informacion:", error)
       }
      }
      fetchData()
      },[])


      const filter = items.filter((item) => item.categoryId === categoryId);
      if (loading === true) {
        return <Loader />
      } else {
        return (
          <div>
            { categoryId ? <ItemList items={filter} /> : <ItemList items={items} />}
          </div>
        )
      }
}

export default ItemListContainer