import Navigation from 'components/organisms/Navigation/Navigation';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import React from 'react';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children }) => {
    return (
        <Wrapper>
            <Navigation />
            <SearchBar placeholder="Search for movies or TV series" />
            {children}
        </Wrapper>
    );
};

export default MainTemplate;
