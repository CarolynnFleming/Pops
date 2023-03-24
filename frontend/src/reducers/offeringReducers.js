import { OFFERING_LIST_FAIL, OFFERING_LIST_REQUEST, OFFERING_LIST_SUCCESS } from "../constants/offeringConstants";

export const offeringListReducer = (state = { loading: true,offerings: [] } , action) => {
switch (action.type) {
    case OFFERING_LIST_REQUEST:
        return { loading: true };
        case OFFERING_LIST_SUCCESS:
            return { loading: false, offerings: action.payload };
        case OFFERING_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
}
};