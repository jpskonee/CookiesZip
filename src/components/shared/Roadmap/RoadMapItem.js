import React from "react";

function RoadMapItem({ title, slogan, body }) {
  return (
    <div className="item-root">
      <div className="item-top">
        <div className="item-line"></div>
        <div className="item-circle"></div>
        <div className="item-header">
          <div className="text-top">{title}</div>
          <div className="text-base">{slogan}</div>
        </div>
      </div>
      <div className="item-base">{body}</div>
    </div>
  );
}

export default RoadMapItem;
