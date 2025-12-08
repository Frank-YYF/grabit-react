export const getRegistrationData = () => {
    if (typeof window !== "undefined") {
        const registrationData = localStorage.getItem("registrationData");
        return registrationData ? JSON.parse(registrationData) : [];
    }
    return [];
};

export const setRegistrationData = (data: any) => {
    if (typeof window !== "undefined") {
        localStorage.setItem("registrationData", JSON.stringify(data));
    }
};