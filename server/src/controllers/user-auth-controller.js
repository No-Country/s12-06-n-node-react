import { AuthService } from '../services/index.js';
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
    // async token(req, res) {
    //     try{
    //         const body = req.body;
    //         const token = await AuthService.token(body);

    //         return res.status(200).json(token);
    //     }catch(e){
    //         handleHttp(res, "ERROR_AUTH", e);
    //     }
    // }
};

export default AuthController;