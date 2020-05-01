import React from 'react';

const Map = (props) => {
  const { initRoomNum, initX, initY } = props;

  return (
    <div className="map">
      <h1>
        Game Map [{initX}, {initY}]
      </h1>
    </div>
  );
};

export default Map;
