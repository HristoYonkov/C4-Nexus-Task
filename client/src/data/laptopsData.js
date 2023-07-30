const { nanoid } = require('nanoid');

const laptops_data = [
    {
        id: nanoid(),
        name: 'Asus Vivobook',
        category: 'Laptop',
        imageUrl: 'https://www.asus.com/media/Odin/Websites/global/Series/12.png',
        rating: 3,
        price: 1200,
        discount: 30,
    },
    {
        id: nanoid(),
        name: 'Asus ROG',
        category: 'Laptop',
        imageUrl: 'https://www.asus.com/media/Odin/Websites/global/Series/12.png',
        rating: 5,
        price: 3000,
        discount: 0,
    },
    {
        id: nanoid(),
        name: 'Asus Zenbook',
        category: 'Laptop',
        imageUrl: 'https://www.asus.com/media/Odin/Websites/global/Series/12.png',
        rating: 2,
        price: 1500,
        discount: 50,
    },
    {
        id: nanoid(),
        name: 'Asus Zenbook Pro',
        category: 'Laptop',
        imageUrl: 'https://www.asus.com/media/Odin/Websites/global/Series/12.png',
        rating: 5,
        price: 2500,
        discount: 10,
    },
]

export default laptops_data;