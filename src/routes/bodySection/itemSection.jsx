import { useFetchItemName, useFetchItemDetail } from '../services and helpers/fetchItem';
import { ShoppingCartProvider } from '../context/ShoppingCartContext';

import Card from './card';
import PropTypes from 'prop-types';

import '../../global.css';
import './itemSection.css';

export default function ItemSection() {
  const pokeItemDetail = useFetchItemDetail();

  return (
    <>
      <ShoppingCartProvider>
        <div className='itemSection'>
          <ul className='itemGridContainer'>
            {Object.values(pokeItemDetail).map((item) => {
              return <Card item={item} key={item.id} className='itemCard' />;
            })}
          </ul>
        </div>
      </ShoppingCartProvider>
    </>
  );
}

// ItemSection.propTypes = {
//   pokeItems: PropTypes.object,
// };
