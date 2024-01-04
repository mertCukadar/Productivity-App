import React, { createContext, useContext, useState } from "react";

const TodoContext = createContext();

function TodoProvider({ children }) {
  const [todoData, setTodoData] = useState([]);
  const [modelVisible , setModelVisible] = useState(false);

  const updateTodoData = (newData) => {
    setTodoData(newData);
  };

  const toggleModelVisible = () => {
    setModelVisible(!modelVisible);
  };


  return (
    <TodoContext.Provider value={{ 
      todoData, 
      updateTodoData,
      modelVisible, 
      setModelVisible,
      toggleModelVisible, }}>
      {children}
    </TodoContext.Provider>
  );
}

export { TodoContext , TodoProvider};
