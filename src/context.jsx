import { createContext, useCallback, useContext, useEffect, useState } from "react";

const AppContext = createContext();

export const useGlobalContext = () => {
    return useContext(AppContext);
};

const url = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?s=';

export const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(false);
    const [search, setSearch] = useState("");
    const [cocktails, setCocktails] = useState([]);

    const fetchDrinks = useCallback( async () => {
        setLoading(true)
        try {
            const response = await fetch(`${url}${search}`);
            const data = await response.json();
            console.log(data?.drinks)
            setCocktails(data.drinks)
            setLoading(false)
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }, [search]);

    useEffect(() => {
        fetchDrinks();
    },[search,fetchDrinks])


    return (
        <AppContext.Provider value={{ loading, cocktails, search, setSearch }}>
            {children}
        </AppContext.Provider>
    )
};