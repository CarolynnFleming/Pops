import { THREEG_DETAILS_REQUEST, THREEG_DETAILS_SUCCESS, THREEG_DETAILS_FAIL,
    THREEG_LIST_FAIL, THREEG_LIST_REQUEST, THREEG_LIST_SUCCESS } from "../constants/threegConstants";

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

export const threegDetailsReducer = (
    state = { threeg: {}, loading: true },
    action
  ) => {

    switch (action.type) {
      case THREEG_DETAILS_REQUEST:
        return { loading: true };
      case THREEG_DETAILS_SUCCESS:
       
        return { loading: false, threeg: action.payload };
      case THREEG_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
