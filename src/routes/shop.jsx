import ItemSection from './bodySection/itemSection';
import Sidebar from './sidebar/sidebar';

import '../css/reset.css';
import './shop.css';

export default function Shop() {
  return (
    <div>
      <div className='shop'>
        <Sidebar />
        <ItemSection />
      </div>
    </div>
  );
}
