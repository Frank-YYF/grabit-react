import { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Loader } from ".";

export function GlobalLoader() {
  const [isLoading, setIsLoading] = useState(true);
  const location = useLocation();

  useEffect(() => {
    // Start loading when pathname changes
    setIsLoading(true);

    // Stop loading after a short delay to ensure smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000); // Adjust delay as needed

    // Cleanup timer
    return () => clearTimeout(timer);
  }, [location.pathname]);

  if (!isLoading) return <Outlet />;

  return (
    <Loader />
  );
}
