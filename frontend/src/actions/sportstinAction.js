import { OFFERING_LIST_FAIL, OFFERING_LIST_REQUEST, OFFERING_LIST_SUCCESS } from "../constants/offeringConstants"
import Axios from 'axios';
export const listOfferings = () => async (dispatch) => {
    dispatch({
        type: OFFERING_LIST_REQUEST,
    });
    try{
        const { data } = await Axios.get('/api/offerings');
        dispatch({ type: OFFERING_LIST_SUCCESS, payload: data });
    }catch(error){
      dispatch({ type: OFFERING_LIST_FAIL, payload: error.message });  
    }
}