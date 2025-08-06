// src/services/taskService.js
import { db } from "../firebase";
import {
  collection,
  doc,
  getDocs,
  setDoc,
  updateDoc,
  deleteDoc
} from "firebase/firestore";

const listsCollection = collection(db, "lists");

// Get all lists from Firestore
export const getLists = async () => {
  const snapshot = await getDocs(listsCollection);
  return snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
};

// Add a new list to Firestore
export const addList = async (list) => {
  const newDoc = doc(db, "lists", list.id.toString());
  await setDoc(newDoc, { name: list.name, tasks: [] });
};

// Delete a list from Firestore
export const deleteList = async (id) => {
  const listDoc = doc(db, "lists", id.toString());
  await deleteDoc(listDoc);
};

// Update tasks inside a list
export const updateTasks = async (listId, tasks) => {
  const listDoc = doc(db, "lists", listId.toString());
  await updateDoc(listDoc, { tasks });
};
