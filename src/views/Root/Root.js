import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate';
import React, { useCallback, useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from 'views/Home/Home';
import { Wrapper } from './Roots.style';
import { Routes, Route } from 'react-router-dom';
import Movies from 'views/Movies/Movies';
import TVSeries from 'views/TV-Series/TV-Series';
import Bookmarks from 'views/Bookmarks/Bookmarks';
import SearchProvider from 'providers/SearchProvider';
import { useMedia } from 'hooks/useMedia';
import { useLocation } from 'react-router-dom';

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

const Root = () => {
    const [media, setMedia] = useState([]);
    const [searchResult, setSearchResult] = useState([]);
    const { getMedia, findMedia } = useMedia();
    const { pathname } = useLocation();

    useEffect(() => {
        (async () => {
            const media = (await getMedia()) || [];
            setMedia(media);
        })();
    }, [getMedia]);

    const handleBookmarks = (item) => {
        let index = media.findIndex((i) => i.title === item.title);
        media[index].isBookmarked = !media[index].isBookmarked;
        setMedia([...media]);
    };

    const handleMediaSearch = (inputValue) => {
        const searchRegex = new RegExp(inputValue, 'gi');
        const matchingMedia = media.filter((item) => {
            return (
                (pathname === PATH_NAME.root && item.category.match(/movie/gi) && item.category.match(/tv/gi) && item.title.match(searchRegex)) ||
                (pathname === PATH_NAME.movies && item.category.match(/movie/gi) && item.title.match(searchRegex)) ||
                (pathname === PATH_NAME.tvseries && item.category.match(/tv/gi) && item.title.match(searchRegex)) ||
                (pathname === PATH_NAME.bookmarks && item.isBookmarked && item.title.match(searchRegex))
            );
        });
        setSearchResult(matchingMedia);
    };

    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <SearchProvider>
                <MainTemplate handleMediaSearch={handleMediaSearch} searchResult={searchResult}>
                    <Wrapper>
                        <Routes>
                            <Route exact path="/" element={<Home media={media} handleBookmarks={handleBookmarks} />} />
                            <Route path="/movies" element={<Movies media={media} handleBookmarks={handleBookmarks} />} />
                            <Route path="/tv-series" element={<TVSeries media={media} handleBookmarks={handleBookmarks} />} />
                            <Route path="/bookmarks" element={<Bookmarks media={media} handleBookmarks={handleBookmarks} />} />
                        </Routes>
                    </Wrapper>
                </MainTemplate>
            </SearchProvider>
        </ThemeProvider>
    );
};

export default Root;
