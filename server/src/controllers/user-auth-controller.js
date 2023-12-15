import { AuthService } from '../services/auth-service.js';
import { handleHttp } from '../utils/error-handle.js';

const AuthController = {
    async login(req, res) {
        try{
            const body = req.body;
            const user = await AuthService.login(body);
           
            return res.status(200).json(user);
        }catch(e){
            handleHttp(res, "ERROR_LOGIN", e);
        }
    },
};

export default AuthController;