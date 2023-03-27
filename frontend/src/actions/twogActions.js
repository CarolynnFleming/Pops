import { TWOG_DETAILS_REQUEST, TWOG_DETAILS_SUCCESS, TWOG_DETAILS_FAIL,
    TWOG_LIST_FAIL, TWOG_LIST_REQUEST, TWOG_LIST_SUCCESS } from "../constants/twogConstants"
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
};

export const detailsTwog = (id) => async (dispatch) => {
    dispatch({ type:TWOG_DETAILS_REQUEST, payload:id });
    try {
      const {data}  = await Axios.get(`/api/twog/${id}`);
      dispatch({ type:TWOG_DETAILS_SUCCESS, payload: data });
    } catch (error) {
      dispatch({
        type:TWOG_DETAILS_FAIL,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.message,
      });
    }
  };
