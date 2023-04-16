export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_CART_ITEMS = 'REMOVE_CART_ITEMS'
export const TOTAL_CART_PRICE = 'TOTAL_CART_PRICE'

export const addToCart = (items) => {
    return(
        {type:'ADD_TO_CART',payload:items}
    )
}

export const removeItemsCart = (id) => {
    return(
        {type:'REMOVE_CART_ITEMS',payload:id}
    )
}

export const totalPriceAdd = (cart) => {
    return(
        {type:'TOTAL_CART_PRICE',payload:cart}
    )
}