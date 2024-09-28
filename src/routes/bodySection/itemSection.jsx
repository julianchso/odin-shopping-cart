import Card from './card';
import GetItemName from '../services and helpers/getItem';
import PropTypes from 'prop-types';

import '../../global.css';
import './itemSection.css';

export default function ItemSection() {
  const items = GetItemName();

  console.log(items);

  return (
    <>
      <div className='itemSection'>
        <ul className='itemGridContainer'>
          {items.map((item) => {
            return <Card item={item} key={item.id} className='itemCard' />;
          })}
        </ul>
      </div>
    </>
  );
}

ItemSection.propTypes = {
  item: PropTypes.object,
};
