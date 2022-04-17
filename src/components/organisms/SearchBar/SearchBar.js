import React, { useContext, useState } from 'react';
import { Wrapper, InputStyles, SearchIconStyles, ResultsWrapper, ResultsList, ResultsItem } from './SearchBar.styles';
import { useCombobox } from 'downshift';
import { useLocation } from 'react-router-dom';
import { AppContext } from 'providers/AppProvider';
import { getPlaceholderText } from 'helpers/getPlaceholderText';

const SearchBar = () => {
    const [searchListIsVisible, setSearchListIsVisible] = useState(true);
    const { searchList, handleInpuValueChange, handleSelectedItemChange, handleFormSubmit } = useContext(AppContext);
    const { pathname } = useLocation();

    const formSubmit = (e) => {
        handleFormSubmit(e);
        setSearchListIsVisible(false);
    };

    const { isOpen, getMenuProps, getInputProps, getComboboxProps, highlightedIndex, getItemProps } = useCombobox({
        items: searchList,
        itemToString: (item) => (item ? item.title : ''),
        onInputValueChange: ({ inputValue }) => {
            handleInpuValueChange(inputValue);
            setSearchListIsVisible(true);
        },
        onSelectedItemChange: ({ inputValue }) => handleSelectedItemChange(inputValue),
    });

    return (
        <Wrapper {...getComboboxProps()} onSubmit={formSubmit}>
            <SearchIconStyles />
            <InputStyles {...getInputProps()} placeholder={getPlaceholderText(pathname)} />
            <ResultsWrapper isVisible={isOpen && searchListIsVisible && searchList.length > 0}>
                <h2>Search {pathname === '/' ? 'movies or tv-series' : pathname.split('/')}</h2>
                <ResultsList {...getMenuProps()}>
                    {isOpen &&
                        searchListIsVisible &&
                        searchList.map((item, index) => {
                            return (
                                <ResultsItem
                                    isHighlighted={highlightedIndex === index}
                                    {...getItemProps({ item, index })}
                                    key={`${item.title}${index}`}
                                >
                                    <span>{item.title}</span>
                                    <span>{item.category}</span>
                                </ResultsItem>
                            );
                        })}
                </ResultsList>
            </ResultsWrapper>
        </Wrapper>
    );
};

export default SearchBar;
