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
  currRoom
  }) => {

  
  return (
    <div>
      {id}
      <p>{n_to ?'N':''}{s_to ?'S':''}{w_to ?'W':''}{e_to ?'E':''}</p>

    </div>
  );
};

export default Room;
