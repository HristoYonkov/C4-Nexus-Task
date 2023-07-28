import React from 'react'
import './Laptops.scss'
import Filter from '../../components/Filter/Filter'

const Laptops = () => {

    return (
        <div className='wrapper'>
            <Filter />

            <div className='app__laptops'>
                <div className='app__laptops-top'>
                    <div className='app__laptops-descr'>
                        Category name & description
                    </div>

                    <div className='app__laptops-sort'>
                        SORT
                    </div>
                </div>

                LAPTOPS
            </div>
        </div>
    )
}

export default Laptops