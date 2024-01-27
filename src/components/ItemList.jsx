import React from 'react'
import Item from './Item'



const ItemList = ({items}) => {

  return (
    <div>
      {items?.map((item)=> (
        <Item
         key={item.id}
         id={item.id}
         categoria={item.categoria}
         descripcion = {item.descripcion}
         imagen= {item.imagen}
         titulo = {item.tiutlo}
         stock= {item.stock}
         precio = {item.precio}
         item={item}
         />
      ))}
    </div>
  );
}

export default ItemList