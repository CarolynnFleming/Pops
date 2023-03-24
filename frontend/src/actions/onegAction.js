import { ONEG_LIST_FAIL, ONEG_LIST_REQUEST, ONEG_LIST_SUCCESS } from "../constants/onegConstants"
import Axios from 'axios';
export const listOneg = () => async (dispatch) => {
    dispatch({
        type: ONEG_LIST_REQUEST,
    });
    try{
        const { data } = await Axios.get('/api/oneg');
        dispatch({ type: ONEG_LIST_SUCCESS, payload: data });
    }catch(error){
      dispatch({ type: ONEG_LIST_FAIL, payload: error.message });  
    }
}
