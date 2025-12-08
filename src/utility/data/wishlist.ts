import { Wishlist } from "@/types/data.types";

const wishlist: Wishlist[] = [
  {
    image: process.env.VITE_APP_URL + "/assets/img/product-images/1_1.jpg",
    title: "Californian Almonds Value 250g + 50g Pack",
    date: "June 30, 2026",
    status: "Available",
    newPrice: 65,
    waight: "",
  },
  {
    image: process.env.VITE_APP_URL + "/assets/img/product-images/10_1.jpg",
    date: "April 02, 2025",
    title: "Healthy Nutmix, 200g Pack",
    status: "Out Of Stock",
    newPrice: 68,
    waight: "",
  },
  {
    image: process.env.VITE_APP_URL + "/assets/img/product-images/15_1.jpg",
    date: "Mar 09, 2026",
    title: "Capsicum - Red",
    status: "Available",
    newPrice: 360,
    waight: "",
  },
  {
    image: process.env.VITE_APP_URL + "/assets/img/product-images/17_1.jpg",
    date: "January 25, 2027",
    title: "Ginger - Organic",
    status: "Out Of Stock",
    newPrice: 584,
    waight: ""

  },
  {
    image: process.env.VITE_APP_URL + "/assets/img/product-images/18_1.jpg",
    date: "December 10, 2025",
    title: "Lemon - Seedless",
    status: "Out Of Stock",
    newPrice: 65,
    waight: ""

  },
  {
    image: process.env.VITE_APP_URL + "/assets/img/product-images/20_1.jpg",
    date: "August 08, 2024",
    title: "Organic fresh Broccoli",
    status: "Disabled",
    newPrice: 65,
    waight: ""

  },
  {
    image: process.env.VITE_APP_URL + "/assets/img/product-images/25_1.jpg",
    date: "August 08, 2024",
    title: "Fresh Lichi",
    status: "Available",
    newPrice: 368,

    waight: ""
  
  }
];
export default wishlist;
