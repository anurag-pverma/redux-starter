import { LOGIN_ERROR, LOGIN_LOADING,  LOGIN_SUCCESS, LOGOUT } from "./auth.type";

const initialState = {
    loading : false,
    error: false,
    isAuth: false,
    token : "",
}


export const  authreducer = (state= initialState, {type , payload})=>{

    switch(type){

        case LOGIN_LOADING:{
            return {...state,loading: true, error: false, };  
        }
        case LOGIN_SUCCESS:{
            return {...state, loading: false, error:false, isAuth:true , token:payload.token};
        }
        case LOGIN_ERROR:{
            return {...state};
        }
        case LOGOUT:{
            return {...state};
        }
        default:{
            return state;
        }
     
    }
}

