import React, { useEffect, useState, useCallback, useRef } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InputStyles, SearchIconStyles } from './SearchBar.styles';
import { useMedia } from 'hooks/useMedia';

const SearchBar = ({ placeholder }) => {
    const [value, setValue] = useState('');
    const [search, setSearch] = useState([]);
    const isInitialMount = useRef(true);

    const { findMedia } = useMedia();

    const handleMediaSearch = useCallback(
        async (string) => {
            const res = await findMedia(string);
            setSearch(res);
        },
        [findMedia],
    );

    useEffect(() => {
        if (isInitialMount.current) {
            isInitialMount.current = false;
        } else {
            handleMediaSearch(value);
        }
    }, [handleMediaSearch, value]);

    return (
        <Wrapper>
            <SearchIconStyles />
            <InputStyles placeholder={placeholder} value={value} onChange={(e) => setValue(e.target.value)} />
            <ul>
                {search.map((item) => {
                    return <li key={item.title}>{item.title}</li>;
                })}
            </ul>
        </Wrapper>
    );
};

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
