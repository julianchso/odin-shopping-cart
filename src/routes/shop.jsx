import ItemSection from './bodySection/itemSection';
import Sidebar from './sidebar/sidebar';
import './shop.css';

export default function shop() {
  return (
    <div className='shop'>
      <Sidebar className='sidebar' />
      <ItemSection className='body' />
    </div>
  );
}
