import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import './navbarSearch.css';

export default function NavbarSearch() {
  return (
    <div className='navbarSearch'>
      <form action='' role='search'>
        <input
          className='searchInput'
          type='search'
          id='query'
          name='q'
          placeholder='Search...'
          aria-label='Search pokemon'
        />
        <button className='searchBtn'>
          <FontAwesomeIcon icon={faMagnifyingGlass} />
        </button>
      </form>
    </div>
  );
}
