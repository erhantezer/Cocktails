import { createContext, useCallback, useContext, useState } from "react";

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
            
        } catch (error) {
            console.log(error);
            setLoading(false)
        }
    }, [second])


    return (
        <AppContext.Provider value={{}}>
            {children}
        </AppContext.Provider>
    )
};