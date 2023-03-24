import { BUCKET_LIST_FAIL, BUCKET_LIST_REQUEST, BUCKET_LIST_SUCCESS } from "../constants/bucketConstants";

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