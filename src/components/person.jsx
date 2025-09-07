import React from "react";

const Person = ({ className, stroke = "currentColor", width = 80, height = 80 }) => {
  return (
    <svg
      className={className}
      fill="grey"
      stroke={stroke}
      width={width}
      height={height}
      viewBox="-5.0 -10.0 110.0 135.0"
      xmlns="http://www.w3.org/2000/svg"
    >
       <path d="m28.125 28.125c0-12.062 9.8164-21.875 21.875-21.875s21.875 9.8125 21.875 21.875-9.8164 21.875-21.875 21.875-21.875-9.8125-21.875-21.875zm25 25h-6.25c-17.23 0-31.25 14.02-31.25 31.25 0 3.3398 2.375 6.1953 5.6484 6.7891 9.4609 1.7148 19.125 2.5859 28.727 2.5859s19.281-0.87109 28.742-2.5859c3.2617-0.58984 5.6328-3.4453 5.6328-6.7891 0-17.23-14.02-31.25-31.25-31.25z"/>
    </svg>
  );
};

export default Person;
