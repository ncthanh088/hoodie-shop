import React from "react";
import Items from "../components/items/Items";
// import Filter from "../components/search/Filter";
// import Sort from "../components/search/Sort";

function Home() {

  return (
    <div className="home">
      {/* <div>
        <Filter />
        <Sort />
      </div> */}
      <Items />
    </div>
  )
}

export default Home;