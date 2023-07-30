import React from 'react'
import './Monitors.scss'
import Filter from '../../components/Filter/Filter'
import Card from '../../components/Card/Card'
import Dropdown from '../../components/Dropdown/Dropdown'
import FilterMobile from '../../components/FilterMobile/FilterMobile'

const Monitors = () => {

    return (
        <div className='wrapper'>
            <Filter />

            <div className='app__container'>
                <section className='app__container-top'>

                    <div className='app__container-descr'>
                        <div className='app__container__descr-heading'>
                            <h1>Monitors</h1>
                            <p> <span>'Smart-Shopping'</span> offers one of the best pricie for monitors!</p>
                        </div>

                        <div className='app__container__descr-count'>
                            <p><span>4</span> Products in store</p>
                        </div>
                    </div>

                    <div className='app__container-sort'>
                        <div>

                            <FilterMobile />
                        </div>

                        <div>

                            <Dropdown />
                        </div>
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

export default Monitors