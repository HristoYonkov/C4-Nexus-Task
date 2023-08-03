const { nanoid } = require('nanoid');

const tablets_data = [
    {
        id: nanoid(),
        name: 'Apple iPad Air 5',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/44228/44227349/images/res_f42c85460155617d27faf8ab9cc37c2c.jpg?width=450&height=450&hash=EB81051230C2BEF2AC2D8625109F09A4',
        rating: 5,
        price: 1840,
        discount: 5,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy Tab S8',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/51800/51799943/images/res_d30431968bdeaefc7511ddd8055e5082.jpg?width=450&height=450&hash=E4C7C8050DF7FC5F11139B7BFA8A10E9',
        rating: 5,
        price: 1500,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'TOSCIDO S103, 10.1',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/49568/49567672/images/res_6e699161d301120f39afbc34669e071f.jpg?width=450&height=450&hash=6D805EFF73C7063CA52F94A37E89B4E7',
        rating: 2,
        price: 190,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Xiaomi Pad 5',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/41336/41335183/images/res_ceae0df616f93246fc911e0b04560e26.jpg?width=450&height=450&hash=B35A56023CBE65F59525C3D77926A33D',
        rating: 5,
        price: 750,
        discount: 3,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'YOTOPT X109',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/37899/37898348/images/res_20a4e35377bb7414b0cf72ce93d80071.jpg?width=450&height=450&hash=B714428A50CEDF82BEE747A1481A37B3',
        rating: 5,
        price: 220,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'Kruger&Matz',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/47289/47288567/images/res_50a2434459a7d449032ac986bd94dbb9.png?width=450&height=450&hash=9CBC77FAB27511D549ED3DE8F1910350',
        rating: 1,
        price: 550,
        discount: 5,
        color: 'black'
    },{
        id: nanoid(),
        name: 'Apple iPad Air 5',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/44228/44227349/images/res_f42c85460155617d27faf8ab9cc37c2c.jpg?width=450&height=450&hash=EB81051230C2BEF2AC2D8625109F09A4',
        rating: 5,
        price: 1840,
        discount: 5,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy Tab S8',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/51800/51799943/images/res_d30431968bdeaefc7511ddd8055e5082.jpg?width=450&height=450&hash=E4C7C8050DF7FC5F11139B7BFA8A10E9',
        rating: 5,
        price: 1500,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'TOSCIDO S103, 10.1',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/49568/49567672/images/res_6e699161d301120f39afbc34669e071f.jpg?width=450&height=450&hash=6D805EFF73C7063CA52F94A37E89B4E7',
        rating: 2,
        price: 190,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Xiaomi Pad 5',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/41336/41335183/images/res_ceae0df616f93246fc911e0b04560e26.jpg?width=450&height=450&hash=B35A56023CBE65F59525C3D77926A33D',
        rating: 5,
        price: 750,
        discount: 3,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'YOTOPT X109',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/37899/37898348/images/res_20a4e35377bb7414b0cf72ce93d80071.jpg?width=450&height=450&hash=B714428A50CEDF82BEE747A1481A37B3',
        rating: 5,
        price: 220,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'Kruger&Matz',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/47289/47288567/images/res_50a2434459a7d449032ac986bd94dbb9.png?width=450&height=450&hash=9CBC77FAB27511D549ED3DE8F1910350',
        rating: 1,
        price: 550,
        discount: 5,
        color: 'black'
    },{
        id: nanoid(),
        name: 'Apple iPad Air 5',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/44228/44227349/images/res_f42c85460155617d27faf8ab9cc37c2c.jpg?width=450&height=450&hash=EB81051230C2BEF2AC2D8625109F09A4',
        rating: 5,
        price: 1840,
        discount: 5,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy Tab S8',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/51800/51799943/images/res_d30431968bdeaefc7511ddd8055e5082.jpg?width=450&height=450&hash=E4C7C8050DF7FC5F11139B7BFA8A10E9',
        rating: 5,
        price: 1500,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'TOSCIDO S103, 10.1',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/49568/49567672/images/res_6e699161d301120f39afbc34669e071f.jpg?width=450&height=450&hash=6D805EFF73C7063CA52F94A37E89B4E7',
        rating: 2,
        price: 190,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Xiaomi Pad 5',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/41336/41335183/images/res_ceae0df616f93246fc911e0b04560e26.jpg?width=450&height=450&hash=B35A56023CBE65F59525C3D77926A33D',
        rating: 5,
        price: 750,
        discount: 3,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'YOTOPT X109',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/37899/37898348/images/res_20a4e35377bb7414b0cf72ce93d80071.jpg?width=450&height=450&hash=B714428A50CEDF82BEE747A1481A37B3',
        rating: 5,
        price: 220,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'Kruger&Matz',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/47289/47288567/images/res_50a2434459a7d449032ac986bd94dbb9.png?width=450&height=450&hash=9CBC77FAB27511D549ED3DE8F1910350',
        rating: 1,
        price: 550,
        discount: 5,
        color: 'black'
    },{
        id: nanoid(),
        name: 'Apple iPad Air 5',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/44228/44227349/images/res_f42c85460155617d27faf8ab9cc37c2c.jpg?width=450&height=450&hash=EB81051230C2BEF2AC2D8625109F09A4',
        rating: 5,
        price: 1840,
        discount: 5,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy Tab S8',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/51800/51799943/images/res_d30431968bdeaefc7511ddd8055e5082.jpg?width=450&height=450&hash=E4C7C8050DF7FC5F11139B7BFA8A10E9',
        rating: 5,
        price: 1500,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'TOSCIDO S103, 10.1',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/49568/49567672/images/res_6e699161d301120f39afbc34669e071f.jpg?width=450&height=450&hash=6D805EFF73C7063CA52F94A37E89B4E7',
        rating: 2,
        price: 190,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Xiaomi Pad 5',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/41336/41335183/images/res_ceae0df616f93246fc911e0b04560e26.jpg?width=450&height=450&hash=B35A56023CBE65F59525C3D77926A33D',
        rating: 5,
        price: 750,
        discount: 3,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'YOTOPT X109',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/37899/37898348/images/res_20a4e35377bb7414b0cf72ce93d80071.jpg?width=450&height=450&hash=B714428A50CEDF82BEE747A1481A37B3',
        rating: 5,
        price: 220,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'Kruger&Matz',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/47289/47288567/images/res_50a2434459a7d449032ac986bd94dbb9.png?width=450&height=450&hash=9CBC77FAB27511D549ED3DE8F1910350',
        rating: 1,
        price: 550,
        discount: 5,
        color: 'black'
    },{
        id: nanoid(),
        name: 'Apple iPad Air 5',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/44228/44227349/images/res_f42c85460155617d27faf8ab9cc37c2c.jpg?width=450&height=450&hash=EB81051230C2BEF2AC2D8625109F09A4',
        rating: 5,
        price: 1840,
        discount: 5,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Samsung Galaxy Tab S8',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/51800/51799943/images/res_d30431968bdeaefc7511ddd8055e5082.jpg?width=450&height=450&hash=E4C7C8050DF7FC5F11139B7BFA8A10E9',
        rating: 5,
        price: 1500,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'TOSCIDO S103, 10.1',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/49568/49567672/images/res_6e699161d301120f39afbc34669e071f.jpg?width=450&height=450&hash=6D805EFF73C7063CA52F94A37E89B4E7',
        rating: 2,
        price: 190,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Xiaomi Pad 5',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/41336/41335183/images/res_ceae0df616f93246fc911e0b04560e26.jpg?width=450&height=450&hash=B35A56023CBE65F59525C3D77926A33D',
        rating: 5,
        price: 750,
        discount: 3,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'YOTOPT X109',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/37899/37898348/images/res_20a4e35377bb7414b0cf72ce93d80071.jpg?width=450&height=450&hash=B714428A50CEDF82BEE747A1481A37B3',
        rating: 5,
        price: 220,
        discount: 0,
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'Kruger&Matz',
        category: 'Tablet',
        imageUrl: 'https://s13emagst.akamaized.net/products/47289/47288567/images/res_50a2434459a7d449032ac986bd94dbb9.png?width=450&height=450&hash=9CBC77FAB27511D549ED3DE8F1910350',
        rating: 1,
        price: 550,
        discount: 5,
        color: 'black'
    },
]

export default tablets_data;