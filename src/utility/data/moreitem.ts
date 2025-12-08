import { moreItem } from "@/types/data.types";

  const moreitem: moreItem[] = [
    {
      rating: 3,
      title:"Honey Spiced Nuts",
      image: process.env.VITE_APP_URL + "/assets/img/product-images/8_1.jpg",
      oldPrice: 55.00,
      newPrice: 32.00,
    },
    {
        rating: 5,
        title:"Dates Value Pouch",
        image: process.env.VITE_APP_URL + "/assets/img/product-images/2_1.jpg",
        oldPrice: 60.00,
        newPrice: 56.00,
      },
      {
        rating: 2,
        title:"Graps Mix Snack",
        image: process.env.VITE_APP_URL + "/assets/img/product-images/5_1.jpg",
        oldPrice: 35.00,
        newPrice: 28.00,
      },
      {
        rating: 5,
        title:"Roasted Almonds Pack",
        image: process.env.VITE_APP_URL + "/assets/img/product-images/9_1.jpg",
        oldPrice: 23.00,
        newPrice: 16.00,
      },     
  ]
  export default moreitem;