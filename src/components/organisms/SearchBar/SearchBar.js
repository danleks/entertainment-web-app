import React, { useContext } from 'react';
import { Wrapper, InputStyles, SearchIconStyles, ResultsWrapper, ResultsList, ResultsItem } from './SearchBar.styles';
import { useCombobox } from 'downshift';
import { useLocation } from 'react-router-dom';
import { AppContext } from 'providers/AppProvider';
import { getPlaceholderText } from 'helpers/getPlaceholderText';

const SearchBar = () => {
    const { pathname } = useLocation();
    const { searchResult, handleMediaSearch, handleFormSubmit } = useContext(AppContext);
    const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
        items: searchResult,
        itemToString: (item) => (item ? item.title : ''),
        onInputValueChange: ({ inputValue }) => handleMediaSearch(inputValue),
        onSelectedItemChange: ({ inputValue }) => handleMediaSearch(inputValue),
    });

    return (
        <Wrapper {...getComboboxProps()} onSubmit={(e) => handleFormSubmit(e)}>
            <SearchIconStyles />
            <InputStyles {...getInputProps()} placeholder={getPlaceholderText(pathname)} />
            <ResultsWrapper isVisible={isOpen && searchResult.length}>
                <h2>Search {pathname === '/' ? 'movies or tv-series' : pathname.split('/')}</h2>
                <ResultsList {...getMenuProps()}>
                    {isOpen &&
                        searchResult.map((item, index) => {
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

export default SearchBar;
