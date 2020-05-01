import React from 'react';

const NavBar = (props) => {
  return (
    <div className="navbar">
      <h3>Player: {props.player}</h3>
    </div>
  );
};

export default NavBar;
