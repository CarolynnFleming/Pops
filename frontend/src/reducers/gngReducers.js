import {GNG_LIST_FAIL,GNG_LIST_REQUEST,GNG_LIST_SUCCESS } from "../constants/gngConstants";

export const gngListReducer = (state = { loading: true, gng: [] } , action) => {
switch (action.type) {
    case GNG_LIST_REQUEST:
        return { loading: true };
        case GNG_LIST_SUCCESS:
            return { loading: false, gng: action.payload };
        case GNG_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
}
};