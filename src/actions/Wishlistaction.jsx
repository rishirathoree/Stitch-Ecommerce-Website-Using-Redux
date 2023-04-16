export const ADD_TO_WISHLIST = 'ADD_TO_WISHLIST'
export const REMOVE_WISHLIST_ITEMS = 'REMOVE_WISHLIST_ITEMS'

export const addToWishlist = (items) => {
    return(
        {type:'ADD_TO_WISHLIST',payload:items}
    )
}

export const removeItemsWishlist = (id) => {
    return(
        {type:'REMOVE_WISHLIST_ITEMS',payload:id}
    )
}