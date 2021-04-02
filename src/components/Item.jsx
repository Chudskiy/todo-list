import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

const Item = ({
  item, index, toggleSublist, handleDelete,
}) => {
  const { text, hasSublist } = item;
  return (
    <div>
      <p>{text}</p>

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
  toggleSublist: PropTypes.func,
  handleDelete: PropTypes.func,
};

Item.defaultProps = {
  item: {},
  index: null,
  toggleSublist: () => {},
  handleDelete: () => {},
};

export default Item;
