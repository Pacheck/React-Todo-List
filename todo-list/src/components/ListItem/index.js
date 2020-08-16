import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const ListItems = ({ stateItems, deleteItemHandler }) => {
  const listItems = stateItems.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          {item.text}
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
