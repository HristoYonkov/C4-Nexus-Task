import React from 'react'
import './Laptops.scss'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import Dropdown from '../../components/Dropdown/Dropdown'

const Laptops = () => {

    return (
        <div className='wrapper'>
            <Filter />

            <div className='app__container'>
                <section className='app__container-top'>
                    <div className='app__container-descr'>
                        <h1>Laptops</h1>
                        <p><span>4</span> products in store</p>
                    </div>

                    <div className='app__container-sort'>
                        <Dropdown />
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