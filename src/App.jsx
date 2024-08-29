import React from "react";

import store from "./store";
import { Provider } from "react-redux";
import Todo from "./pages/Todo";

function App() {
  return (
    <Provider store={store}>
      <Todo></Todo>
    </Provider>
  );
}

export default App;
