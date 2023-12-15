import { UserModel } from "../models/index.js";
import generateToken from "../utils/jwt.js";

const AuthService = {
    async login(body){
        const userEmail = body.email;

        const token = await generateToken(body);
        const user = await UserModel.findOne({ email: userEmail })

        return { name: user.name, surname: user.surname, bearer_token: token };
    },
};

export default AuthService;

// const { id: sub, name } = body; 'id: sub' is renaming the id property to sub