import {
    ALL_RPODUCT_REQUEST,
    ALL_RPODUCT_SUCESS,
    ALL_RPODUCT_FAIL,
    CLEAR_ERRORS
} from "../constants/productConstrants"



export const productReducer = (state = { Products: [] }, action) => {

    switch (action.type) {
        case ALL_RPODUCT_REQUEST:
            return {
                loading: true,
                products: [],
            };
        case ALL_RPODUCT_SUCESS:
            return {
                loading: false,
                products: action.payload.products,
                productsCount: action.payload.productsCounts,
            };
        case ALL_RPODUCT_FAIL:
            return {
                loading: false,
                error: action.payload
            };
        case CLEAR_ERRORS:
            return {
                ...state,
                error: null
            };



        default:
            return state;
    }

}