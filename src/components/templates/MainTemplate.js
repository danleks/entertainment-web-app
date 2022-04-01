import Navigation from 'components/organisms/Navigation/Navigation';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './MainTemplate.styles';

export const SearchContext = React.createContext('');

const MainTemplate = ({ children }) => {
    const [searchValue, setSearchValue] = useState('');
    const handleSearchValue = (value = '') => {
        console.log(value);
        setSearchValue(value);
    };
    return (
        <SearchContext.Provider value={{ handleSearchValue, searchValue }}>
            <Wrapper>
                <Navigation />
                <SearchBar placeholder="Search for movies or TV series" />
                {children}
            </Wrapper>
        </SearchContext.Provider>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainTemplate;
