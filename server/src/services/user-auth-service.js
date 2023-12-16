import generateToken from "../utils/jwt.js";

const AuthService = {
    async login(body){
		/**
		 * body = {
		 * 	username: "username",
		 * 	password: "password",
		 * 	id: "id",
		 * 	admin: "admin",
		 * 	name: "name",
		 * 	surname: "surname"
		 * }
		 */
        const name = body.name;
		const surname = body.surname;
		
        const token = await generateToken(body);

        return { name, surname, bearer_token: token };
    },
};

export default AuthService;
