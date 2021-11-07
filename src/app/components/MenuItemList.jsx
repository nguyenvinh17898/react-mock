import { List } from "semantic-ui-react"
import { generateKey } from "../helpers/crypto-helper"
import MenuItem from "./MenuItem"

const MenuItemList = ({ items, viewOrder, addToCart }) => {
  let itemIsActive = items.filter(item=>item.isActive === true);
  return (
    <List size={"large"}>
      {itemIsActive.map(
        item =>
           (
            <MenuItem
              key={generateKey()}
              item={item}
              viewOrder={viewOrder}
              addToCart={addToCart}
            ></MenuItem>
          )
      )}
    </List>
  )
}

export default MenuItemList
