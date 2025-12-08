import { Item } from "@/types/data.types";


const fashionitem: Item[] = [
  {
    id: 71,
    name: "Fashion",
    title: "Men's stylish printed shirt",
    image: process.env.VITE_APP_URL + "/assets/img/product-images/32_1.jpg",
    quantity: 1,
    oldPrice: 42.00,
    newPrice: 45.00,
  },
  {
    id: 86,
    name: "Baby Wear",
    title: "Cotton Clothes Sets for Boys",
    image: process.env.VITE_APP_URL + "/assets/img/product-images/37_1.jpg",
    quantity: 1,
    oldPrice: 25.00,
    newPrice: 30.00,
  },
  {
    id: 62,
    name: "Belt",
    title: "Men's Leather Belt",
    image: process.env.VITE_APP_URL + "/assets/img/product-images/49_1.jpg",
    quantity: 1,
    oldPrice: 62.00,
    newPrice: 65.00,
  },
  {
    id: 63,
    name: "perfume",
    title: "Long lasting perfume",
    image: process.env.VITE_APP_URL + "/assets/img/product-images/50_1.jpg",
    quantity: 1,
    oldPrice: 10.00,
    newPrice: 11.00,
  },
  {
    id: 73,
    name: "Lipstick",
    title: "Liquid Matte Lipstick",
    image: process.env.VITE_APP_URL + "/assets/img/product-images/54_1.jpg",
    quantity: 1,
    oldPrice: 52.00,
    newPrice: 55.00,
  },
  {
    id: 101,
    name: "shoes",
    title: "Men's sport shoes blue",
    image: process.env.VITE_APP_URL + "/assets/img/product-images/41_1.jpg",
    quantity: 1,
    oldPrice: 20.00,
    newPrice: 30.00,
  },
]
export default fashionitem;