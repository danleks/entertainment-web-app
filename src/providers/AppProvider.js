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
    const [media, setMedia] = useState([]);
    const [searchResult, setSearchResult] = useState([]);

    const { getMedia, findMedia } = useMedia();
    const { pathname } = useLocation();

    useEffect(() => {
        (async () => {
            console.log(pathname);
            const media = (await getMedia(null, pathname)) || [];
            setMedia(media);
        })();
    }, [getMedia, pathname]);

    const handleBookmarks = (item) => {
        // (async () => {
        //     const media = (await getMedia(item)) || [];
        //     setMedia(media);
        // })();
        // let index = media.findIndex((i) => i.title === item.title);
        // media[index].isBookmarked = !media[index].isBookmarked;
        // setMedia([...media]);
    };

    const handleMediaSearch = useCallback(
        async (inputValue, tes) => {
            const res = await findMedia(inputValue, pathname);
            setSearchResult(res);
        },
        [findMedia, pathname],
    );

    const handleFormSubmit = (e) => {
        e.preventDefault();
        // handleSearchValue(inputValue);
    };

    return (
        <AppContext.Provider value={{ media, searchResult, handleBookmarks, handleMediaSearch, handleFormSubmit }}>{children}</AppContext.Provider>
    );
};

export default AppProvider;
