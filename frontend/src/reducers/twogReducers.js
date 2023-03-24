import { TWOG_LIST_FAIL, TWOG_LIST_REQUEST, TWOG_LIST_SUCCESS } from "../constants/twogConstants";

export const twogListReducer = (state = { loading: true, twog: [] } , action) => {
switch (action.type) {
    case TWOG_LIST_REQUEST:
        return { loading: true };
        case TWOG_LIST_SUCCESS:
            return { loading: false, twog: action.payload };
        case TWOG_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
}
};