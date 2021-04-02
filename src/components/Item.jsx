import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

const Item = ({
  item, index, listLength, toggleSublist, handleDelete, handleUp, handleDown,
}) => {
  const { text, hasSublist } = item;
  return (
    <div>
      <p>{text}</p>

      {index > 0 && <button type="button" onClick={() => handleUp(index)}>Up</button>}
      {index < listLength - 1 && <button type="button" onClick={() => handleDown(index)}>Down</button>}

      <button type="button" onClick={() => handleDelete(index)}>Remove</button>

      <button type="button" onClick={() => toggleSublist(index)}>{hasSublist ? 'Remove Sublist' : 'Add Sublist'}</button>

      {hasSublist && <List />}
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    hasSublist: PropTypes.bool,
  }),
  index: PropTypes.number,
  listLength: PropTypes.number,
  toggleSublist: PropTypes.func,
  handleDelete: PropTypes.func,
  handleUp: PropTypes.func,
  handleDown: PropTypes.func,
};

Item.defaultProps = {
  item: {},
  index: null,
  listLength: 0,
  toggleSublist: () => {},
  handleDelete: () => {},
  handleUp: () => {},
  handleDown: () => {},
};

export default Item;
