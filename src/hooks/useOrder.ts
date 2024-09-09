import { useState } from "react"
import type { MenuItems, OrderItem } from "../types"



function useOrder() {
  const [order, setOrder] = useState<OrderItem[]>([])
  const [tip, setTip] = useState(0)

  const addItem = (item : MenuItems) => {

    const itemExist = order.find( orderItem => orderItem.id === item.id)
    if (itemExist) {
      const updateOrder = order.map( orderItem => orderItem.id === item.id 
        ? {...orderItem, quantity: orderItem.quantity+1} 
        : orderItem 
      )
      setOrder(updateOrder)

    } else {
      const newItem = {...item, quantity: 1}
      setOrder([...order, newItem])
    }
  }

  const removeItem = (itemId : MenuItems['id']) => {

    const updateOrder = order.filter( orderItem => orderItem.id !== itemId)
    setOrder(updateOrder)
  }

  const placeOrder = () => {
    
    setOrder([])
    setTip(0)
  }

  return {
    order,
    tip,
    setTip,
    addItem,
    removeItem,
    placeOrder
  }
}

export default useOrder