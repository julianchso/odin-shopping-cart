import Card from './card';
import { FetchItemName } from '../services and helpers/fetchItem';
import PropTypes from 'prop-types';

import '../../global.css';
import './itemSection.css';

export default function ItemSection() {
  const getItems = async () => {
    const items = await FetchItemName();
    console.log(typeof items);
    console.log(items);
    return items;
  };

  return (
    <>
      <div className='itemSection'>
        <ul className='itemGridContainer'>
          {/* {getItems.map((item) => {
            return <Card item={item.name} key={item.id} className='itemCard' />;
          })} */}
        </ul>
      </div>
    </>
  );
}

ItemSection.propTypes = {
  item: PropTypes.object,
};
