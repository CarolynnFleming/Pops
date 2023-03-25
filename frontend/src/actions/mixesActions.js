import {MIXES_DETAILS_REQUEST, MIXES_DETAILS_SUCCESS, MIXES_DETAILS_FAIL,
    MIXES_LIST_FAIL,MIXES_LIST_REQUEST,MIXES_LIST_SUCCESS } from "../constants/mixesConstants"
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
};

export const detailsMixes = (_id) => async (dispatch) => {
    dispatch({ type:MIXES_DETAILS_REQUEST, payload:_id });
    try {
      const {data}  = await Axios.get(`/api/mixesbags/${_id}`);
      dispatch({ type:MIXES_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type:MIXES_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };