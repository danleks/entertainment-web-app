import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InputStyles, SearchIconStyles } from './SearchBar.styles';

const SearchBar = ({ placeholder }) => {
    const [value, setValue] = useState('');
    return (
        <Wrapper>
            <SearchIconStyles />
            <InputStyles placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
        </Wrapper>
    );
};

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
