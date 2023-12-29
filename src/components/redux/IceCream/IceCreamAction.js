import { BUY_ICECREAM } from "./IceCreamType";

export const buyIceCream = (number = 1) => {
  return {
    type: BUY_ICECREAM,
    payload: number,
  };
};
