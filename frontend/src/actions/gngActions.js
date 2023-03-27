import {GNG_DETAILS_REQUEST, GNG_DETAILS_SUCCESS, GNG_DETAILS_FAIL,
    GNG_LIST_FAIL,GNG_LIST_REQUEST,GNG_LIST_SUCCESS } from "../constants/gngConstants"
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
};

export const detailsGng = (id) => async (dispatch) => {
    dispatch({ type:GNG_DETAILS_REQUEST, payload:id });
    try {
      const {data}  = await Axios.get(`/api/Gng/${id}`);
      dispatch({ type:GNG_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type:GNG_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };