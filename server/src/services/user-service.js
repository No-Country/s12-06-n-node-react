import { userModel } from "../models/index.js";

const UserService = {
    async createUser(body) {
        const user = await userModel.create(body);

        console.log("SERVICE CREATE USER:", user);
        return user;
    }
};

export default UserService;