import React from "react";

const Instagram = ({ className, stroke = "currentColor", width = 35, height = 35 }) => {
  return (
    <svg
      className={className}
      fill="green"
      stroke={stroke}
      width={width}
      height={height}
      viewBox="-5.0 -10.0 110.0 135.0"
      xmlns="http://www.w3.org/2000/svg"
    >
     <path d="m11 68c0 12.699 10.301 23 23 23h32c12.699 0 23-10.301 23-23v-32c0-12.699-10.301-23-23-23h-32c-12.699 0-23 10.301-23 23zm60-41c2.8008 0 5 2.1992 5 5s-2.1992 5-5 5-5-2.1992-5-5 2.1992-5 5-5zm-21 6c10.5 0 19 8.5 19 19s-8.5 19-19 19-19-8.5-19-19 8.5-19 19-19z"/>
     <path d="m63 52c0 7.1797-5.8203 13-13 13s-13-5.8203-13-13 5.8203-13 13-13 13 5.8203 13 13"/>
    </svg>
  );
};

export default Instagram;
