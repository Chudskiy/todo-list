import React, { useState } from 'react';

import { v4 as uuidv4 } from 'uuid';
import Item from './Item';

const List = () => {
  const [text, setText] = useState('');
  const [list, setList] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!text.trim()) return;

    const newItem = { id: uuidv4(), text, hasSublist: false };

    console.log('newItem = ', newItem);

    setList([...list, newItem]);
    setText('');
  };

  const toggleSublist = (index) => {
    const prevList = [...list];

    prevList[index].hasSublist = !prevList[index].hasSublist;
    setList([...prevList]);
  };

  const handleDelete = (index) => {
    const newList = list.filter((item, idx) => idx !== index);
    setList(newList);
  };

  return (
    <>
      <ul>
        {list && list.map((item, index) => (
          <li key={item.id}>
            <Item
              item={item}
              index={index}
              toggleSublist={toggleSublist}
              handleDelete={handleDelete}
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
