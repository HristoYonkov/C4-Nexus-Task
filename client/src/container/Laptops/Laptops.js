import React, { useEffect, useState } from 'react'

import './Laptops.scss'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import Dropdown from '../../components/Dropdown/Dropdown'
import FilterMobile from '../../components/FilterMobile/FilterMobile'

const Laptops = ({ state, setCurrentState, originalState }) => {
    const [backupProducts, setBackupProducts] = useState(state);
    const [products, setProducts] = useState(backupProducts);
    const [interval, setInterval] = useState(4);

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    useEffect(() => {
        setBackupProducts(state);
    }, [state]);
    
    useEffect(() => {
        setProducts(backupProducts.slice(0, interval));
    }, [state, backupProducts]);

    const loadMoreHandler = () => {
        setInterval(state => state + 4);
        setProducts((curr) => [...curr, ...backupProducts.slice(curr.length, curr.length + interval)]);
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
                            <p><span>{products?.length}</span> Products in store</p>
                        </div>
                    </div>

                    <div className='app__container-sort'>
                        <div>
                            <FilterMobile minMaxPrice={minMaxPrice()} setOriginalState={originalState} setCurrentState={setCurrentState} />
                        </div>

                        <div>
                            <Dropdown setProducts={setBackupProducts} reset={state} />
                        </div>
                    </div>
                </section>

                <section className='app__container-products'>
                    {products.map((item) =>
                        <Card key={item.id} item={item} />
                    )}
                </section>
                {state.length !== products.length &&
                    <button className='showMore' onClick={() => loadMoreHandler()} >Load More</button>
                }
            </div>
        </div>
    )
}

export default Laptops