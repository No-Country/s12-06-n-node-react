import { UserModel } from "../models/index.js";
import bcrypt from "bcryptjs";

const UserService = {
    async createUser(body) {
        const { password } = body;
        
        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(password, salt);
        
        body.password = hash;
        const user = await UserModel.create(body);

        console.log("SERVICE CREATE USER:", user);
        return user;
    }
};

export default UserService;