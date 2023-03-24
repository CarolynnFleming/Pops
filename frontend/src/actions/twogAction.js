import { TWOG_LIST_FAIL, TWOG_LIST_REQUEST, TWOG_LIST_SUCCESS } from "../constants/twogConstants"
import Axios from 'axios';
export const listTwog = () => async (dispatch) => {
    dispatch({
        type: TWOG_LIST_REQUEST,
    });
    try{
        const { data } = await Axios.get('/api/twog');
        dispatch({ type: TWOG_LIST_SUCCESS, payload: data });
    }catch(error){
      dispatch({ type: TWOG_LIST_FAIL, payload: error.message });  
    }
}