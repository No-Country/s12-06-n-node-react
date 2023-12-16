import axios from "axios";

export const getAllRestaurants = async () => {
	return await axios.get("https://yumi-verse.onrender.com/api/v1/restaurant");
};

export const getAllCategories = async () => {
	return await axios.get("https://yumi-verse.onrender.com/api/v1/category");
};

export const getRestaurantById = async (id) => {
	return await axios.get(`https://yumi-verse.onrender.com/api/v1/restaurant/${id}`);
};

export const postRestaurant = async (data)=> {
	return await axios.post("https://yumi-verse.onrender.com/api/v1/restaurant", data);
};

