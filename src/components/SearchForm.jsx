import { useEffect } from 'react';
import { useGlobalContext } from '../context';
import { useRef } from 'react';
import { useState } from 'react';

const SearchForm = () => {
    const {search, setSearch } = useGlobalContext();
    const searchValue = useRef("");
    
    useEffect(() => {
        searchValue.current.focus();
    }, []);

    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(search)
        setSearch("")
    }

    // const searchCocktail =() => {
        
    // }

    return (
        <section className='section search'>
            <form className='search-form' onSubmit={handleSubmit}>
                <div className='form-control'>
                    <label htmlFor="name">search your favorite cocktail</label>
                    <input 
                    type="text" 
                    name='name'
                    id='name'
                    value={search}
                    ref={searchValue}
                    onChange={(e) => setSearch(e.target.value)}
                    />
                </div>
            </form>
        </section>
    )
}

export default SearchForm