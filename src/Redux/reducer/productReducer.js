import { actionType } from "../constant/actionType";

const initialState = {
    products: [],
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_PRODUCTS:
            return {
                ...state,
                products: action.playload,
            };
        default:
            return state;
    }
}

export const selectedProductReducer = (state = {}, { type, playload }) => {
    switch (type) {
        case actionType.SELECTED_PRODUCTS:
            return {
                ...state,
                ...playload,
            };
        case actionType.REMOVE_PRODUCTS:
            return {};

        default:
            return state;
    }
}