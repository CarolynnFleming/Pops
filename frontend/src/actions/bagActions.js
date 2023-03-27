import {  BAG_DETAILS_FAIL,
    BAG_DETAILS_REQUEST,
    BAG_DETAILS_SUCCESS,BAG_LIST_FAIL, BAG_LIST_REQUEST, BAG_LIST_SUCCESS } from "../constants/bagConstants"
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
};

export const detailsBag = (id) => async (dispatch) => {
    dispatch({ type:BAG_DETAILS_REQUEST, payload: id });
    try {
     
      const {data}  = await Axios.get(`/api/bags/${id}`);
      
      dispatch({ type:BAG_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type:BAG_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
