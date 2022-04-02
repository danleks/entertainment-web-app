import React, { useState } from 'react';

export const SearchContext = React.createContext('');

const SearchProvider = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');
    const handleSearchValue = (value = '') => {
        setSearchValue(value);
    };
    return <SearchContext.Provider value={{ handleSearchValue, searchValue }}>{children}</SearchContext.Provider>;
};

export default SearchProvider;
