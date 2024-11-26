import React from 'react'
import AddToBasket from './AddToBasket'

const ItemCard = (props) => {
  return (
    <div>
        <strong>{props.name}</strong>
        <i>{props.price} HUF 💵</i>
        <AddToBasket {...props} />
    </div>
  )
}

export default ItemCard