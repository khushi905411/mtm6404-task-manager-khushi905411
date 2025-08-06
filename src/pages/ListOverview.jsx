import React, { useState } from "react";
import { useTasks } from "../context/TaskContext";
import { Link } from "react-router-dom";

export default function ListOverview() {
  const { lists, addList, deleteList } = useTasks();
  const [listName, setListName] = useState("");

  const handleAdd = async (e) => {
    e.preventDefault();
    if (!listName.trim()) return;

    try {
      await addList(listName);
      setListName("");
    } catch (error) {
      console.error("Failed to add list:", error);
    }
  };

  return (
    <div className="container">
      <h2>All Task Lists</h2>

      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="New list name"
          value={listName}
          onChange={(e) => setListName(e.target.value)}
        />
        <button className="btn add" type="submit">
          Add List
        </button>
      </form>

      {lists === undefined ? (
        <p>Loading lists...</p>
      ) : lists.length === 0 ? (
        <p>No lists yet. Add one above.</p>
      ) : (
        <ul>
          {lists.map((list) => (
            <li key={list.id} className="list-box">
              <Link to={`/list/${list.id}`}>{list.name}</Link>
              <button
                className="btn delete"
                onClick={() => deleteList(list.id)}
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
