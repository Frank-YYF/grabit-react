import { useMemo } from "react";
import { getAllCountries } from "@/utility/location/countries";

export const useCountries = () => {
  return useMemo(() => getAllCountries(), []);
};
