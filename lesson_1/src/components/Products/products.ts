export type ProductsType = {
  id: number
  name: string
  description: string
  capacity: number
  price: number
  type: string
  img: string
}

const productsArray: ProductsType[] = [
  {
    id: 1,
    name: "Iphone X",
    description: "About iPhone X",
    capacity: 128,
    price: 500,
    type: "phone",
    img: "/public/images/blue.jpg",
  },
  {
    id: 2,
    name: "Iphone 13 Pro",
    description: "About iPhone 13 Pro",
    capacity: 128,
    price: 500,
    type: "phone",
    img: "/public/images/gold.jpg",
  },
  {
    id: 3,
    name: "Iphone 14 Pro",
    description: "About iPhone 14 Pro",
    capacity: 128,
    price: 500,
    type: "phone",
    img: "/public/images/green.jpg",
  },
  {
    id: 4,
    name: "Iphone 12",
    description: "About iPhone Iphone 12",
    capacity: 128,
    price: 500,
    type: "phone",
    img: "/public/images/blue.jpg",
  },
  {
    id: 5,
    name: "Macbook Pro 13",
    description: "About Macbook Pro 13",
    capacity: 500,
    price: 1000,
    type: "laptop",
    img: "/public/images/macbook.jpg",
  },
  {
    id: 6,
    name: "Macbook Air 13",
    description: "About Macbook Air 13",
    capacity: 500,
    price: 1000,
    type: "laptop",
    img: "/public/images/macbookair.jpeg",
  },
  {
    id: 7,
    name: "Samsung Galaxy Book",
    description: "About Samsung Galaxy Book",
    capacity: 500,
    price: 1000,
    type: "laptop",
    img: "/public/images/galaxy.png",
  },
]

// export const getProductsObject =  (array:Product[]) => productsArray.reduce((object, product) => {
//     ...object,
//     [product.id]: procut
// }, {})

export const getProductsObject = (array: ProductsType[]) =>
  array.reduce(
    (object, product) => ({
      ...object,
      [product.id]: product,
    }),
    {}
  )

export default productsArray
