import {  ONEG_DETAILS_REQUEST, ONEG_DETAILS_SUCCESS, ONEG_DETAILS_FAIL,
    ONEG_LIST_FAIL, ONEG_LIST_REQUEST, ONEG_LIST_SUCCESS } from "../constants/onegConstants"
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
};

export const detailsOneg = (_id) => async (dispatch) => {
    dispatch({ type:ONEG_DETAILS_REQUEST, payload:_id });
    try {
      const {data}  = await Axios.get(`/api/oneg/${_id}`);
      dispatch({ type:ONEG_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type:ONEG_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };

