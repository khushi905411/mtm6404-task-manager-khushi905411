import { createContext, useContext, useEffect, useState } from "react";
import {
  collection,
  onSnapshot,
  addDoc,
  deleteDoc,
  doc,
  updateDoc,
} from "firebase/firestore";
import { db } from "../firebase";

export const TaskContext = createContext();

export function useTasks() {
  return useContext(TaskContext);
}

export function TaskProvider({ children }) {
  const [lists, setLists] = useState([]);
  const listsCollectionRef = collection(db, "lists");

  useEffect(() => {
    const unsubscribe = onSnapshot(listsCollectionRef, (snapshot) => {
      const listsData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setLists(listsData);
    });
    return unsubscribe;
  }, []);

  const addList = async (name) => {
    await addDoc(listsCollectionRef, { name, tasks: [] });
  };

  const deleteList = async (id) => {
    const listDoc = doc(db, "lists", id);
    await deleteDoc(listDoc);
  };

  const updateTasks = async (listId, tasks) => {
    const listDoc = doc(db, "lists", listId);
    await updateDoc(listDoc, { tasks });
  };

  return (
    <TaskContext.Provider value={{ lists, addList, deleteList, updateTasks }}>
      {children}
    </TaskContext.Provider>
  );
}
