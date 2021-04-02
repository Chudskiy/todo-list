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

  const handleUp = (index) => {
    setList((prevState) => {
      const newList = [...prevState];

      [newList[index], newList[index - 1]] = [newList[index - 1], newList[index]];

      return newList;
    });
  };

  const handleDown = (index) => {
    setList((prevState) => {
      const newList = [...prevState];

      [newList[index], newList[index + 1]] = [newList[index + 1], newList[index]];

      return newList;
    });
  };

  return (
    <>
      <ul>
        {list && list.map((item, index) => (
          <li key={item.id}>
            <Item
              item={item}
              index={index}
              listLength={list.length}
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
