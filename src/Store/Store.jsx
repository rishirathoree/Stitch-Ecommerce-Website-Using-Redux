import { applyMiddleware, combineReducers, createStore } from "redux"
import thunk from "redux-thunk"
import { composeWithDevTools } from 'redux-devtools-extension';
import { wishlistReducer } from "../Reducers/Wishlistreducer";
import { cartReducer } from "../Reducers/Cartreducer";
import { productdisplayreducer } from "../Reducers/Productdisplayreducer";
import { datareducer } from "../Reducers/Datareducer";


const reducer = combineReducers({
    // add reducers over here
    wishlist : wishlistReducer,
    cart : cartReducer,
    product : productdisplayreducer ,
    data : datareducer
})
const Initialstate = []
const middleware = [thunk]
const store = createStore(
    reducer,
    Initialstate,
    composeWithDevTools(applyMiddleware(...middleware))
)
export default store;
