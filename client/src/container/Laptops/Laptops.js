import React, { useEffect, useState } from 'react'

import './Laptops.scss'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import Dropdown from '../../components/Dropdown/Dropdown'
import FilterMobile from '../../components/FilterMobile/FilterMobile'

const Laptops = ({ state, setCurrentState, originalState }) => {
    const [laptops, setLaptops] = useState(state);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        setLaptops(state.slice(0, 4))
    }, [state]);

    const loadMoreHandler = () => {
        setLaptops((curr) => [...curr, ...state.slice(curr.length, curr.length + 4)]);
    }

    const minMaxPrice = () => {
        const min = originalState.map(x => x.price);

        return {
            min: min.reduce((acc, item) => acc < item ? acc : item),
            max: min.reduce((acc, item) => acc > item ? acc : item)
        }
    }

    return (
        <div className='wrapper'>
            <Filter minMaxPrice={minMaxPrice()} setOriginalState={originalState} setCurrentState={setCurrentState} />

            <div className='app__container'>
                <section className='app__container-top'>

                    <div className='app__container-descr'>
                        <div className='app__container__descr-heading'>
                            <h1>Laptops</h1>
                            <p> <span>'Smart-Shopping'</span> offers one of the best pricie for laptops!</p>
                        </div>

                        <div className='app__container__descr-count'>
                            <p><span>{laptops?.length}</span> Products in store</p>
                        </div>
                    </div>

                    <div className='app__container-sort'>
                        <div>
                            <FilterMobile minMaxPrice={minMaxPrice()} setOriginalState={originalState} setCurrentState={setCurrentState} />
                        </div>

                        <div>
                            <Dropdown setlaptops={setLaptops} reset={state} />
                        </div>
                    </div>
                </section>

                <section className='app__container-products'>
                    {laptops.map((item) =>
                        <Card key={item.id} item={item} />
                    )}
                </section>
                {state.length !== laptops.length &&
                    <button className='showMore' onClick={() => loadMoreHandler()} >Load More</button>
                }
            </div>
        </div>
    )
}

export default Laptops