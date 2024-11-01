import { useEffect, useState } from 'react';
import { Form } from 'react-router-dom';
import { useFetchItemDetail } from '../services and helpers/fetchItem';
import PropTypes from 'prop-types';
// import { useSearchBar } from '../context/SearchbarContext';
import ItemCard from './itemCard';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

// import './navbarSearch.css';
import './itemSection.css';
import '../../css/global.css';
import '../navbar/navbarSearch.css';

export default function ItemSection() {
  const pokeItemDetail = useFetchItemDetail();
  const [query, setQuery] = useState('');

  const filteredItems = pokeItemDetail.filter((item) => {
    return item.name.toLowerCase().includes(query.toLowerCase());
  });

  return (
    <>
      <div className='pageCtn'>
        <div className='navbarSearch'>
          <Form action='' role='search'>
            <input
              className='searchInput'
              type='search'
              id='q'
              name='q'
              placeholder='Search for item...'
              aria-label='Search pokeItem'
              defaultValue={query}
              onChange={(e) => setQuery(e.target.value)}
            />
            <button className='searchBtn'>
              <FontAwesomeIcon icon={faMagnifyingGlass} />
            </button>
          </Form>
        </div>
        <div className='itemSection'>
          <ul className='itemGridContainer'>
            {Object.values(filteredItems).map((item) => {
              return <ItemCard item={item} key={item.id} className='itemCard' />;
            })}
          </ul>
        </div>
      </div>
    </>
  );
}

ItemSection.propTypes = {
  pokeItemDetail: PropTypes.object,
};
