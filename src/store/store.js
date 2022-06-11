import { legacy_createStore, 
applyMiddleware, combineReducers, 
compose } from "redux"


import { feedreducer } from "./feed/feed.reducer";
import { authreducer } from "./auth/auth.reducer";
import thunk from "redux-thunk";


// export const store = legacy_createStore(combineReducers({

//     auth: authreducer,
//     feed: feedreducer,
// }));

const rootreducer = combineReducers({
    auth: authreducer,
    feed: feedreducer
})  
export const store = legacy_createStore(rootreducer, applyMiddleware(thunk));