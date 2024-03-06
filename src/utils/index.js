import couponPhoto from '../assets/couponPhoto.png';

export const shops = [
    {
        id: 1,
        name: 'Drugs 24',
        dbName: 'shop1',
    },
    {
        id: 2,
        name: 'Pharmacy',
        dbName: 'shop2',
    },
    {
        id: 3,
        name: 'Apteka',
        dbName: 'shop3',
    },
    {
        id: 4,
        name: 'MedHelp 911',
        dbName: 'shop4',
    },
];

function generateRandomString() {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let randomString = '';
  
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * characters.length);
      randomString += characters.charAt(randomIndex);
    }
  
    return randomString;
}

export const coupons = [
    {
        id: 1,
        photo: couponPhoto,
        coupon: generateRandomString(),
    },
    {
        id: 2,
        photo: couponPhoto,
        coupon: generateRandomString(),
    },
    {
        id: 3,
        photo: couponPhoto,
        coupon: generateRandomString(),
    },
]