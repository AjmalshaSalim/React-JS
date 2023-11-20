


import React, { useRef } from 'react';

function App() {
  const countRef = useRef(0);

  const handleClick = () => {
    countRef.current++;
    console.log('Count:', countRef.current);
  };

  return (
    <div>
      <button onClick={handleClick}>Increment count</button>
      <p>Current count: {countRef.current}</p>
    </div>
  );
}