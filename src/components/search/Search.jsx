import React, { useState, useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";

function Search() {
    const { searchItems } = useContext(ItemsContext);
    const [input, setInput] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        searchItems(input);
    };

    return (
        <form onSubmit={submitHandler} className="search-bar">
            <input onChange={(e) => setInput(e.target.value)}
                type="text"
                value={input}
            />
        </form>
    )
}

export default Search;