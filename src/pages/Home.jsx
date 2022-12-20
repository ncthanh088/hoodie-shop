import React, { Fragment } from "react";
import Slider from '../components/common/slider/Slider';
import { slides } from '../data/Slides';
import Items from "../components/items/Items";

function Home() {

  return (
    <Fragment>
      <Slider slides={slides} />
      <div className="container">
        <Items />
      </div>
    </Fragment>
  )
}

export default Home;