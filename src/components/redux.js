// // import redux from "redux";

// const redux = require("redux");
// const reduxLogger = require("redux-logger");

// const createStore = redux.createStore;
// const combineReducer = redux.combineReducers;
// const applyMiddleware = redux.applyMiddleware;
// const logger = reduxLogger.createLogger();

// const BUY_CAKE = "BUY_CAKE";
// const BUY_JUICE = "BUY_JUICE";

// const buyCake = () => {
//   return {
//     type: BUY_CAKE,
//     info: "First redux action",
//   };
// };

// const buyJuice = () => {
//   return {
//     type: BUY_JUICE,
//     info: "First redux action",
//   };
// };

// const initialCakeState = {
//   numberOfCake: 10,
// };
// const initialJuiceState = {
//   numberOfJuice: 20,
// };

// // const reducer = (state = initialState, action) => {
// //   switch (action.type) {
// //     case BUY_CAKE:
// //       return {
// //         ...state,
// //         numberOfCake: state.numberOfCake - 1,
// //       };
// //     default:
// //       return state;
// //   }
// // };
// const cakeReducer = (state = initialCakeState, action) => {
//   switch (action.type) {
//     case BUY_CAKE:
//       return {
//         ...state,
//         numberOfCake: state.numberOfCake - 1,
//       };
//     default:
//       return state;
//   }
// };

// const juiceReducer = (state = initialJuiceState, action) => {
//   switch (action.type) {
//     case BUY_JUICE:
//       return {
//         ...state,
//         numberOfJuice: state.numberOfJuice - 1,
//       };
//     default:
//       return state;
//   }
// };

// reducer = combineReducer({
//   cake: cakeReducer,
//   juice: juiceReducer,
// });
// const store = createStore(reducer, applyMiddleware(logger));
// console.log("Initial state", store.getState());
// const unsubscribe = store.subscribe(
//   () => {}
//   //   console.log("Update store", store.getState())
// );
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyCake());
// store.dispatch(buyJuice());
// store.dispatch(buyJuice());
// unsubscribe();
