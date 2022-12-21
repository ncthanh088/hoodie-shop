import React, { useState, useContext } from "react";
import { ItemsContext } from "../../context/ItemsContext";
import "./Search.Styles.scss"

function Search() {
    const { searchItems } = useContext(ItemsContext);
    const [input, setInput] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        searchItems(input);
    };

    return (
        <form onSubmit={submitHandler} className="nosubmit">
            <input className="nosubmit" onChange={(e) => setInput(e.target.value)}
                type="search"
                placeholder="Search..."
                value={input}
            />
        </form>
    )
}

export default Search;