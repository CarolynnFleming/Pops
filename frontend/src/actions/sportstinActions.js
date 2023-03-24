import { SPORTSTIN_LIST_FAIL, SPORTSTIN_LIST_REQUEST, SPORTSTIN_LIST_SUCCESS } from "../constants/sportstinConstants"
import Axios from 'axios';
export const listSportstin = () => async (dispatch) => {
    dispatch({
        type: SPORTSTIN_LIST_REQUEST,
    });
    try{
        const { data } = await Axios.get('/api/sportstin');
        dispatch({ type: SPORTSTIN_LIST_SUCCESS, payload: data });
    }catch(error){
      dispatch({ type: SPORTSTIN_LIST_FAIL, payload: error.message });  
    }
}