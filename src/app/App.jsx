// NEW
import { Provider } from "react-redux";
import store from "./store";
//NEW
import TransactionHistory from "../features/transactions/TransactionHistory";
import Transactions from "../features/transactions/Transactions";

import "./app.css";

// TODO: Import the Redux store and provide it to this component using <Provider>.
export default function App() {
  return (
    //NEW
    <Provider store={store}>
      //NEW
    <main>
      <h1>Bank Account</h1>
      <Transactions />
      <TransactionHistory />
    </main>
    //NEW
    </Provider>
    //NEW
  );
}
