import { UserModel } from "../models/index.js";
import generateToken from "../utils/jwt.js";

const AuthService = {
    async login(body){
        const username = body.username;

        const token = await generateToken(body);
        const user = await UserModel.findOne({ username })

        return { name: user.name, surname: user.surname, bearer_token: token };
    },
};

export default AuthService;
