import './card.css';
import GetItemName from '../services and helpers/getItem';

export default function Card({ name, png, type }) {
  return (
    <div className='cardContainer'>
      <div className='cardImg'></div>
      <div className='cardName'></div>
      <div className='cardPrice'></div>
    </div>
  );
}
