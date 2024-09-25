import Body from './bodySection/body';
import Sidebar from './sidebar/sidebar';
import './shop.css';

export default function Shop() {
  return (
    <div className='shop'>
      <Sidebar />
      <Body />
    </div>
  );
}
