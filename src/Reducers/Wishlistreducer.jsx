import { ADD_TO_WISHLIST, REMOVE_WISHLIST_ITEMS } from "../actions/Wishlistaction";

const initialState = [];

export const wishlistReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_WISHLIST:
      const checkItemsExist = state.findIndex((item) => item.id === action.payload.id);
      if (checkItemsExist !== -1) {
        // If the item already exists in the wishlist, remove it from the current state and add it again
        const updatedCurrentItems = [...state];
        updatedCurrentItems.splice(checkItemsExist, 1);
        return [...updatedCurrentItems, action.payload];
      } else {
        // If the item doesn't exist in the wishlist, add it to the current state
        return [...state, action.payload];
      }

    case REMOVE_WISHLIST_ITEMS:
      // Return a new state without the item to be removed
      return state.filter((item) => item.id !== action.payload);

    default:
      return state;
  }
};
