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
        color: 'white'
    },
    {
        id: nanoid(),
        name: 'Asus ROG',
        category: 'Laptop',
        imageUrl: 'https://www.asus.com/media/Odin/Websites/global/Series/12.png',
        rating: 5,
        price: 3000,
        discount: 0,
        color: 'black'
    },
    {
        id: nanoid(),
        name: 'Asus Zenbook',
        category: 'Laptop',
        imageUrl: 'https://laptop.bg/system/images/326748/normal/asus_zenbook_flip_15_oled_ux564eioledh731x.jpg',
        rating: 2,
        price: 1500,
        discount: 50,
        color: 'blue'
    },
    {
        id: nanoid(),
        name: 'Asus Zenbook Pro',
        category: 'Laptop',
        imageUrl: 'https://assets.products-live.ao.com/Images/854b0b23-1752-4975-9e4f-7b4938a254dc/1280x873/UX8402ZE-M3022W_Asus_Laptop_01.jpg',
        rating: 5,
        price: 2500,
        discount: 10,
        color: 'black'
    },
]

export default laptops_data;