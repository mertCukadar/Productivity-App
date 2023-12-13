import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todoData, setTodoData] = useState([]);
  const [modelVisible , setModelVisible] = useState(false);

  const updateTodoData = (newData) => {
    setTodoData(newData);
  };

  return (
    <TodoContext.Provider value={{ todoData, updateTodoData , modelVisible , setModelVisible }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext , TodoProvider};
