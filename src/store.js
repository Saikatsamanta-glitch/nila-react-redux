import { createStore } from "redux";
import { counter_function } from "./reducer_function";

const store = createStore(counter_function);
export default store;