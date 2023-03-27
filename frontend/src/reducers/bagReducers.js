import { BAG_DETAILS_REQUEST,
    BAG_DETAILS_SUCCESS,
    BAG_DETAILS_FAIL,BAG_LIST_FAIL, BAG_LIST_REQUEST, BAG_LIST_SUCCESS } from "../constants/bagConstants";

export const bagListReducer = (state = { loading: true, bag: [] } , action) => {
switch (action.type) {
    case BAG_LIST_REQUEST:
        return { loading: true };
        case BAG_LIST_SUCCESS:
            return { loading: false, bag: action.payload };
        case BAG_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
}
};
export const bagDetailsReducer = (
    state = { bag: {}, loading: true },
    action
  ) => {
    // console.log(action, 'type');
    switch (action.type) {
      case BAG_DETAILS_REQUEST:
        return { loading: true };
      case BAG_DETAILS_SUCCESS:
        // console.log('bag', action.payload);
        return { loading: false, bag: action.payload };
      case BAG_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };

