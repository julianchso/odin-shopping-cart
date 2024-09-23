import { useEffect, useState } from 'react';
import Card from './card';
import GetItemName from '../services and helpers/getItem';

import './body.css';

export default function Body() {
  return (
    <>
      <div className='gridContainer'>
        <GetItemName />
      </div>
    </>
  );
}
