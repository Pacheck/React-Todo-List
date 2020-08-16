import React, { useState } from 'react';
import './App.css';

import ListItem from './components/ListItem';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const App = () => {
  library.add(faTrash);

  const [items, setItems] = useState([]);
  const [currentItem, setCurrentItem] = useState({
    text: '',
    key: '',
  });

  function handleInput(e) {
    setCurrentItem({
      text: e.target.value,
      key: Date.now(),
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
        return (item.text = text);
      }
    });
    console.log(ITEMS);
    setItems(ITEMS);
    setCurrentItem({ text: '', key: '' });
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
      />
    </div>
  );
};

export default App;
