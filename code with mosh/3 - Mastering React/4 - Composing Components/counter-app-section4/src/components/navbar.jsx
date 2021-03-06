import React from "react";

// Stateless Functional Component

const NavBar = props => {
  const { totalCounters } = props;
  return (
    <span>
      There are
      <span className="badge badge-pill badge-secondary">{totalCounters}</span>
      counters with a value greather than 0
    </span>
  );
};

export default NavBar;
