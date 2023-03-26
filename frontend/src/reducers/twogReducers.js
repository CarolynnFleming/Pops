import { TWOG_DETAILS_REQUEST, TWOG_DETAILS_SUCCESS, TWOG_DETAILS_FAIL,
    TWOG_LIST_FAIL, TWOG_LIST_REQUEST, TWOG_LIST_SUCCESS } from "../constants/twogConstants";

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

export const twogDetailsReducer = (
    state = { twog: {}, loading: true },
    action
  ) => {
    
    switch (action.type) {
      case TWOG_DETAILS_REQUEST:
        return { loading: true };
      case TWOG_DETAILS_SUCCESS:
        
        return { loading: false, twog: action.payload };
      case TWOG_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
