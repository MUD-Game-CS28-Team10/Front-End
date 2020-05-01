import React from 'react';
import styled from 'styled-components';

const Room = ({
  n_to,
  e_to,
  s_to,
  w_to,
  id,
  x_coord,
  y_coord,
  }) => {

  
  return (
    <div>
      {id}
      <p>({n_to}, {e_to}, {s_to}, {w_to})</p>

    </div>
  );
};

export default Room;
