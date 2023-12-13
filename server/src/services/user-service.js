import { UserModel } from "../models/index.js";

const UserService = {
    async createUser(body) {
        const user = await UserModel.create(body);

        console.log("SERVICE CREATE USER:", user);
        return user;
    }
};

export default UserService;