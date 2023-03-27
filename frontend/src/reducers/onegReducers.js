import { ONEG_DETAILS_REQUEST, ONEG_DETAILS_SUCCESS, ONEG_DETAILS_FAIL,
    ONEG_LIST_FAIL, ONEG_LIST_REQUEST, ONEG_LIST_SUCCESS } from "../constants/onegConstants";

export const onegListReducer = (state = { loading: true, oneg: [] } , action) => {
switch (action.type) {
    case ONEG_LIST_REQUEST:
        return { loading: true };
        case ONEG_LIST_SUCCESS:
            return { loading: false, oneg: action.payload };
        case ONEG_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
}
};

export const onegDetailsReducer = (
    state = { oneg: {}, loading: true },
    action
  ) => {
    
    switch (action.type) {
      case ONEG_DETAILS_REQUEST:
        return { loading: true };
      case ONEG_DETAILS_SUCCESS:
     
        return { loading: false, oneg: action.payload };
      case ONEG_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
