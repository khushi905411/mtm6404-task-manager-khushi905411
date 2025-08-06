import React, { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc } from 'firebase/firestore';

function ListForm({ onListAdded }) {
  const [listName, setListName] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!listName.trim()) return;

    try {
      await addDoc(collection(db, 'lists'), { name: listName });
      setListName('');
      if (onListAdded) onListAdded();
    } catch (error) {
      console.error('Error adding list:', error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="New list name"
        value={listName}
        onChange={(e) => setListName(e.target.value)}
      />
      <button type="submit">Add List</button>
    </form>
  );
}

export default ListForm;
