import { combineReducers } from "redux";
import sagaReducer from "./saga/reducer";
import thunkReducer from "./thunk/reducer";
/**
 * @description 接收 saga 和 thunk 的合集
 * @default 接收的 reducer 返回的 state对象不能是 undefined
 */
export default combineReducers({
  ...sagaReducer,
  ...thunkReducer,
});
