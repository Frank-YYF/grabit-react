import Header from "./Header";
import Footer from "./Footer";

import Toastify from "../../toast-popup/Toastify";
import { useEffect } from "react";

const LayoutTwo = ({ children }: any) => {
  useEffect(() => {
    const cssFilePath = process.env.VITE_APP_URL + "/assets/css/demo-2.css";
    const link = document.createElement("link");
    link.href = cssFilePath;
    link.rel = "stylesheet";
    document.head.appendChild(link);

    return () => {
      document.head.removeChild(link);
    };
  }, []);

  return (
    <>
      {/* <Loader /> */}
      <Header />
      {children}
      <Footer />
      <Toastify />
    </>
  );
};

export default LayoutTwo;
