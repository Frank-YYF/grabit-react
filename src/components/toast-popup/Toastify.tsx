import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Toastify = () => {
  return (
    <>
      <ToastContainer
        position="top-right"
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Toastify;
