import axios from 'axios';

export const getAllRestaurants = async () => {
	return await axios.get("https://yumi-verse.onrender.com/api/v1/restaurant");
};

export const getAllCategories = async () => {
	return await axios.get("https://yumi-verse.onrender.com/api/v1/categories");
};

export const getRestaurantById = async (id) => {
	return await axios.get(`https://yumi-verse.onrender.com/api/v1/restaurant/${id}`);
};