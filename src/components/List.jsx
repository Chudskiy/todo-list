import React, { useState } from 'react';
import { v4 as uuidv4 } from 'uuid';

import Item from './Item';

const List = () => {
  const [text, setText] = useState('');
  const [items, setItems] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    const newItem = { id: uuidv4(), text, hasSublist: false };

    setItems([...items, newItem]);
    setText('');
  };

  const toggleSublist = (index) => {
    const prevItems = [...items];

    prevItems[index].hasSublist = !prevItems[index].hasSublist;
    setItems([...prevItems]);
  };

  const handleDelete = (index) => {
    const newList = items.filter((item, idx) => idx !== index);
    setItems(newList);
  };

  const handleUp = (index) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];

      [newItems[index], newItems[index - 1]] = [newItems[index - 1], newItems[index]];

      return newItems;
    });
  };

  const handleDown = (index) => {
    setItems((prevItems) => {
      const newItems = [...prevItems];

      [newItems[index], newItems[index + 1]] = [newItems[index + 1], newItems[index]];

      return newItems;
    });
  };

  return (
    <>
      <ul>
        {items && items.map((item, index) => (
          <li key={item.id}>
            <Item
              item={item}
              index={index}
              listLength={items.length}
              toggleSublist={toggleSublist}
              handleDelete={handleDelete}
              handleUp={handleUp}
              handleDown={handleDown}
            />
          </li>
        ))}
      </ul>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="type text"
          onChange={(e) => setText(e.target.value)}
          value={text}
        />
        <button type="submit">Add</button>
      </form>
    </>
  );
};

export default List;
