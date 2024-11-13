import { configureStore } from "@reduxjs/toolkit";
// NEW
import transactionsReducer from "../features/transactions/transactionsSlice";
// NEW
// TODO: Configure the store to use the reducer from the transactions slice.
//OLD
// const store = configureStore();
//OLD
//NEW
const store = configureStore({
    reducer: {
      transactions: transactionsReducer,
    },
  });
  //NEW

export default store;
