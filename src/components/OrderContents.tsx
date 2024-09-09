import { formatCurrency } from "../helpers"
import { MenuItems, OrderItem } from "../types"


type OrderContentsProps = {
  order: OrderItem[]
  removeItem: (itemId: MenuItems['id']) => void
}

function OrderContents({order, removeItem} : OrderContentsProps) {
  return (
    <>
      <h2 className="text-4xl font-black">Consumo</h2>
      <div className="space-y-3 mt-10">
        {
          order.map( orderItem => (
            <div 
              key={orderItem.id} 
              className="flex justify-between border-t border-gray-200 py-5 last-of-type:border-b"
            >
              <div>
                <p className="text-lg">{orderItem.name} - {formatCurrency(orderItem.price)}</p>
                <p className="font-black">
                  Cantidad: {orderItem.quantity} - {formatCurrency(orderItem.quantity * orderItem.price)}
                </p>
              </div>
              <button 
                className="bg-red-600 h-8 w-8 rounded-full text-white font-black"
                onClick={() => removeItem(orderItem.id)}
              >
                X
              </button>
            </div>
          ))
        }
      </div>
    </>
  )
}

export default OrderContents