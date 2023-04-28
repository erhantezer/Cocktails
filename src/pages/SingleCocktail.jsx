import axios from "axios";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom"
import Loading from "../components/Loading";
import useError from "../hooks/useError";
import Error from "./Error";


const SingleCocktail = () => {
    const {id} = useParams();
    const [loading, setLoading] = useState(false);
    const [cocktail, setCocktail] =useState(null)
    const { error, setError } = useError()

    const url = 'https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=';

    const fetchDataId = async () => {
        setLoading(true)
        try {
            const {data} = await axios(`${url}${id}`);
            const {drinks} =data
            if (drinks) {
                const {
                    strDrink: name,
                    strDrinkThumb: image,
                    strAlcoholic: info,
                    strCategory: category,
                    strGlass: glass,
                    strInstructions: instructions,
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                } = drinks[0]

                const ingredients = [
                    strIngredient1,
                    strIngredient2,
                    strIngredient3,
                    strIngredient4,
                    strIngredient5,
                ]
                const newCocktail = {
                    name,
                    image,
                    info,
                    category,
                    glass,
                    instructions,
                    ingredients,
                }
                setCocktail(newCocktail)
                setLoading(false)
            } else {
                setCocktail(null)
            }
        } catch (error) {
            console.log(error)
            setError(true)
        }
    }

    useEffect(() => {
        fetchDataId()
    }, [id])

    if (loading) {
        return <Loading />
    }

    if (error) {
        return <Error />
    }

    if (!cocktail) {
        return <h2 className='section-title'>no cocktail to display</h2>
    } else {
        const {
            name,
            image,
            category,
            info,
            glass,
            instructions,
            ingredients,
        } = cocktail

    return (
        <section className='section cocktail-section'>
            
            <h2 className='section-title'>{name}</h2>
            <div className='drink'>
                <img src={image} alt={name}></img>
                <div className='drink-info'>
                    <p>
                        <span className='drink-data'>name :</span> {name}
                    </p>
                    <p>
                        <span className='drink-data'>category :</span> {category}
                    </p>
                    <p>
                        <span className='drink-data'>info :</span> {info}
                    </p>
                    <p>
                        <span className='drink-data'>glass :</span> {glass}
                    </p>
                    <p>
                        <span className='drink-data'>instructons :</span> {instructions}
                    </p>
                    <p>
                        <span className='drink-data'>ingredients :</span>
                        {ingredients.map((item, index) => {
                            return item ? <span key={index}> {item}</span> : null
                        })}
                    </p>
                    <Link to='/' className='btn btn-primary'>
                        back home
                    </Link>
                </div>
            </div>
        </section>
    )
    }
}

export default SingleCocktail;