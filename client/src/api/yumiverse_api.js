import axios from "axios";

export const getAllRestaurants = async () => {
	return await axios.get("https://yumi-verse.onrender.com/api/v1/restaurant");
};

export const getAllCategories = async () => {
	return await axios.get("https://yumi-verse.onrender.com/api/v1/category");
	// return await axios.get("http://localhost:3000/api/v1/category");
};

export const getRestaurantById = async id => {
	return await axios.get(`https://yumi-verse.onrender.com/api/v1/restaurant/${id}`);
};

export const postRestaurant = async data => {
	return await axios.post("https://yumi-verse.onrender.com/api/v1/restaurant", data);
	// return await axios.post("http://localhost:3000/api/v1/restaurant", data);
};

export const postUser = async (name, surname, phone, username, password) => {
	return await axios.post(
		"https://yumi-verse.onrender.com/api/v1/user/register",
		name,
		surname,
		phone,
		username,
		password
	);
};

export const loginUser = async (username, password) => {
	return await axios.post("https://yumi-verse.onrender.com/api/v1/user/login", username, password);
};

export const getCommentsByIdRestaurant = async idRestaurant => {
	return await axios.get(`https://yumi-verse.onrender.com/api/v1/comment/${idRestaurant}`);
};

export const getUserById = async idUser => {
	return await axios.get(`http://localhost:3000/api/v1/user/${idUser}`);
};
