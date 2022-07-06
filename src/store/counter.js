import { createSlice } from "@reduxjs/toolkit";
//import { createStore } from "redux";

const initailCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
  name: "counter",
  initailState: initailCounterState,
  reducers: {
    increment(state) {
      state.counter++;
    },
    decrement(state) {
      state.counter--;
    },
    increase(state, action) {
      state.counter = state.counter + action.payload;
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter;
    },
  },
});

/*const counterReducer = (state = initailState, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "increase") {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter,
    };
  }
  if (action.type === "toggle") {
    return {
      counter: state.counter,
      showCounter: !state.showCounter,
    };
  }

  return state;
};*/

//const store = createStore(counterReducer);

export const counterActions = counterSlice.actions;

export default counterSlice.reducer;
