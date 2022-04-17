import React, { useState, useEffect, useCallback } from 'react';
import { useMedia } from 'hooks/useMedia';
import { useLocation } from 'react-router-dom';

export const AppContext = React.createContext('');

const AppProvider = ({ children }) => {
    const [currentInputVal, setCurrentInputVal] = useState('');
    const [inputVal, setInputVal] = useState('');
    const [media, setMedia] = useState([]);
    const [searchList, setSearchList] = useState([]);
    const [searchedItems, setSearchedItems] = useState([]);

    const { getMedia, findMedia } = useMedia();
    const { pathname } = useLocation();

    useEffect(() => {
        (async () => {
            const media = (await getMedia()) || [];
            setMedia(media);
            setSearchedItems([]);
        })();
    }, [getMedia, pathname]);

    const handleBookmarks = async (item) => {
        const media = (await getMedia(item, searchedItems)) || [];
        setMedia(media);

        if (searchedItems.length > 0) {
            let index = searchedItems.findIndex((i) => i.title === item.title);
            searchedItems[index].isBookmarked = !searchedItems[index].isBookmarked;
            setSearchedItems(searchedItems);
        }
    };

    const handleInpuValueChange = useCallback(
        async (inputValue) => {
            setCurrentInputVal(inputValue);
            const result = await findMedia(inputValue, pathname);
            setSearchList(result);
        },
        [findMedia, pathname],
    );

    const handleSelectedItemChange = useCallback(
        async (inputValue) => {
            setInputVal(inputValue);
            const result = await findMedia(inputValue, pathname);
            setSearchedItems(result);
        },
        [findMedia, pathname],
    );

    const handleFormSubmit = useCallback(
        async (e) => {
            e.preventDefault();
            setInputVal(currentInputVal);
            const result = await findMedia(currentInputVal, pathname);
            setSearchedItems(result);
        },
        [findMedia, pathname, currentInputVal],
    );

    return (
        <AppContext.Provider
            value={{
                media,
                searchList,
                searchedItems,
                inputVal,
                pathname,
                handleBookmarks,
                handleInpuValueChange,
                handleSelectedItemChange,
                handleFormSubmit,
            }}
        >
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
