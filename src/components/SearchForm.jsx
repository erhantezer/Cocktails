import { useGlobalContext } from '../context';
import { useRef } from 'react';

const SearchForm = () => {
    const {setSearch} = useGlobalContext();
    const searchValue = useRef();

    return (
        <div>SearchForm</div>
    )
}

export default SearchForm