import { Item } from "@/types/data.types";


  const fashionrated: Item[] = [
    {
      id: 2,
      name: "jewellery",
      title:"Rose Gold Earring",
      image: process.env.VITE_APP_URL + "/assets/img/product-images/53_1.jpg",
      quantity: 1,
      oldPrice: 62.00,
      newPrice: 65.00,
    },
    {
      id: 41,
        name: "Fashion",
        title:"Men's Wear printed shirt ",
        image: process.env.VITE_APP_URL + "/assets/img/product-images/36_2.jpg",
        quantity: 1,
        oldPrice: 56.00,
        newPrice: 78.00,
      },
      {
        id: 105,
        name: "shoes",
        title:"Women's casual shoes",
        image: process.env.VITE_APP_URL + "/assets/img/product-images/46_1.jpg",
        quantity: 1,
        oldPrice: 25.00,
        newPrice: 30.00,
      },
      {
        name: "shampoo",
        title:"anti dandruff shampoo",
        image: process.env.VITE_APP_URL + "/assets/img/product-images/51_1.jpg",
        quantity: 1,
        id: 114,
        oldPrice: 20.00,
        newPrice: 30.00,
      },
      {
        id: 87,
        name: "Clothes",
        title:"men's Jacket Fashion Coat",
        image: process.env.VITE_APP_URL + "/assets/img/product-images/38_1.jpg",
        quantity: 1,
        oldPrice: 50.00,
        newPrice: 55.00,
      },
      {
        id: 1,
        name: "wallet",
        title:"Women's wallet Hand Purse",
        image: process.env.VITE_APP_URL + "/assets/img/product-images/48_1.jpg",
        quantity: 1,
        oldPrice: 52.00,
        newPrice: 55.00,
      }
  ]
  export default fashionrated;