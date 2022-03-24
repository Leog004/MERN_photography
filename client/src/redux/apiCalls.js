import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./UserRedux"


export const login = async (dispatch, user) =>{
    dispatch(loginStart());

    try{

        const res = await publicRequest.post('/users/login', user);

        dispatch(loginSuccess(res.data));

        

    }catch(err){
        dispatch(loginFailure());
    }
}