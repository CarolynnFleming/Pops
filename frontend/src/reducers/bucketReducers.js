import { BUCKET_DETAILS_REQUEST, BUCKET_DETAILS_SUCCESS, BUCKET_DETAILS_FAIL,
    BUCKET_LIST_FAIL, BUCKET_LIST_REQUEST, BUCKET_LIST_SUCCESS } from "../constants/bucketConstants";

export const bucketListReducer = (state = { loading: true, bucket: [] } , action) => {
switch (action.type) {
    case BUCKET_LIST_REQUEST:
        return { loading: true };
        case BUCKET_LIST_SUCCESS:
            return { loading: false, bucket: action.payload };
        case BUCKET_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
}
};

export const bucketDetailsReducer = (
    state = { bucket: {}, loading: true },
    action
  ) => {
    
    switch (action.type) {
      case BUCKET_DETAILS_REQUEST:
        return { loading: true };
      case BUCKET_DETAILS_SUCCESS:
        
        return { loading: false, bucket: action.payload };
      case BUCKET_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
