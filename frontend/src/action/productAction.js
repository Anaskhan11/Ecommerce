import axios from "axios";
import {
    ALL_RPODUCT_REQUEST,
    ALL_RPODUCT_SUCESS,
    ALL_RPODUCT_FAIL,
    CLEAR_ERRORS
} from "../constants/productConstrants"

export const getProduct = () => async (dispatch) => {

    try {
        dispatch({ type: ALL_RPODUCT_REQUEST });

        const { data } = await axios.get("/api/v1/products");

        dispatch({
            type: ALL_RPODUCT_SUCESS,
            payload: data
        });

    } catch (error) {
        dispatch({
            type: ALL_RPODUCT_FAIL,
            payload: error.response.data.message,
        });
    }
}
// Clear Errors
export const clearErrors = () => async (dispatch) => {
    dispatch({
        type: CLEAR_ERRORS
    })

}