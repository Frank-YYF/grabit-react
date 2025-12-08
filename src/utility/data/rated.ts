import { Rated } from "@/types/data.types";


  const rated: Rated[] = [
    {
      id: 58,
      name: "vegetables",
      title:"Ginger - Organic",
      image: process.env.VITE_APP_URL + "/assets/img/product-images/17_1.jpg",
      quantity: 1,
      oldPrice: 62.00,
      newPrice: 65.00,
      waight: "1 kg"
    },
    {
      id: 16511,
        name: "Driedfruit",
        title:"Dates Value Pouch Dates Value Pouch",
        image: process.env.VITE_APP_URL + "/assets/img/product-images/2_2.jpg",
        quantity: 1,
        oldPrice: 56.00,
        newPrice: 78.00,
        waight : "3 pcs"
      },
      {
        id: 1831,
        name: "Fruits",
        title:"Blue berry",
        image: process.env.VITE_APP_URL + "/assets/img/product-images/23_1.jpg",
        quantity: 1,
        oldPrice: 25.00,
        newPrice: 30.00,
        waight: "250 g"
      },
      {
        id: 121293,
        name: "vegetables",
        title:"Onion - Hybrid",
        image: process.env.VITE_APP_URL + "/assets/img/product-images/13_1.jpg",
        quantity: 1,
        oldPrice: 20.00,
        newPrice: 30.00,
        waight: "12 pcs"
      },
      {
        id: 1283,
        name: "vegetables",
        title:"Potato",
        image: process.env.VITE_APP_URL + "/assets/img/product-images/12_1.jpg",
        quantity: 1,
        oldPrice: 50.00,
        newPrice: 55.00,
        waight: "2 pack"
      },
      {
        name: "Fruits",
        id: 168,
        title:"Mango - Kesar",
        image: process.env.VITE_APP_URL + "/assets/img/product-images/28_1.jpg",
        quantity: 1,
        oldPrice: 52.00,
        newPrice: 55.00,
        waight: "1 pcs"
      },
  ]
  export default rated;