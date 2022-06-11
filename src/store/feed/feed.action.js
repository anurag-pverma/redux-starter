import axios from "axios";
import { GET_FEEDS_LOADING ,
     GET_FEEDS_SUCCESS , 
      GET_FEEDS_ERROR} from "./feed.type";




export const getFeeds = ()=>(dispatch)=>{
    dispatch({ type: GET_FEEDS_LOADING});
    axios.get("http://localhost:8000/feeds")
    .then ((r)=>{
        dispatch({ type: GET_FEEDS_SUCCESS, payload: r.data});
        
    })
    .catch(()=>{

        dispatch({ type: GET_FEEDS_ERROR});
    })
}