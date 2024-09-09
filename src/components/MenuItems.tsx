import type { MenuItems } from "../types"

type MenuItemsProps = {
  item: MenuItems
  addItem: (item : MenuItems) => void
}

function MenuItems({item, addItem} : MenuItemsProps) {
  return (
    <button
      className="border-2 rounded border-teal-400 hover:bg-teal-100 w-full p-3 flex justify-between"
      onClick={() => addItem(item)}
    >
      <p>{item.name}</p>
      <p className="font-black">${item.price}</p>

    </button>
  )
}

export default MenuItems