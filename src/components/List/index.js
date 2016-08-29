import React from 'react';

function List({ children }) {
  return (
    <ul className="List">{children}</ul>
  );
}

List.propTypes = {
  children: React.PropTypes.node.isRequired,
};

export default List;
