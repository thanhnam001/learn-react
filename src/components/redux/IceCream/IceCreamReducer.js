import { BUY_ICECREAM } from "./IceCreamType";

const initialState = {
  numberOfIceCreams: 20,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case BUY_ICECREAM:
      return {
        ...state,
        numberOfIceCreams: Math.max(state.numberOfIceCreams - action.payload, 0),
      };

    default:
      return state;
  }
};

export default reducer;
