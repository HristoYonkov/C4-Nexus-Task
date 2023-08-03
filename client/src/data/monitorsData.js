const { nanoid } = require('nanoid');

const monitors_data = [
    {
        id: nanoid(),
        name: 'LG UltraWide 5K Dual',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/55625/55624448/images/res_f9af3b22689d349353a80fc5dcaa9995.jpg?width=450&height=450&hash=962395685BA34D873C394FAF0BD5F743',
        rating: 5,
        price: 2600,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'LG UltraGear',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/35534/35533681/images/res_165c18af3b7c9ebec81c05ab759660ec.jpg?width=450&height=450&hash=C5A35B9EB24DEDB69DA351ACE64D868C',
        rating: 4,
        price: 500,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Acer QHD',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/23246/23245378/images/res_4a31cad636d27d4d44986207c8aa86cd.jpg?width=450&height=450&hash=BBDF7948699F7BF695F2CE0845473258',
        rating: 3,
        price: 420,
        discount: 5,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'DELL WUHD, 5K2K',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/35823/35822767/images/res_69f25522ba35cb4803629d59a4a893df.jpg?width=450&height=450&hash=78E29B895B5663E4C63F67099D6DD4D4',
        rating: 5,
        price: 3650,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'DELL Alienware 25"',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/48824/48823424/images/res_43954c7fc8d2edeeda1c9fda1880bd41.jpg?width=450&height=450&hash=59BDD62CE892E7E6912AFC8786984D34',
        rating: 2,
        price: 900,
        discount: 15,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'LG UltraFine 27"',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/27079/27078744/images/res_2789f985f4e0d80532458f64bad4c2c2.jpg?width=450&height=450&hash=17891A23DE6E4A18E069B9319ADEA821',
        rating: 5,
        price: 2500,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'LG UltraWide 5K Dual',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/55625/55624448/images/res_f9af3b22689d349353a80fc5dcaa9995.jpg?width=450&height=450&hash=962395685BA34D873C394FAF0BD5F743',
        rating: 5,
        price: 2600,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'LG UltraGear',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/35534/35533681/images/res_165c18af3b7c9ebec81c05ab759660ec.jpg?width=450&height=450&hash=C5A35B9EB24DEDB69DA351ACE64D868C',
        rating: 4,
        price: 500,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Acer QHD',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/23246/23245378/images/res_4a31cad636d27d4d44986207c8aa86cd.jpg?width=450&height=450&hash=BBDF7948699F7BF695F2CE0845473258',
        rating: 3,
        price: 420,
        discount: 5,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'DELL WUHD, 5K2K',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/35823/35822767/images/res_69f25522ba35cb4803629d59a4a893df.jpg?width=450&height=450&hash=78E29B895B5663E4C63F67099D6DD4D4',
        rating: 5,
        price: 3650,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'DELL Alienware 25"',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/48824/48823424/images/res_43954c7fc8d2edeeda1c9fda1880bd41.jpg?width=450&height=450&hash=59BDD62CE892E7E6912AFC8786984D34',
        rating: 2,
        price: 900,
        discount: 15,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'LG UltraFine 27"',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/27079/27078744/images/res_2789f985f4e0d80532458f64bad4c2c2.jpg?width=450&height=450&hash=17891A23DE6E4A18E069B9319ADEA821',
        rating: 5,
        price: 2500,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'LG UltraWide 5K Dual',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/55625/55624448/images/res_f9af3b22689d349353a80fc5dcaa9995.jpg?width=450&height=450&hash=962395685BA34D873C394FAF0BD5F743',
        rating: 5,
        price: 2600,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'LG UltraGear',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/35534/35533681/images/res_165c18af3b7c9ebec81c05ab759660ec.jpg?width=450&height=450&hash=C5A35B9EB24DEDB69DA351ACE64D868C',
        rating: 4,
        price: 500,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Acer QHD',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/23246/23245378/images/res_4a31cad636d27d4d44986207c8aa86cd.jpg?width=450&height=450&hash=BBDF7948699F7BF695F2CE0845473258',
        rating: 3,
        price: 420,
        discount: 5,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'DELL WUHD, 5K2K',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/35823/35822767/images/res_69f25522ba35cb4803629d59a4a893df.jpg?width=450&height=450&hash=78E29B895B5663E4C63F67099D6DD4D4',
        rating: 5,
        price: 3650,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'DELL Alienware 25"',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/48824/48823424/images/res_43954c7fc8d2edeeda1c9fda1880bd41.jpg?width=450&height=450&hash=59BDD62CE892E7E6912AFC8786984D34',
        rating: 2,
        price: 900,
        discount: 15,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'LG UltraFine 27"',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/27079/27078744/images/res_2789f985f4e0d80532458f64bad4c2c2.jpg?width=450&height=450&hash=17891A23DE6E4A18E069B9319ADEA821',
        rating: 5,
        price: 2500,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'LG UltraWide 5K Dual',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/55625/55624448/images/res_f9af3b22689d349353a80fc5dcaa9995.jpg?width=450&height=450&hash=962395685BA34D873C394FAF0BD5F743',
        rating: 5,
        price: 2600,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'LG UltraGear',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/35534/35533681/images/res_165c18af3b7c9ebec81c05ab759660ec.jpg?width=450&height=450&hash=C5A35B9EB24DEDB69DA351ACE64D868C',
        rating: 4,
        price: 500,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Acer QHD',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/23246/23245378/images/res_4a31cad636d27d4d44986207c8aa86cd.jpg?width=450&height=450&hash=BBDF7948699F7BF695F2CE0845473258',
        rating: 3,
        price: 420,
        discount: 5,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'DELL WUHD, 5K2K',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/35823/35822767/images/res_69f25522ba35cb4803629d59a4a893df.jpg?width=450&height=450&hash=78E29B895B5663E4C63F67099D6DD4D4',
        rating: 5,
        price: 3650,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'DELL Alienware 25"',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/48824/48823424/images/res_43954c7fc8d2edeeda1c9fda1880bd41.jpg?width=450&height=450&hash=59BDD62CE892E7E6912AFC8786984D34',
        rating: 2,
        price: 900,
        discount: 15,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'LG UltraFine 27"',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/27079/27078744/images/res_2789f985f4e0d80532458f64bad4c2c2.jpg?width=450&height=450&hash=17891A23DE6E4A18E069B9319ADEA821',
        rating: 5,
        price: 2500,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'LG UltraWide 5K Dual',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/55625/55624448/images/res_f9af3b22689d349353a80fc5dcaa9995.jpg?width=450&height=450&hash=962395685BA34D873C394FAF0BD5F743',
        rating: 5,
        price: 2600,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'LG UltraGear',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/35534/35533681/images/res_165c18af3b7c9ebec81c05ab759660ec.jpg?width=450&height=450&hash=C5A35B9EB24DEDB69DA351ACE64D868C',
        rating: 4,
        price: 500,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Acer QHD',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/23246/23245378/images/res_4a31cad636d27d4d44986207c8aa86cd.jpg?width=450&height=450&hash=BBDF7948699F7BF695F2CE0845473258',
        rating: 3,
        price: 420,
        discount: 5,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'DELL WUHD, 5K2K',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/35823/35822767/images/res_69f25522ba35cb4803629d59a4a893df.jpg?width=450&height=450&hash=78E29B895B5663E4C63F67099D6DD4D4',
        rating: 5,
        price: 3650,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'DELL Alienware 25"',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/48824/48823424/images/res_43954c7fc8d2edeeda1c9fda1880bd41.jpg?width=450&height=450&hash=59BDD62CE892E7E6912AFC8786984D34',
        rating: 2,
        price: 900,
        discount: 15,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'LG UltraFine 27"',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/27079/27078744/images/res_2789f985f4e0d80532458f64bad4c2c2.jpg?width=450&height=450&hash=17891A23DE6E4A18E069B9319ADEA821',
        rating: 5,
        price: 2500,
        discount: 0,
        color: 'black'
    },
    
]

export default monitors_data;