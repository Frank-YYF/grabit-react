import { Country } from "@/types/data.types";
import countries from "@/utility/json/countries.json";

export const getAllCountries = (): Country[] => countries ? countries.map((c): Country => ({ 
    id: c.id, 
    name: c.name, 
    iso2: c.iso2 
})) : [];

