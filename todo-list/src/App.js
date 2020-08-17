import React, { useState, useEffect } from 'react';
import './App.css';

import ListItem from './components/ListItem';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit, faCheck } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  library.add(faTrash, faEdit, faCheck);

  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    text: '',
    key: '',
    notEditing: true,
  });

  useEffect(() => {
    localStorage.setItem('myStoragedItems', items);
  }, [items]);

  function handleInput(e) {
    setCurrentItem({
      text: e.target.value,
      key: Date.now(),
      notEditing: true,
    });
  }

  function addItem(e) {
    e.preventDefault();
    const newItem = currentItem;
    if (newItem.text !== '') {
      const newItems = [...items, newItem];

      setItems(newItems);
      setCurrentItem({
        text: '',
        key: '',
        notEditing: true,
      });
    }
  }

  function deleteItemHandler(key) {
    const filteredItems = items.filter((item) => item.key !== key);
    setItems(filteredItems);
  }

  function setUpdate(text, key) {
    const ITEMS = items;
    ITEMS.map((item) => {
      if (item.key === key) {
        item.text = text;
      }
      return item;
    });

    console.log(ITEMS);
    setItems([...ITEMS]);
  }

  function editingTaskHandler(bool, key) {
    const oldMappedItems = items;

    oldMappedItems.map((item) => {
      if (item.key === key) {
        item.notEditing = bool;
      }
      return item;
    });

    setItems([...oldMappedItems]);
  }

  return (
    <div className="App">
      <header>
        <form id="to-do-form" onSubmit={addItem}>
          <input
            type="text"
            placeholder="Enter a task"
            value={currentItem.text}
            onChange={handleInput}
          />
          <button type="submit">Add</button>
        </form>
      </header>

      <ListItem
        stateItems={items}
        deleteItemHandler={deleteItemHandler}
        setUpdate={setUpdate}
        editingTaskHandler={editingTaskHandler}
      />
    </div>
  );
};

export default App;
