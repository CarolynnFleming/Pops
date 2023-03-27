import {MIXES_DETAILS_REQUEST, MIXES_DETAILS_SUCCESS, MIXES_DETAILS_FAIL,
     MIXES_LIST_FAIL, MIXES_LIST_REQUEST, MIXES_LIST_SUCCESS } from "../constants/mixesConstants";

export const mixesListReducer = (state = { loading: true, mixes: [] } , action) => {
switch (action.type) {
    case MIXES_LIST_REQUEST:
        return { loading: true };
        case MIXES_LIST_SUCCESS:
            return { loading: false, mixes: action.payload };
        case MIXES_LIST_FAIL:
            return { loading: false, error: action.payload };
        default:
            return state
}
};
export const mixesDetailsReducer = (
    state = { mixes: {}, loading: true },
    action
  ) => {
    console.log(action, 'type');
    switch (action.type) {
      case MIXES_DETAILS_REQUEST:
        return { loading: true };
      case MIXES_DETAILS_SUCCESS:
        return { loading: false, mixes: action.payload };
      case MIXES_DETAILS_FAIL:
        return { loading: false, error: action.payload };
      default:
        return state;
    }
  };
