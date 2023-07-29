import React from 'react'
import './Laptops.scss'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'

const Laptops = () => {

    return (
        <div className='wrapper'>
            <Filter />

            <div className='app__container'>
                <section className='app__container-top'>
                    <div className='app__container-descr'>
                        Category name & description
                    </div>

                    <div className='app__container-sort'>
                        SORT
                    </div>
                </section>
                
                <section className='app__container-products'>
                    <Card />
                    <Card />
                    <Card />
                    <Card />
                </section>
            </div>
        </div>
    )
}

export default Laptops