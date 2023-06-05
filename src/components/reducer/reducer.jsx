import { increment, decrement, reset } from "../constants/counterConstant";
const initialCounterState = {
  count: 0,
};
const counterReducer = (state = initialCounterState, action) => {
  switch (action.type) {
    case increment:
      return {
        ...state,
        count: state.count + 1,
      };
    case decrement:
      return {
        ...state,
        count: state.count - 1,
      };
    case reset:
      return {
        ...state,
        count: 0,
      };

    default:
      return state;
  }
};

export default counterReducer;
