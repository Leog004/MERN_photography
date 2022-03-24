import { publicRequest } from "../requestMethod";
import { loginFailure, loginStart, loginSuccess } from "./UserRedux"


export const login = async (dispatch, user, setshowModel, setSuccess) =>{
    dispatch(loginStart());

    try{

        const res = await publicRequest.post('/users/login', user);

        setshowModel(true);
        setSuccess(true);

        setTimeout(() => {
            dispatch(loginSuccess(res.data));
        }, 2000);

    }catch(err){
        setshowModel(true);
        setSuccess(false);
        dispatch(loginFailure());
    }
}