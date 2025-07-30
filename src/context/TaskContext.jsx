import { createContext, useState, useEffect } from "react";

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [lists, setLists] = useState(() => {
    const saved = localStorage.getItem("lists");
    return saved ? JSON.parse(saved) : [];
  });

  useEffect(() => {
    localStorage.setItem("lists", JSON.stringify(lists));
  }, [lists]);

  const addList = (name) => {
    setLists([...lists, { id: Date.now(), name, tasks: [] }]);
  };

  const deleteList = (id) => {
    setLists(lists.filter((list) => list.id !== id));
  };

  const updateTasks = (listId, tasks) => {
    setLists(lists.map((list) =>
      list.id === listId ? { ...list, tasks } : list
    ));
  };

  return (
    <TaskContext.Provider value={{ lists, addList, deleteList, updateTasks }}>
      {children}
    </TaskContext.Provider>
  );
};
