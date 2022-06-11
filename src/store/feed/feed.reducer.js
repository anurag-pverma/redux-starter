
const initialState = {
    getFeeds: {
        loading: false,
        error: false,
    },
    data : [],

}


export const  feedreducer = (state= initialState, {type , payloaad})=>{

    switch(type){
        default:{
            return state;
        }
    }
}