import { createContext, useEffect, useState } from "react";

export const ItemsContext = createContext();

export const ItemsProvider = ({ children }) => {
    const [items, setItems] = useState([])
    const [originalItems, setOriginalItems] = useState([])

    useEffect(() => {
        const getItems = () => {
            fetch('https://fakestoreapi.com/products?limit=5')
                .then(res => res.json())
                .then((items) => {
                    setItems(items);
                    setOriginalItems(items)
                });
        }

        getItems();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const searchItems = (input) => {
        let results = originalItems
            .filter(x => x.title.toUpperCase()
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

    return <ItemsContext.Provider value={{ items, setItems, searchItems }}>
        {children}
    </ItemsContext.Provider>
}
