import {GNG_LIST_FAIL,GNG_LIST_REQUEST,GNG_LIST_SUCCESS } from "../constants/gngConstants"
import Axios from 'axios';
export const listGng = () => async (dispatch) => {
    dispatch({
        type: GNG_LIST_REQUEST,
    });
    try{
        const { data } = await Axios.get('/api/Gng');
        dispatch({ type: GNG_LIST_SUCCESS, payload: data });
    }catch(error){
      dispatch({ type: GNG_LIST_FAIL, payload: error.message });  
    }
}