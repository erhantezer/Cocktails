import React from 'react'
import { useGlobalContext } from '../context'
import Loading from './Loading';
import Cocktail from './Cocktail';
// import { Suspense, lazy } from 'react';

const CocktailList = () => {
    const { cocktails, loading } = useGlobalContext();


    // const OtherComponent = React.lazy(() => import('./OtherComponent'));

    // function MyComponent() {
    //     return (
    //         <div>
    //             <Suspense fallback={<div>Loading...</div>}>
    //                 <OtherComponent />
    //             </Suspense>
    //         </div>
    //     );
    // }

    if (loading) {
        return <Loading />
    };

    if (cocktails.length < 1) {
        return (
            <h2 className='section-title'>
                no cocktails matched your search criteria
            </h2>
        )
    }


    return (
        <section className='section'>
            <h2 className='section-title'>cocktails</h2>
            <div className='cocktails-center'>
                {cocktails.map((item) => {
                console.log(item)
                    return <Cocktail key={item.id} {...item} />
                })}
            </div>
        </section>
    )
}

export default CocktailList;