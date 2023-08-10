import React, { useEffect, useState } from 'react'
import './Tablets.scss'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import Dropdown from '../../components/Dropdown/Dropdown'
import FilterMobile from '../../components/FilterMobile/FilterMobile'
import { calcMinMaxPrice } from '../../hooks/calcMinMaxPrice'


const Tablets = ({ state, setCurrentState, setBuyedProducts }) => {
    const [products, setProducts] = useState(state);
    const [interval, setInterval] = useState(4);
    // Filtering states..
    const [selected, setSelected] = useState([]);
    const [filteredPrice, setFilteredPrice] = useState({
        price: calcMinMaxPrice(state).min
    });
    const [colors, setColors] = useState({
        white: false,
        black: false,
        blue: false
    });
    // Sorting state..
    const [sortValue, setSortValue] = useState('');


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
        // setInterval(4);
    }, []);

    useEffect(() => {
    }, [state]);

    useEffect(() => {
        // filter products!!!
        setProducts(state);
        if (selected.length > 0) {
            setProducts(state => state.filter((x) => selected.includes(x.color)));
        }
        setProducts(state => state.filter((x) => x.price >= filteredPrice.price));
        // Sort products!!!
        if (sortValue === 'priceAsc') {
            setProducts(state => [...state.sort((a, b) => a.price - b.price)]);
        } else if (sortValue === 'priceDesc') {
            setProducts(state => [...state.sort((a, b) => b.price - a.price)]);
        } else if (sortValue === 'alphaA-Z') {
            setProducts(state => [...state.sort((a, b) => a.name.localeCompare(b.name))]);
        } else if (sortValue === 'alphaZ-A') {
            setProducts(state => [...state.sort((a, b) => b.name.localeCompare(a.name))]);
        }

    }, [interval, selected, filteredPrice, state, sortValue]);

    const loadMoreHandler = () => {
        setInterval(state => state + 4);
    }


    return (
        <div className='wrapper'>
            <Filter
                minMaxPrice={calcMinMaxPrice(state)}
                setSelected={setSelected}
                setFilteredPrice={setFilteredPrice}
                filteredPrice={filteredPrice}
                colors={colors}
                setColors={setColors}
            />

            <div className='app__container'>
                <section className='app__container-top'>

                    <div className='app__container-descr'>
                        <div className='app__container__descr-heading'>
                            <h1>Tablets</h1>
                            <p> <span>'Smart-Shopping'</span> offers one of the best pricie for tablets!</p>
                        </div>

                        <div className='app__container__descr-count'>
                            <p><span>{products?.slice(0, interval).length}</span> Products in store</p>
                        </div>
                    </div>

                    <div className='app__container-sort'>
                        <div>
                            <FilterMobile
                                minMaxPrice={calcMinMaxPrice(state)}
                                setSelected={setSelected}
                                setFilteredPrice={setFilteredPrice}
                                filteredPrice={filteredPrice}
                                colors={colors}
                                setColors={setColors}
                            />
                        </div>

                        <div>
                            <Dropdown sortValue={sortValue} setSortValue={setSortValue} />
                        </div>
                    </div>
                </section>

                <section className='app__container-products'>
                    {products.slice(0, interval).map((item) =>
                        <Card key={item.id} item={item} setBackupProducts={setCurrentState} setBuyedProducts={setBuyedProducts} />
                    )}
                </section>
                {interval < products.length &&
                    <button className='showMore' onClick={() => loadMoreHandler()} >Load More</button>
                }
            </div>
        </div>
    )
}

export default Tablets