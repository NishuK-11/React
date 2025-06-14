
import React from 'react'
import List from './List'
const ItemList = () => {
    const items = ["Apple", "Banana", "Cherry", "Dates"];
  return (
    <div>
      <List items = {items} />
    </div>
  )
}

export default ItemList;
