import { useState, useContext, createContext } from 'react';
import PropTypes from 'prop-types';

export const SearchBarContext = createContext({});

export function useSearchBar() {
  return useContext(SearchBarContext);
}

export function SearchBarProvider({ children }) {
  const [query, setQuery] = useState('');

  const searchValue = () => {
    (e) => setQuery(e.target.value);
  };

  const providerValue = {
    searchValue,
    query,
  };

  return (
    <>
      <SearchBarContext.Provider value={providerValue}>
        {children}
        {/* <ShoppingCart isOpen={isOpen} /> */}
      </SearchBarContext.Provider>
    </>
  );
}

SearchBarProvider.propTypes = {
  children: PropTypes.object,
};
