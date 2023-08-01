import React, { useEffect, useState } from 'react'

import './Laptops.scss'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import Dropdown from '../../components/Dropdown/Dropdown'
import FilterMobile from '../../components/FilterMobile/FilterMobile'

const Laptops = ({ state, currentState, originalState }) => {
    const laptopsData = state;

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const minMaxPrice = () => {
        const min = originalState.map(x => x.price);
        console.log(min);
        return {
            min: min.reduce((acc, item) => acc < item ? acc : item),
            max: min.reduce((acc, item) => acc > item ? acc : item)
        }
    }

    return (
        <div className='wrapper'>
            <Filter minMaxPrice={minMaxPrice()} originalState={originalState} currentState={currentState} />

            <div className='app__container'>
                <section className='app__container-top'>

                    <div className='app__container-descr'>
                        <div className='app__container__descr-heading'>
                            <h1>Laptops</h1>
                            <p> <span>'Smart-Shopping'</span> offers one of the best pricie for laptops!</p>
                        </div>

                        <div className='app__container__descr-count'>
                            <p><span>{laptopsData?.length}</span> Products in store</p>
                        </div>
                    </div>

                    <div className='app__container-sort'>
                        <div>
                            <FilterMobile minMaxPrice={minMaxPrice()} originalState={originalState} currentState={currentState} />
                        </div>

                        <div>
                            <Dropdown condition='laptops' />
                        </div>
                    </div>
                </section>

                <section className='app__container-products'>
                    {laptopsData.map((item) =>
                        <Card key={item.id} item={item} />
                    )}
                </section>
                <button >Load More</button>
            </div>
        </div>
    )
}

export default Laptops