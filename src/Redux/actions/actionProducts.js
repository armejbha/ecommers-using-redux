import { actionType } from "../constant/ActionType"

const setProductAction = (products) => {
    return {
        type: actionType.SET_PRODUCTS,
        playload: products,
    }
}
const selectedProductAction = (product) => {
    return {
        type: actionType.SELECTED_PRODUCTS,
        playload: product,
    }
}