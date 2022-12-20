import Item from "./Item";
import { Fragment, useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

function Items() {
  const { items } = useContext(ItemsContext);

  return (
    <Fragment>
      <h2 className="item-category-title">Xem lần nữa</h2>
      <div className="list-item">
        {
          items.slice(1,3).map(item =>
          (
            <Item item={item} key={item.id} />
          ))
        }
      </div>
      <h2 className="item-category-title">Sản phẩm khác tại cửa hàng này</h2>
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