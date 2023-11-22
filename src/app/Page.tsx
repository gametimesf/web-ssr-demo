import React from 'react';

export function Page() {
  return (
    <div 
      onClick={() => console.log('Hello, you clicked?')} 
      style={{
        backgroundColor: 'black',
        color: 'white',
        cursor: 'pointer',
      }}
    >
      <h1>Some other page...</h1>
    </div>
  );
}