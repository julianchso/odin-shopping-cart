import ItemSection from './bodySection/itemSection';
import Sidebar from './sidebar/sidebar';

import '../reset.css';
import './shop.css';

export default function shop() {
  return (
    <div>
      <div className='shop'>
        <Sidebar />
        <ItemSection />
      </div>
    </div>
  );
}
