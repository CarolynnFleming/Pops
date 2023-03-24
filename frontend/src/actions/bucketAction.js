import { BUCKET_LIST_FAIL, BUCKET_LIST_REQUEST, BUCKET_LIST_SUCCESS } from "../constants/bucketConstants"
import Axios from 'axios';
export const listBucket = () => async (dispatch) => {
    dispatch({
        type: BUCKET_LIST_REQUEST,
    });
    try{
        const { data } = await Axios.get('/api/bucket');
        dispatch({ type: BUCKET_LIST_SUCCESS, payload: data });
    }catch(error){
      dispatch({ type: BUCKET_LIST_FAIL, payload: error.message });  
    }
}