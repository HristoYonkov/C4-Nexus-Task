import React, { useEffect, useState } from 'react'
import './Monitors.scss'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import Dropdown from '../../components/Dropdown/Dropdown'
import FilterMobile from '../../components/FilterMobile/FilterMobile'

const Monitors = ({ state, setCurrentState, originalState, setBackupProducts, setBuyedProducts }) => {
    const [products, setProducts] = useState(state);
    const [interval, setInterval] = useState(4);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        setProducts(state);
        setInterval(4);
    }, [state]);

    useEffect(() => {
        setProducts((curr) => [...curr, ...state.slice(curr.length, curr.length + interval)]);
    }, [interval, state]);

    const loadMoreHandler = () => {
        setInterval(state => state + 4);
    }

    const minMaxPrice = () => {
        if (originalState.length > 0) {
            const min = originalState?.map(x => x.price);
            return {
                min: min.reduce((acc, item) => acc < item ? acc : item),
                max: min.reduce((acc, item) => acc > item ? acc : item)
            }
        }
        return {
            min: 0,
            max: 0
        }
    }

    return (
        <div className='wrapper'>
            <Filter minMaxPrice={minMaxPrice()} originalState={originalState} setCurrentState={setCurrentState} />

            <div className='app__container'>
                <section className='app__container-top'>

                    <div className='app__container-descr'>
                        <div className='app__container__descr-heading'>
                            <h1>Monitors</h1>
                            <p> <span>'Smart-Shopping'</span> offers one of the best pricie for monitors!</p>
                        </div>

                        <div className='app__container__descr-count'>
                            <p><span>{products?.slice(0, interval).length}</span> Products in store</p>
                        </div>
                    </div>

                    <div className='app__container-sort'>
                        <div>
                            <FilterMobile minMaxPrice={minMaxPrice()} originalState={originalState} setCurrentState={setCurrentState} />
                        </div>

                        <div>
                            <Dropdown setProducts={setProducts} reset={state} />
                        </div>
                    </div>
                </section>

                <section className='app__container-products'>
                    {products.slice(0, interval).map((item) =>
                        <Card key={item.id} item={item} setBackupProducts={setBackupProducts} setBuyedProducts={setBuyedProducts} />
                    )}
                </section>
                {interval < products.length &&
                    <button className='showMore' onClick={() => loadMoreHandler()} >Load More</button>
                }
            </div>
        </div>
    )
}

export default Monitors