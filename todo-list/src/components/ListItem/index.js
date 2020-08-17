import React from 'react';
import './index.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import FlipMove from 'react-flip-move';

const ListItems = ({
  stateItems,
  deleteItemHandler,
  setUpdate,
  editingTaskHandler,
}) => {
  const listItems = stateItems.map((item) => {
    return (
      <div className="list" key={item.key}>
        <p>
          <input
            type="text"
            id={item.key}
            value={item.text}
            disabled={item.notEditing}
            onChange={(e) => {
              setUpdate(e.target.value, item.key);
            }}
            onBlur={() => {
              editingTaskHandler(!item.notEditing, item.key);
            }}
          />
          <span>
            <FontAwesomeIcon
              className="faicons"
              icon={item.notEditing ? 'edit' : 'check'}
              onClick={(e) => {
                editingTaskHandler(!item.notEditing, item.key);
              }}
            />
          </span>
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
  return (
    <div>
      <FlipMove duration={250} easing={'ease-in-out'}>
        {listItems}
      </FlipMove>
    </div>
  );
};

export default ListItems;
