import { useMemo } from "react";
import { getCitiesByState } from "@/utility/location/cities";

export const useCities = (stateCode: string) => {
  return useMemo(() => {
    if (!stateCode) return [];
    return getCitiesByState(stateCode);
  }, [stateCode]);
};
