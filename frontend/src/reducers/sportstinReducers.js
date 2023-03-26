import { SPORTSTIN_DETAILS_REQUEST, SPORTSTIN_DETAILS_SUCCESS, SPORTSTIN_DETAILS_FAIL,
    SPORTSTIN_LIST_FAIL, SPORTSTIN_LIST_REQUEST, SPORTSTIN_LIST_SUCCESS } from "../constants/sportstinConstants";

export const sportstinListReducer = (state = { loading: true, sportstin: [] } , action) => {
switch (action.type) {
    case SPORTSTIN_LIST_REQUEST:
        return { loading: true };
        case SPORTSTIN_LIST_SUCCESS:
            return { loading: false, sportstin: action.payload };
        case SPORTSTIN_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
}
};

export const sportstinDetailsReducer = (
    state = { sportstin: {}, loading: true },
    action
  ) => {
    
    switch (action.type) {
      case SPORTSTIN_DETAILS_REQUEST:
        return { loading: true };
      case SPORTSTIN_DETAILS_SUCCESS:
       
        return { loading: false, sportstin: action.payload };
      case SPORTSTIN_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
