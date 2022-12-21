import React from "react";
import { Link } from "react-router-dom";
import './Item.Styles.scss'

function Item({ item }) {
  return (
    <div className="card-item">
      <Link className="card-link" to={"/detail"}>
        <div className="thumbnail">
          <img
            src={require('../../assets/images/thumbnails/320293437_8511885685550351_8298504780320985990_n.jpg')}
            alt={item.title} />
        </div>
        <h2 className="title">{item.title}</h2>
        <span className="price">price: {item.price}$</span>
      </Link>
    </div>
  )
}

export default Item;