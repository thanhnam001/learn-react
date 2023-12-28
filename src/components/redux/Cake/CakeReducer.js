import { BUY_CAKE } from "./CakeType";

const initialState = {
  numberOfCakes: 10,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_CAKE:
      return {
        ...state,
        numberOfCakes: Math.max(state.numberOfCakes - action.payload, 0),
      };

    default:
      return state;
  }
};

export default reducer;
