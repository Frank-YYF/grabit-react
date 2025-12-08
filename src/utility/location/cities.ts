import { City } from "@/types/data.types";
import cities from "@/utility/json/cities.json";

export const getCitiesByState = (stateCode: string): City[] =>
    Array.isArray(cities) ? cities.filter((city: any) => city.state_code === stateCode) : [];
