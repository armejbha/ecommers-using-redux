import { actionType } from "../constant/actionType"

export const setProductAction = (products) => {
    return {
        type: actionType.SET_PRODUCTS,
        playload: products,
    }
}
export const selectedProductAction = (product) => {
    return {
        type: actionType.SELECTED_PRODUCTS,
        playload: product,
    }
}
export const removeProductAction = () => {
    return {
        type: actionType.REMOVE_PRODUCTS,
    }
}