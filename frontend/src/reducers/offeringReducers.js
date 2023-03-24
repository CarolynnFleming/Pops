import { OFFERING_LIST_REQUEST } from "../constants/offeringConstants";

const offeringListReducer = (state, action) => {
switch (action.type) {
    case OFFERING_LIST_REQUEST:
        return { loading: true };
        default:
            return state
}
};