import { THREEG_LIST_FAIL, THREEG_LIST_REQUEST, THREEG_LIST_SUCCESS } from "../constants/threegConstants"
import Axios from 'axios';
export const listThreeg = () => async (dispatch) => {
    dispatch({
        type: THREEG_LIST_REQUEST,
    });
    try{
        const { data } = await Axios.get('/api/threeg');
        dispatch({ type: THREEG_LIST_SUCCESS, payload: data });
    }catch(error){
      dispatch({ type: THREEG_LIST_FAIL, payload: error.message });  
    }
}