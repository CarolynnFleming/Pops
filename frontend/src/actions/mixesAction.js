import {MIXES_LIST_FAIL,MIXES_LIST_REQUEST,MIXES_LIST_SUCCESS } from "../constants/mixesConstants"
import Axios from 'axios';
export const listMixes = () => async (dispatch) => {
    dispatch({
        type: MIXES_LIST_REQUEST,
    });
    try{
        const { data } = await Axios.get('/api/mixesbags');
        dispatch({ type: MIXES_LIST_SUCCESS, payload: data });
    }catch(error){
      dispatch({ type: MIXES_LIST_FAIL, payload: error.message });  
    }
}