import React from "react";

export const ContentItem = ({ image, alt }) => {
  return (
    <div
      className="mb-[20px] overflow-hidden rounded-xl"
      style={{
        boxShadow: "rgba(46, 60, 69, .2) 0px 10px 15px",
      }}
    >
      <img src={image} alt={alt} />
    </div>
  );
};
