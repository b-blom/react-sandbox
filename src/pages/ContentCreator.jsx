import React from 'react';
import AddCat from './AddCat';
import InstantCardCreator from './pageComponents/InstantCardCreator';
import ManaCardCreator from './pageComponents/ManaCardCreator';
import ViewCard from './ViewCard';

export default function ContentCreator() {
  return (
    <div>
      <div className='black-border row'>
        <div className='black-border' style={{ width: '40%' }}>
          <ManaCardCreator />
        </div>
        <div className='black-border' style={{ width: '40%' }}>
          <InstantCardCreator />
        </div>
      </div>
      {/*  <ViewCard />
      <AddCat /> */}
    </div>
  );
}
