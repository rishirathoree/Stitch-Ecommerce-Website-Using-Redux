import { SHOW_CURRENT_PRODUCT } from "../actions/Productsdisplayaction";


export const productdisplayreducer = (state=[],action) => {
    switch (action.type) {
        case SHOW_CURRENT_PRODUCT:
            return [...state,action.payload]
        default:
        return state;
    }
}