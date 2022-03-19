import React, { useState } from 'react';
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

export default SearchBar;
