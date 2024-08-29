import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { ADD_TODO } from "../actions/actionTypes";
import { toggle, deleteTodo, toggle } from "../actions/action";
import { Modal } from "../components/Modal";

const Todo = () => {
  const [visible, setVisible] = useState(false);
  const [id, setId] = useState(null);
  const dispatch = useDispatch();
  const todoData = useSelector((state) => state.todo);
  return (
    <div className="w-3/5 mx-auto">
      <button
        className="w-full bg-cyan-200 text-rose-950 hover:bg-cyan-400"
        onClick={() => setVisible(true)}
      >
        add
      </button>
      <table className="w-full border-collapse border border-slate-500 mx-auto text-center">
        <thead>
          <tr>
            <th className="border border-slate-600 ">no</th>
            <th className="border border-slate-600 ">result</th>
            <th className="border border-slate-600 ">task</th>
            <th className="border border-slate-600 ">option</th>
          </tr>
        </thead>
        <tbody>
          {todoData.map((value, index) => (
            <tr key={index}>
              <td className="border border-slate-700 ">{index + 1}</td>
              <td className="border border-slate-700 ">
                <input
                  type="checkbox"
                  value={value.completed}
                  onChange={() => {
                    dispatch(toggle(index));
                  }}
                ></input>
              </td>
              <td className="border border-slate-700 ">{value.task}</td>
              <td className="border border-slate-700 ">
                <button
                  className="mx-1 underline hover:text-blue-900"
                  onClick={() => {
                    setVisible(true);
                    setId(index);
                  }}
                >
                  update
                </button>
                <button
                  className="underline hover:text-blue-900"
                  onClick={() => dispatch(deleteTodo(index))}
                >
                  delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Modal
        visible={visible}
        setVisible={() => setVisible()}
        id={id}
        setId={() => setId()}
      ></Modal>
    </div>
  );
};

export default Todo;
