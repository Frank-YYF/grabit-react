import { Blog } from "@/types/data.types";

  
  const latestblog: Blog[] = [
    {
      image: process.env.VITE_APP_URL + "/assets/img/blog/1.jpg",
      name: "Organic",
      date: "June 30, 2026",
      title: "Marketing Guide: 5 Steps to Success to way.",
    },
    {
      image: process.env.VITE_APP_URL + "/assets/img/blog/2.jpg",
      date: "April 02, 2025",
      name: "Fruits",
      title: "Best way to solve business deal issue in market.",
    },
    {
      image: process.env.VITE_APP_URL + "/assets/img/blog/3.jpg",
      date: "Mar 09, 2026",
      name: "Vegetables",
      title: "31 grocery customer service stats know in 2024.",
    },
    {
      image: process.env.VITE_APP_URL + "/assets/img/blog/4.jpg",
      date: "January 25, 2027",
      name: "Fastfood",
      title: "Business ideas to grow your business traffic.",
    },
    {
        image: process.env.VITE_APP_URL + "/assets/img/blog/5.jpg",
        date: "December 10, 2025",
        name: "Fruits",
        title: "Marketing Guide: 5 Steps way to Success.",
      },
      {
        image: process.env.VITE_APP_URL + "/assets/img/blog/6.jpg",
        date: "August 08, 2024",
        name: "Vegetables",
        title: "15 customer service stats idea know in 2026.",
      },
  ];
  export default latestblog;