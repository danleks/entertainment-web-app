import React, { useEffect, useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InputStyles, SearchIconStyles, ResultsWrapper, ResultsList, ResultsItem } from './SearchBar.styles';
import { useMedia } from 'hooks/useMedia';
import { useCombobox } from 'downshift';

const SearchBar = ({ placeholder }) => {
    const [search, setSearch] = useState([]);
    const { findMedia } = useMedia();

    const handleMediaSearch = useCallback(
        async (string) => {
            const res = await findMedia(string);
            setSearch(res);
            console.log(res);
        },
        [findMedia],
    );

    const { isOpen, getToggleButtonProps, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
        items: search,
        itemToString: (item) => (item ? item.title : ''),
        onInputValueChange: handleMediaSearch,
    });

    return (
        <Wrapper {...getComboboxProps()}>
            <SearchIconStyles />
            <InputStyles {...getInputProps()} placeholder={placeholder} />
            <ResultsWrapper>
                <h2>Search movie or tv-series</h2>
                <ResultsList {...getMenuProps()}>
                    {isOpen &&
                        search.map((item, index) => {
                            return (
                                <ResultsItem
                                    isHighlighted={highlightedIndex === index}
                                    {...getItemProps({ item, index })}
                                    key={`${item.title}${index}`}
                                >
                                    {item.title}
                                </ResultsItem>
                            );
                        })}
                </ResultsList>
            </ResultsWrapper>
        </Wrapper>
    );
};

SearchBar.propTypes = {
    placeholder: PropTypes.string.isRequired,
};

export default SearchBar;
