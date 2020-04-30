import React from 'react';

const Map = (props) => {

  const { initRoomNum, initX, initY } = props;

import React from "react";
import ReactDOM from "react-dom";
import { scaleLinear } from "d3-scale";

import "./styles.css";

var mapStyles = { position: "relative" };
var svgStyles = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0 };

function Map({ width, height, nodes }) {
  var xScale = scaleLinear()
    .domain([0, 100])
    .range([0, width]);
  var yScale = scaleLinear()
    .domain([0, 100])
    .range([0, height]);

  return (
    <div id="map" style={mapStyles}>
      <img
        src="https://images.unsplash.com/photo-1586020435958-8298e2cb5f64?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
        alt="map background"
      />
      <svg
        style={svgStyles}
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
      >
        {links.map((link, i) => (
          <line
            key={i}
            x1={xScale(nodes[link.start].x)}
            x2={xScale(nodes[link.end].x)}
            y1={yScale(nodes[link.start].y)}
            y2={yScale(nodes[link.end].y)}
            strokeWidth={5}
            stroke="cyan"
          />
        ))}
        {nodes.map((node, i) => (
          <circle
            key={i}
            cx={xScale(node.x)}
            cy={yScale(node.y)}
            r="20"
            fill={node.active === true ? "yellow" : "cyan"}
          />
        ))}
      </svg>
    </div>
  );
}

var nodes = [
  { x: 60, y: 25 },
  { x: 60, y: 30, active: true },
  { x: 50, y: 30 },
  { x: 40, y: 30 },
  { x: 70, y: 30 },
  { x: 60, y: 35 },
  { x: 60, y: 40 },
  { x: 70, y: 35 }
];

var links = [
  { start: 0, end: 1 },
  { start: 1, end: 2 },
  { start: 2, end: 3 },
  { start: 1, end: 4 },
  { start: 0, end: 5 },
  { start: 5, end: 6 },
  { start: 5, end: 7 },
  { start: 4, end: 7 }
];

  return (
    <div className="map">
      <h1>Game Map</h1>
    </div>
  );
};

export default Map;
