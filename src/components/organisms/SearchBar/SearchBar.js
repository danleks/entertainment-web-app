import React, { useState } from 'react';
import { InputStyles } from './SearchBar.styles';

const SearchBar = ({ placeholder }) => {
    const [value, setValue] = useState('');
    return <InputStyles placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />;
};

export default SearchBar;
