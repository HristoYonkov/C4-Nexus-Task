const { nanoid } = require('nanoid');

const phones_data = [
    {
        id: nanoid(),
        name: 'Xiaomi POCO X5 PRO',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/54255/54254311/images/res_e7608bec5e4a57ae2c3f2f9b2683abd8.jpg?width=450&height=450&hash=DB30ED244AABD8B7E4AFB818B3CE542C',
        rating: 5,
        price: 679,
        discount: 0,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Apple iPhone 14 Pro',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/48592/48591222/images/res_12362c60d3c74a4ac96f0ae792cf673b.jpg?width=450&height=450&hash=21353ECBB32BF3E470CC23A1211B80D9 ',
        rating: 5,
        price: 2200,
        discount: 5,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy A53',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/44270/44269093/images/res_e37d3552af09e77a25ed9b565ce6a927.jpg?width=450&height=450&hash=F1475C4277352FDCFF7BAA215492EB31',
        rating: 4,
        price: 650,
        discount: 5,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Xiaomi Redmi 10A',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/47867/47866080/images/res_2b8bd087be37c62aa568a1d406eac894.jpg?width=450&height=450&hash=03C0268CF6643799A8F468B430D6624F',
        rating: 2,
        price: 150,
        discount: 0,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Apple iPhone 13 mini',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/40685/40684444/images/res_6e8049604574487c4d6eb83306b61a5d.jpg?width=450&height=450&hash=364D19E554C0AABC9964925844BA3057',
        rating: 5,
        price: 1490,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy Note 8',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/19887/19886950/images/res_243e3dafd3b54b6fc332316fc755b44e.jpg?width=450&height=450&hash=5E0DADEF7B6DA67D0FFA3BB970882AC3',
        rating: 0,
        price: 630,
        discount: 0,
        color: 'black'
    }, {
        id: nanoid(),
        name: 'Xiaomi POCO X5 PRO',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/54255/54254311/images/res_e7608bec5e4a57ae2c3f2f9b2683abd8.jpg?width=450&height=450&hash=DB30ED244AABD8B7E4AFB818B3CE542C',
        rating: 5,
        price: 679,
        discount: 0,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Apple iPhone 14 Pro',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/48592/48591222/images/res_12362c60d3c74a4ac96f0ae792cf673b.jpg?width=450&height=450&hash=21353ECBB32BF3E470CC23A1211B80D9 ',
        rating: 5,
        price: 2200,
        discount: 5,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy A53',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/44270/44269093/images/res_e37d3552af09e77a25ed9b565ce6a927.jpg?width=450&height=450&hash=F1475C4277352FDCFF7BAA215492EB31',
        rating: 4,
        price: 650,
        discount: 5,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Xiaomi Redmi 10A',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/47867/47866080/images/res_2b8bd087be37c62aa568a1d406eac894.jpg?width=450&height=450&hash=03C0268CF6643799A8F468B430D6624F',
        rating: 2,
        price: 150,
        discount: 0,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Apple iPhone 13 mini',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/40685/40684444/images/res_6e8049604574487c4d6eb83306b61a5d.jpg?width=450&height=450&hash=364D19E554C0AABC9964925844BA3057',
        rating: 5,
        price: 1490,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy Note 8',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/19887/19886950/images/res_243e3dafd3b54b6fc332316fc755b44e.jpg?width=450&height=450&hash=5E0DADEF7B6DA67D0FFA3BB970882AC3',
        rating: 0,
        price: 630,
        discount: 0,
        color: 'black'
    }, {
        id: nanoid(),
        name: 'Xiaomi POCO X5 PRO',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/54255/54254311/images/res_e7608bec5e4a57ae2c3f2f9b2683abd8.jpg?width=450&height=450&hash=DB30ED244AABD8B7E4AFB818B3CE542C',
        rating: 5,
        price: 679,
        discount: 0,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Apple iPhone 14 Pro',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/48592/48591222/images/res_12362c60d3c74a4ac96f0ae792cf673b.jpg?width=450&height=450&hash=21353ECBB32BF3E470CC23A1211B80D9 ',
        rating: 5,
        price: 2200,
        discount: 5,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy A53',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/44270/44269093/images/res_e37d3552af09e77a25ed9b565ce6a927.jpg?width=450&height=450&hash=F1475C4277352FDCFF7BAA215492EB31',
        rating: 4,
        price: 650,
        discount: 5,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Xiaomi Redmi 10A',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/47867/47866080/images/res_2b8bd087be37c62aa568a1d406eac894.jpg?width=450&height=450&hash=03C0268CF6643799A8F468B430D6624F',
        rating: 2,
        price: 150,
        discount: 0,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Apple iPhone 13 mini',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/40685/40684444/images/res_6e8049604574487c4d6eb83306b61a5d.jpg?width=450&height=450&hash=364D19E554C0AABC9964925844BA3057',
        rating: 5,
        price: 1490,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy Note 8',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/19887/19886950/images/res_243e3dafd3b54b6fc332316fc755b44e.jpg?width=450&height=450&hash=5E0DADEF7B6DA67D0FFA3BB970882AC3',
        rating: 0,
        price: 630,
        discount: 0,
        color: 'black'
    }, {
        id: nanoid(),
        name: 'Xiaomi POCO X5 PRO',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/54255/54254311/images/res_e7608bec5e4a57ae2c3f2f9b2683abd8.jpg?width=450&height=450&hash=DB30ED244AABD8B7E4AFB818B3CE542C',
        rating: 5,
        price: 679,
        discount: 0,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Apple iPhone 14 Pro',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/48592/48591222/images/res_12362c60d3c74a4ac96f0ae792cf673b.jpg?width=450&height=450&hash=21353ECBB32BF3E470CC23A1211B80D9 ',
        rating: 5,
        price: 2200,
        discount: 5,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy A53',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/44270/44269093/images/res_e37d3552af09e77a25ed9b565ce6a927.jpg?width=450&height=450&hash=F1475C4277352FDCFF7BAA215492EB31',
        rating: 4,
        price: 650,
        discount: 5,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Xiaomi Redmi 10A',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/47867/47866080/images/res_2b8bd087be37c62aa568a1d406eac894.jpg?width=450&height=450&hash=03C0268CF6643799A8F468B430D6624F',
        rating: 2,
        price: 150,
        discount: 0,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Apple iPhone 13 mini',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/40685/40684444/images/res_6e8049604574487c4d6eb83306b61a5d.jpg?width=450&height=450&hash=364D19E554C0AABC9964925844BA3057',
        rating: 5,
        price: 1490,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy Note 8',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/19887/19886950/images/res_243e3dafd3b54b6fc332316fc755b44e.jpg?width=450&height=450&hash=5E0DADEF7B6DA67D0FFA3BB970882AC3',
        rating: 0,
        price: 630,
        discount: 0,
        color: 'black'
    }, {
        id: nanoid(),
        name: 'Xiaomi POCO X5 PRO',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/54255/54254311/images/res_e7608bec5e4a57ae2c3f2f9b2683abd8.jpg?width=450&height=450&hash=DB30ED244AABD8B7E4AFB818B3CE542C',
        rating: 5,
        price: 679,
        discount: 0,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Apple iPhone 14 Pro',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/48592/48591222/images/res_12362c60d3c74a4ac96f0ae792cf673b.jpg?width=450&height=450&hash=21353ECBB32BF3E470CC23A1211B80D9 ',
        rating: 5,
        price: 2200,
        discount: 5,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy A53',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/44270/44269093/images/res_e37d3552af09e77a25ed9b565ce6a927.jpg?width=450&height=450&hash=F1475C4277352FDCFF7BAA215492EB31',
        rating: 4,
        price: 650,
        discount: 5,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Xiaomi Redmi 10A',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/47867/47866080/images/res_2b8bd087be37c62aa568a1d406eac894.jpg?width=450&height=450&hash=03C0268CF6643799A8F468B430D6624F',
        rating: 2,
        price: 150,
        discount: 0,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Apple iPhone 13 mini',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/40685/40684444/images/res_6e8049604574487c4d6eb83306b61a5d.jpg?width=450&height=450&hash=364D19E554C0AABC9964925844BA3057',
        rating: 5,
        price: 1490,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy Note 8',
        category: 'SmartPhone',
        imageUrl: 'https://s13emagst.akamaized.net/products/19887/19886950/images/res_243e3dafd3b54b6fc332316fc755b44e.jpg?width=450&height=450&hash=5E0DADEF7B6DA67D0FFA3BB970882AC3',
        rating: 0,
        price: 630,
        discount: 0,
        color: 'black'
    },
]

export default phones_data;