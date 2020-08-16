import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [items, setItems] = useState();

  return (
    <div className="App">
      <header>
        <form id="to-do-form">
          <input type="text" placeholder="Enter a task" />
          <button type="submit">Add</button>
        </form>
      </header>
    </div>
  );
};

export default App;
