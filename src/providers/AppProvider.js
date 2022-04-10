import React, { useState, useEffect, useCallback } from 'react';
import { useMedia } from 'hooks/useMedia';
import { useLocation } from 'react-router-dom';

export const AppContext = React.createContext('');

const PATH_NAME = {
    root: '/',
    movies: '/movies',
    tvseries: '/tv-series',
    bookmarks: '/bookmarks',
};

const CATEGORY = {
    movie: 'Movie',
    tvseries: 'TV Series',
};

const AppProvider = ({ children }) => {
    const [inputVal, setInputVal] = useState('');
    const [media, setMedia] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    const { getMedia, findMedia } = useMedia();
    const { pathname } = useLocation();

    useEffect(() => {
        (async () => {
            const media = (await getMedia()) || [];
            setMedia(media);
        })();
    }, [getMedia, pathname]);

    const handleBookmarks = (item) => {
        (async () => {
            const media = (await getMedia(item, searchResult)) || [];
            setMedia(media);
        })();
    };

    const handleMediaSearch = useCallback(
        async (inputValue) => {
            setInputVal(inputValue);
            const res = await findMedia(inputValue, pathname);
            setSearchResult(res);
        },
        [findMedia, pathname],
    );

    const handleFormSubmit = (e) => {
        e.preventDefault();
        handleMediaSearch(inputVal);
    };

    return (
        <AppContext.Provider value={{ media, searchResult, handleBookmarks, handleMediaSearch, handleFormSubmit, inputVal }}>
            {children}
        </AppContext.Provider>
    );
};

export default AppProvider;
