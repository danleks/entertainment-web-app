import Navigation from 'components/organisms/Navigation/Navigation';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import React from 'react';
import PropTypes from 'prop-types';
import { Wrapper } from './MainTemplate.styles';

const MainTemplate = ({ children, handleMediaSearch, searchResult }) => {
    return (
        <Wrapper>
            <Navigation />
            <SearchBar handleMediaSearch={handleMediaSearch} searchResult={searchResult} />
            {children}
        </Wrapper>
    );
};

MainTemplate.propTypes = {
    children: PropTypes.node.isRequired,
};

export default MainTemplate;
