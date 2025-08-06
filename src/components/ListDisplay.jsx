import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';

function ListDisplay() {
  const [lists, setLists] = useState([]);

  const fetchLists = async () => {
    const querySnapshot = await getDocs(collection(db, 'lists'));
    const listsArray = querySnapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));
    setLists(listsArray);
  };

  useEffect(() => {
    fetchLists();
  }, []);

  return (
    <div>
      <h2>Your Lists</h2>
      <ul>
        {lists.map(list => (
          <li key={list.id}>{list.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default ListDisplay;
