import React, { useState } from 'react';

function MyComponent() {
  const tasks = ['Birlamchi vazifa', 'Ikkinchi vazifa', 'Uchinchi vazifa'];
      
  return (
    <div style={{backgroundColor: '#C594C5', justifyItems:'center',width:'500px',padding:'40px',margin:'200px 500px',borderRadius:'10px'}}>
      <h1>Hello from MyComponent!</h1>
      <img src="/wall.jpg" alt="null" width={'200px'} />
        <img 
          src="D:\Telegram Desktop\загрузка\c#.png" 
          alt="" 
          style={{ marginTop: '20px' }} 
        />
        
          
        <h1>Markerli Ro'yxat</h1>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
        
        
    </div>
  );
}

export default MyComponent;
