import {
  ADD_TODO,
  COMPLETE_TODO,
  DELETE_TODO,
  UPDATE_TODO,
} from "./actionTypes";

export function addTodo(data) {
  return {
    type: ADD_TODO,
    data: data,
  };
}
export function deleteTodo(id) {
  return {
    type: DELETE_TODO,
    id: id,
  };
}
export function toggle(id) {
  return {
    type: COMPLETE_TODO,
    id: id,
  };
}
export function updateTodo(data) {
  return {
    type: UPDATE_TODO,
    data: data,
  };
}
