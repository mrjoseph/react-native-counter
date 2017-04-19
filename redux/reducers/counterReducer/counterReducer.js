import { INCREMENT, DECREMENT } from '../../actions/counterAction/counterAction';

// Reducer
const INITIAL_STATE = {
  count: 0,
};
const countReducer = (state = INITIAL_STATE, action = {}) => {
  switch (action.type) {
    case INCREMENT:
      return {
        ...state,
        count: action.payload < 10 ? action.payload + 1 : action.payload,
      };
    case DECREMENT:
      return {
        ...state,
        count: action.payload > 0 ? action.payload - 1 : action.payload,
      };
    default:
      return state;
  }
};

export default countReducer;
