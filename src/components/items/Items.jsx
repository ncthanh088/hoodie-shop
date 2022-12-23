import Item from "./Item";
import { Fragment, useContext } from "react";
import { ItemContext } from "../../context/ItemContext";

function Items() {
  const { items } = useContext(ItemContext);

  return (
    <Fragment>
      <h4 className="item-category-title">All of hoodies</h4>

      <div className="list-item">
        {
          items.map(item =>
          (
            <Item item={item} key={item.id} />
          ))
        }
      </div>
    </Fragment>
  )
}

export default Items;