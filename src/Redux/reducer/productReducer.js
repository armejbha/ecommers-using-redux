import { actionType } from "../constant/actionType";

const initialState = {
    products: [
        { id: 1, title: 'you to', catagory: 'programming' },
    ],
};

export const productReducer = (state = initialState, action) => {
    switch (action.type) {
        case actionType.SET_PRODUCTS:
            return state;

        default:
            return state;
    }
}