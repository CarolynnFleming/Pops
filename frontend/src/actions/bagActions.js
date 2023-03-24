import { BAG_LIST_FAIL, BAG_LIST_REQUEST, BAG_LIST_SUCCESS } from "../constants/bagConstants"
import Axios from 'axios';
export const listBag = () => async (dispatch) => {
    dispatch({
        type: BAG_LIST_REQUEST,
    });
    try{
        const { data } = await Axios.get('/api/bags');
        dispatch({ type: BAG_LIST_SUCCESS, payload: data });
    }catch(error){
      dispatch({ type: BAG_LIST_FAIL, payload: error.message });  
    }
}