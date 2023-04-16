import { ADD_TO_CART, REMOVE_CART_ITEMS, TOTAL_CART_PRICE } from "../actions/Cartaction";

// Get the initial state from local storage or use an empty array if no data is found
const initialState = JSON.parse(localStorage.getItem("cartItems")) || [];

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      const checkItemsExist = state.findIndex((item) => item.id === action.payload.id);
      if (checkItemsExist !== -1) {
        // If the item already exists in the cart, remove it from the current state and add it again
        const updatedCurrentItems = [...state];
        updatedCurrentItems.splice(checkItemsExist, 1);
        const newState = [...updatedCurrentItems, action.payload];
        // Update the local storage with the new state
        localStorage.setItem("cartItems", JSON.stringify(newState));
        return newState;
      } else {
        // If the item doesn't exist in the cart, add it to the current state
        const newState = [...state, action.payload];
        // Update the local storage with the new state
        localStorage.setItem("cartItems", JSON.stringify(newState));
        return newState;
      }

    case REMOVE_CART_ITEMS:
      // Return a new state without the item to be removed
      const newState = state.filter((item) => item.id !== action.payload);
      // Update the local storage with the new state
      localStorage.setItem("cartItems", JSON.stringify(newState));
      return newState;

      case TOTAL_CART_PRICE:
      const totalPrice = action.payload.reduce((accumulator, item) => accumulator + item.price, 0);
      localStorage.setItem("cartItems", JSON.stringify(totalPrice));
      return totalPrice
      
    default:
      return state;
  }
};
