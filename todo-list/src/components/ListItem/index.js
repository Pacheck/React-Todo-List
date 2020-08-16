import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItems = ({ stateItems, deleteItemHandler, setUpdate }) => {
  const listItems = stateItems.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          {/* {item.text} */}
          <input
            type="text"
            id={item.key}
            value={item.text}
            onChange={(e) => {
              setUpdate(e.target.value, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon="trash"
              onClick={() => {
                deleteItemHandler(item.key);
              }}
            />
          </span>
        </p>
      </div>
    );
  });
  return <div>{listItems}</div>;
};

export default ListItems;
