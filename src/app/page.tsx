'use client';

import React from 'react';
import Button from '../../components/Button/Button';

const Page = () => {
  const handleClick = () => {
    alert('Hello, I am a button!');
  };

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Home Page</h1>
      <div className="space-y-4">
        <Button
         className='bg-red-600'
          label="Primary Button"
          onClick={handleClick}
        />
        
      </div>
    </div>
  );
};

export default Page;
