import axios from 'axios';

export const getRestaurant = async () => {
	return await axios.get("http://localhost:3000/api/v1/restaurant");
};

export const addRestaurant = async data => {
	return await axios.post("http://localhost:3000/api/v1/restaurant", data);
};

export const updateRestaurant = async id => {
	return await axios.put(`http://localhost:3000/api/v1/restaurant/${id}`);
};

export const deleteRestaurant = async id => {
	return await axios.delete(`http://localhost:3000/api/v1/restaurant/${id}`);
};
