import { useMemo } from "react";
import { getStatesByCountry } from "@/utility/location/states";

export const useStates = (countryCode: string) => {
  return useMemo(() => {
    if (!countryCode) return [];
    return getStatesByCountry(countryCode);
  }, [countryCode]);
};
