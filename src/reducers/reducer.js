import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "../actions/actionTypes";
import { combineReducers } from "redux";
const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      state = [...state, action.data];
      return state;
    case DELETE_TODO:
      state.splice(action.id, 1);
      return state;
    case UPDATE_TODO:
      state[action.data.id].task = action.data.task;
      return state;
    case COMPLETE_TODO:
      state[action.id].completed = !state[action.id].completed;
      return state;
    default:
      return state;
  }
};

const rootReducer = combineReducers({
  todo: reducer,
});
export default rootReducer;
