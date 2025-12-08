// hooks/useLoadOrders.ts

import { setOrders } from "@/store/reducers/cartSlice";
import { useEffect } from "react";
import { useDispatch } from "react-redux";

export const useLoadOrders = () => {
    const dispatch = useDispatch();
  
    useEffect(() => {
      if (typeof window !== "undefined") {
        const loginUser = JSON.parse(localStorage.getItem("login_user") || "{}");
  
        if (loginUser?.uid) {
          const storedOrders = JSON.parse(localStorage.getItem("orders") || "{}");
          const userOrders = storedOrders[loginUser.uid] || [];
  
          if (userOrders.length > 0) {
            dispatch(setOrders(userOrders));
          }
        }
      }
    }, [dispatch]);
};
