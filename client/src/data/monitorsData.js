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
        name: 'DELL',
        category: 'Monitor',
        imageUrl: 'https://s13emagst.akamaized.net/products/35823/35822767/images/res_69f25522ba35cb4803629d59a4a893df.jpg?width=450&height=450&hash=78E29B895B5663E4C63F67099D6DD4D4',
        rating: 5,
        price: 3650,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'Lenovo Thinkpad',
        category: 'Monitor',
        imageUrl: 'https://laptop.bg/system/images/362296/normal/lenovo_thinkpad_p14s_gen_3_21AK0001BM.png',
        rating: 5,
        price: 3000,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'HP Elite Dragonfly',
        category: 'Monitor',
        imageUrl: 'https://ardes.bg/uploads/original/hp-elite-dragonfly-g3-412404.jpg?_gl=1*16nr4zc*_up*MQ..&gclid=CjwKCAjwt52mBhB5EiwA05YKozHfhji-KT7E3swK40AAxVOiatCLMLienuuhE43tqfes221WFaGMJhoCsQkQAvD_BwE',
        rating: 5,
        price: 5000,
        discount: 5,
        color: 'black'
    },
    
]

export default monitors_data;