import React from "react";
import { useNavigate } from "react-router-dom";

function Item({ item }) {

  let navigate = useNavigate();
  const routeChange = () => {
    let path = "/detail"
    navigate(path)
  }

  return (
    <div className="card-item">
      <a onClick={routeChange}>
        <img
          className="thumbnail"
          src={require('../../assets/images/thumbnails/320293437_8511885685550351_8298504780320985990_n.jpg')}
          alt={item.title} />
        <h2 className="title">{item.title}</h2>
        <span className="price">price: {item.price}$</span>
      </a>
    </div>
  )
}

export default Item;