import React from "react";

export const Logo = ({ size = 40, color = "#2e3c45" }) => {
  return (
    <div
      className="inline-block leading-[0]"
      style={{
        fontSize: `${size}px`,
        color: color,
      }}
    >
      <span className="ico-tanukiLogo" />
    </div>
  );
};
