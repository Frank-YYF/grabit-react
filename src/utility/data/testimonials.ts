import { Testimonials } from "@/types/data.types";

const testimonials: Testimonials[] = [
  {
    image: process.env.VITE_APP_URL + "/assets/img/user/1.jpg",
    name: "Mariya Klinton",
    subimage: process.env.VITE_APP_URL + "/assets/img/icons/top-quotes.svg",
    subimagetwo: process.env.VITE_APP_URL + "/assets/img/icons/bottom-quotes.svg",
    category: "CEO",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy typesetting industry.",
  },
  {
    image: process.env.VITE_APP_URL + "/assets/img/user/2.jpg",
    subimage: process.env.VITE_APP_URL + "/assets/img/icons/top-quotes.svg",
    subimagetwo: process.env.VITE_APP_URL + "/assets/img/icons/bottom-quotes.svg",
    name: "John Doe",
    category: "General Manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy typesetting industry.",
  },
  {
    image: process.env.VITE_APP_URL + "/assets/img/user/3.jpg",
    subimage: process.env.VITE_APP_URL + "/assets/img/icons/top-quotes.svg",
    subimagetwo: process.env.VITE_APP_URL + "/assets/img/icons/bottom-quotes.svg",
    name: "Nency Lykra",
    category: "Marketing Manager",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy typesetting industry.",
  },
];
export default testimonials;
