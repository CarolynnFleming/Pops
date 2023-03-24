import { THREEG_LIST_FAIL, THREEG_LIST_REQUEST, THREEG_LIST_SUCCESS } from "../constants/threegConstants";

export const threegListReducer = (state = { loading: true, threeg: [] } , action) => {
switch (action.type) {
    case THREEG_LIST_REQUEST:
        return { loading: true };
        case THREEG_LIST_SUCCESS:
            return { loading: false, threeg: action.payload };
        case THREEG_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
}
};