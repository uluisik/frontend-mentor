import React from 'react';

function Arrow(props: any) {
  return (
    <svg width="12" height="8" viewBox="0 0 20 10">
      <path
        fill="none"
        stroke="hsl(200, 10%, 12%)"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.5"
        d="M1.58.95L10 9.05m8.42-8.1L10 9.05"
        {...props}
      ></path>
    </svg>
  );
}

export default Arrow;
