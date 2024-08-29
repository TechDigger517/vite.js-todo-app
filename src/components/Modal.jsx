import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addTodo, updateTodo } from "../actions/action";

export function Modal({ visible, setVisible, id, setId }) {
  const [task, setTask] = useState();
  const dispatch = useDispatch();
  const addfunc = () => {
    dispatch(addTodo({ task, completed: false }));
    setVisible(false);
  };
  const updatefunc = () => {
    dispatch(updateTodo({ id, task }));
    setId(null);
    setVisible(false);
  };
  return (
    <div
      className="fixed z-10 w-full h-full overflow-auto bg-black/30 top-0 left-0"
      style={{ display: visible ? "block" : "none" }}
    >
      <div className="w-2/5 p-1 mx-auto my-40 bg-white">
        <span
          className="float-right text-lg font-bold text-red-900 bg-gray-500 px-1"
          onClick={() => {
            setVisible(false);
          }}
        >
          &times;
        </span>
        <div>
          task:
          <br />
          <input
            placeholder="type your task"
            onChange={(e) => setTask(e.target.value)}
          ></input>
          <button
            onClick={() => {
              id == null ? addfunc() : updatefunc(id);
            }}
          >
            OK
          </button>
        </div>
      </div>
    </div>
  );
}
