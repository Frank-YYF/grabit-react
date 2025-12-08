import { State } from "@/types/data.types";
import states from "@/utility/json/states.json";

export const getStatesByCountry = (countryCode: string): State[] =>
    Array.isArray(states) ? states.filter((state) => state.country_code === countryCode).map((s): State => ({
        id: s.id,
        name: s.name,
        state_code: s.state_code,
        country_code: s.country_code
    })): [];
