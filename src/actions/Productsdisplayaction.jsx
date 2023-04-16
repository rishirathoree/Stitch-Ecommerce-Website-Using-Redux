export const SHOW_CURRENT_PRODUCT = 'SHOW_CURRENT_PRODUCT'

export const displaythisproduct = (items) => {
    return(
        {type:'SHOW_CURRENT_PRODUCT',payload:items}
    )
}