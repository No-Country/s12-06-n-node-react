import { UserModel } from "../models/index.js";
import generateToken from "../utils/jwt.js";

const AuthService = {
    async login(body){
        const { email } = body;

        const token = await generateToken(body);
        const user = await UserModel.find({ email })

        return { name: user.name, surname: user.surname, token };
    },
};

export default AuthService;

// const { id: sub, name } = body; 'id: sub' is renaming the id property to sub