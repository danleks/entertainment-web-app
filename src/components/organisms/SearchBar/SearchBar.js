import React, { useState, useCallback, useContext } from 'react';
import PropTypes from 'prop-types';
import { Wrapper, InputStyles, SearchIconStyles, ResultsWrapper, ResultsList, ResultsItem } from './SearchBar.styles';
import { useMedia } from 'hooks/useMedia';
import { useCombobox } from 'downshift';
import { useLocation } from 'react-router-dom';
import { SearchContext } from 'components/templates/MainTemplate';

const SearchBar = ({ placeholder }) => {
    const { pathname } = useLocation();
    const [search, setSearch] = useState([]);
    const { findMedia } = useMedia();

    const { handleSearchValue } = useContext(SearchContext);

    const handleMediaSearch = useCallback(
        async (valueObj) => {
            const res = await findMedia(valueObj, pathname);
            setSearch(res);
        },
        [findMedia, pathname],
    );

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleSearchValue(search[0]?.title);
    };

    const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
        items: search,
        itemToString: (item) => (item ? item.title : ''),
        onInputValueChange: handleMediaSearch,
        onSelectedItemChange: () => handleSearchValue(search[0]?.title),
    });

    return (
        <Wrapper {...getComboboxProps()} onSubmit={handleFormSubmit}>
            <SearchIconStyles />
            <InputStyles {...getInputProps()} placeholder={placeholder} />
            <ResultsWrapper isVisible={isOpen && search.length}>
                <h2>Search {pathname === '/' ? 'movies or tv-series' : pathname.split('/')}</h2>
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
