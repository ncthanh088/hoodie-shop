import React, { useState, useContext } from "react";
import { ItemContext } from "../../context/ItemContext";
import "./Search.Styles.scss"

function Search() {
    const { searchItems } = useContext(ItemContext);
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