export const formatAddress = (address) => {
    const { street, city, state, country } = address;
    return `${street}, ${city}, ${state}, ${country}`;
}