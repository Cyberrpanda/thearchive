import React from "react";

const Message = ({ className, stroke = "currentColor", width = 80, height = 80 }) => {
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
     <path d="m42.848 60.141 44.273-44.637-56.133 35.117-1.1406 27.223 12.879-17.559c0.039063-0.0625 0.082032-0.10156 0.12109-0.14453z"/>
     <path d="m88.547 12.309-80.203 17.031 21.789 19.512z"/>
     <path d="m44.863 60.875 24.738 26.977 22.117-74.199z"/>
     <path d="m31.414 79.023 20.652-7.4062-8.4648-9.2148z"/>
    </svg>
  );
};

export default Message;
