import { createContext, useEffect, useState } from "react";
import { getItems } from "../api/itemApi";

export const ItemContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [originalItems, setOriginalItems] = useState([])

    useEffect(() => {
        // fetch data
        getItems()
            .then((items) => {
                setItems([...items]);
                setOriginalItems([...items])
            });

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const searchItems = (input) => {
        let results = originalItems
            .filter(x => x.name.toUpperCase()
                .includes(input.toUpperCase()))

        if (input !== '' && results.length > 0) {
            setItems(results);
        }
        else if (input !== '' && results.length === 0) {
            setItems([])
        }
        else {
            setItems(originalItems);
        }
    }

    return <ItemContext.Provider value={{ items, setItems, searchItems }}>
        {children}
    </ItemContext.Provider>
}
