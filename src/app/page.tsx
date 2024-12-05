'use client';

import React from 'react';
import Button from '../../components/Button/Button';
import TextField from '../../components/TextField';

const Page = () => {
  const handleClick = () => {
    alert('Hello, I am a button!');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Home Page</h1>
      <div className="space-y-4">
        <Button
          label="Primary Button"
          onClick={handleClick}
        />
        <TextField label='Username' type='text' placeholder="username"/>
      
      </div>
    </div>
  );
};

export default Page;
