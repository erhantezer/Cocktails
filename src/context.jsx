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
            const response = await fetch(`${url}${search}`)
            const data = await response.json()
            console.log(data);
            const { drinks } = data
            console.log(drinks)
            if (drinks) {
                const newCocktails = drinks.map((item) => {
                    const {
                        idDrink,
                        strDrink,
                        strDrinkThumb,
                        strAlcoholic,
                        strGlass,
                    } = item

                    return {
                        id: idDrink,
                        name: strDrink,
                        image: strDrinkThumb,
                        info: strAlcoholic,
                        glass: strGlass,
                    }
                })
                setCocktails(newCocktails)
            } else {
                setCocktails([])
            }
            setLoading(false)
        } 
        catch (error) {
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