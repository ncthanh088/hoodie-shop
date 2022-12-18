import Item from "./Item";
import { useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

function Items() {
  const { items } = useContext(ItemsContext);

  return (
    <div className="list-item">
      {
        items.map(item =>
        (
          <Item item={item} key={item.id} />
        ))
      }
    </div>
  )
}

export default Items;