import React from 'react';
import PropTypes from 'prop-types';
import List from './List';

const Item = ({ item, index, toggleSublist }) => {
  const { text, hasSublist } = item;
  return (
    <div>
      <p>{text}</p>

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
  index: PropTypes.number.isRequired,
  toggleSublist: PropTypes.func,
};

Item.defaultProps = {
  item: {},
  toggleSublist: () => {},
};

export default Item;
