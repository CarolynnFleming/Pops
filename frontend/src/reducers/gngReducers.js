import {GNG_DETAILS_REQUEST, GNG_DETAILS_SUCCESS, GNG_DETAILS_FAIL,
    GNG_LIST_FAIL,GNG_LIST_REQUEST,GNG_LIST_SUCCESS } from "../constants/gngConstants";

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

export const gngDetailsReducer = (
    state = { gng: {}, loading: true },
    action
  ) => {
    console.log(action, 'type');
    switch (action.type) {
      case GNG_DETAILS_REQUEST:
        return { loading: true };
      case GNG_DETAILS_SUCCESS:
        return { loading: false, gng: action.payload };
      case GNG_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
