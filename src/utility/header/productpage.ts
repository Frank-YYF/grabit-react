import { MenuLinkAttr } from "@/types/data.types";

const productpage: MenuLinkAttr[] = [
    {
      name: "Product Page",
      href: "",
      subname: [
        { name: "Product Left Sidebar", href: "/product-left-sidebar" },
      { name: "Product Right Sidebar", href: "/product-right-sidebar" }
      ]
    },
    {
      name: "Product According",
      href: "",
      subname: [
        { name: "Left Sidebar", href: "/product-according-left-sidebar" },
        { name: "Right Sidebar", href: "/product-according-right-sidebar" }
      ]
    },  
  ];
  export default productpage;
  