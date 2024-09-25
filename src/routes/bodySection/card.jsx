import './card.css';
import GetItemName from '../services and helpers/getItem';

export default function Card({ name, png, price }) {
  return (
    <button>
      <div className='cardContainer'>
        <div className='cardImg'></div>
        <div className='cardName'></div>
        <div className='cardPrice'></div>
      </div>
    </button>
  );
}
