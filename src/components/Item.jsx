import React from 'react';
import PropTypes from 'prop-types';

import List from './List';

const Item = ({
  item, index, listLength, toggleSublist, handleDelete, handleUp, handleDown,
}) => {
  const { text, hasSublist } = item;
  return (
    <div className="item">
      <p>{text}</p>

      {index > 0 && <button type="button" onClick={() => handleUp(index)}>Up</button>}
      {index < listLength - 1 && <button type="button" onClick={() => handleDown(index)}>Down</button>}

      <button type="button" onClick={() => handleDelete(index)}>Remove</button>

      <button
        type="button"
        onClick={() => toggleSublist(index)}
      >
        {hasSublist ? 'Remove Sublist' : 'Add Sublist'}
      </button>

      {hasSublist && <List />}
    </div>
  );
};

Item.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.string,
    text: PropTypes.string,
    hasSublist: PropTypes.bool,
  }).isRequired,
  index: PropTypes.number.isRequired,
  listLength: PropTypes.number.isRequired,
  toggleSublist: PropTypes.func.isRequired,
  handleDelete: PropTypes.func.isRequired,
  handleUp: PropTypes.func.isRequired,
  handleDown: PropTypes.func.isRequired,
};

export default Item;
