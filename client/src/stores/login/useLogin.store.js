import { create } from "zustand";
import axios from "axios";

export const useLoginStore = create(
  set => ({
    name: "",
    surname: "",
    bearer_token: "",
    login: async (username, password) => {
    	const response = await axios.post("http://localhost:3000/API/v1/user/login", {username, password})
    	if(response.status === 200){
    	   const {name, surname, bearer_token} = response.data
           set({name, surname, bearer_token})
    	}
    },
  })
)

