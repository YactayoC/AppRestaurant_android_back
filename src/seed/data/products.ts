/* eslint-disable prettier/prettier */
interface Product {
  id?: string;
  name: string;
  description: string;
  price: number;
  category: string;
  image: string;
  inOffer: boolean;
  offerPrice: number;
  createdAt?: Date;
  updatedAt?: Date;
}

export const products: Product[] = [
  {
    name: 'Pollo a la leña',
    description: 'Papas crocantes | Ensalada | Cremas',
    price: 59,
    category: 'A la brasa',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185166/temporal/Pollo-Hawainano_La-Lena_fecl3u.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'Pollo + 1/4 de Pollo',
    description: 'Papas crocantes | Ensalada | Cremas',
    price: 69,
    category: 'A la brasa',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185201/temporal/Como-preparar-un-mostrito-peruano_m7lput.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'Pollo a la leña + Gaseosa 1.5Lt',
    description: 'Papas crocantes | Ensalada | Cremas | Gaseosa 1.5LT',
    price: 64.9,
    category: 'A la brasa',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185291/temporal/carta_pollo_50_iyqxut.png',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'Pollo + 1/4 de Pollo + Gaseosa 1.5Lt',
    description: 'Papas crocantes | Ensalada | Cremas | Gaseosa 1.5LT',
    price: 77,
    category: 'A la brasa',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185291/temporal/carta_pollo_50_iyqxut.png',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: '2 Pollos a la leña',
    description: '2 Papas crocantes | 2 Ensaladas | Cremas | 1/2 Pollo Solo | Gaseosa 3LT',
    price: 148,
    category: 'A la brasa',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185358/temporal/carta_polloymedio_72_yzlhru.png',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'Pollo + 1/4 de pollo solo',
    description: 'Papas crocantes | Ensalada | Cremas | Gaseosa 1.5LT',
    price: 74.9,
    category: 'A la brasa',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185291/temporal/carta_pollo_50_iyqxut.png',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: '2 Pollos a la leña',
    description: '2 Papas crocantes | 2 Ensaladas | Cremas | Gaseosa 2LT',
    price: 123,
    category: 'A la brasa',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185358/temporal/carta_polloymedio_72_yzlhru.png',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'Pollo a la leña',
    description: 'Papa familiar | Ensalada | Cremas | Gaseosa 1.5LT',
    price: 66.9,
    category: 'A la brasa',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185291/temporal/carta_pollo_50_iyqxut.png',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'Mostro familiar + Gaseosa 2LT',
    description: 'Pollo a la leña | Papas crocante | Arroz chaufa | Ensalada | Cremas | Gaseosa 2LT',
    price: 74,
    category: 'A la brasa',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185201/temporal/Como-preparar-un-mostrito-peruano_m7lput.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'Mostrito',
    description: '1/4 Pollo a la leña | Papas crocante | Arroz chaufa | Ensalada | Cremas',
    price: 15,
    category: 'A la brasa',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185201/temporal/Como-preparar-un-mostrito-peruano_m7lput.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'Mostro',
    description: '1/4 Pollo a la leña | Papas crocante | Arroz chaufa | Ensalada | Cremas',
    price: 20,
    category: 'A la brasa',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185201/temporal/Como-preparar-un-mostrito-peruano_m7lput.jpg',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: '1/2 Pollo a la leña',
    description: '1/2 Pollo a la leña | Papas crocante | Ensalada | Cremas | Gaseosa 1.5LT',
    price: 39.9,
    category: 'A la brasa',
    image: 'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185291/temporal/carta_pollo_50_iyqxut.png',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: '3 Pollos a la leña',
    description: '3 Papas crocante | 3 Ensaladas | Cremas | 2 Gaseosas 2LT',
    price: 188,
    category: 'A la brasa',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185358/temporal/carta_polloymedio_72_yzlhru.png',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'Parrilla familiar',
    description: 'Biffe | Chuleta | Pechuga | Anticucho | Mollejas | Papas | Ensaladas | Pepsi 2LT',
    price: 75,
    category: 'Parrillas',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185541/temporal/529b10b2dab3b695a7096b4ef2c39e4b__400x209_igitd3.webp',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'Extra Parrilla familiar',
    description:
      'Churrasco | Chuleta | Anticucho | Brocheta | Chorizo | Mollejas | 1/4 Pollo | Papas | Ensalada | Pepsi 2LT',
    price: 79,
    category: 'Parrillas',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185541/temporal/529b10b2dab3b695a7096b4ef2c39e4b__400x209_igitd3.webp',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'Mega Parrilla familiar',
    description:
      'Churrasco | Chuleta | 2 Anticuchos | 2 Brochetas | 2 Chorizos | Mollejas | 1/2 Pollo | Papas | Ensalada | Pepsi 2LT',
    price: 112,
    category: 'Parrillas',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185541/temporal/529b10b2dab3b695a7096b4ef2c39e4b__400x209_igitd3.webp',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'Parrilla Para 3',
    description: 'Churrasco | Anticucho | Mollejas | 1/4 Pollo | Papas | Ensalada familiar | Pepsi 2LT',
    price: 60,
    category: 'Parrillas',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185541/temporal/529b10b2dab3b695a7096b4ef2c39e4b__400x209_igitd3.webp',
    inOffer: false,
    offerPrice: 0,
  },
  {
    name: 'Parrilla familiar a la piedra',
    description: 'Biffe | Churrasco | 1/4 Pollo | Mollejas | Chorizo | Papas | Ensalada | Pepsi 2LT',
    price: 71,
    category: 'Parrillas',
    image:
      'https://res.cloudinary.com/sebas-2001-yac/image/upload/v1689185541/temporal/529b10b2dab3b695a7096b4ef2c39e4b__400x209_igitd3.webp',
    inOffer: false,
    offerPrice: 0,
  },
];
