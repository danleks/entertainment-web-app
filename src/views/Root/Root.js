import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate';
import React, { useContext, useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import Home from 'views/Home/Home';
import { Wrapper } from './Roots.style';
import { Routes, Route } from 'react-router-dom';
import Movies from 'views/Movies/Movies';
import TVSeries from 'views/TV-Series/TV-Series';
import Bookmarks from 'views/Bookmarks/Bookmarks';
import SearchProvider from 'providers/SearchProvider';
import { SearchContext } from 'providers/SearchProvider';
import { useMedia } from 'hooks/useMedia';

const Root = () => {
    const [media, setMedia] = useState([]);
    const [searchValue, setSearchValue] = useState('');
    const { getMedia } = useMedia();

    useEffect(() => {
        (async () => {
            const media = (await getMedia(searchValue)) || [];
            setMedia(media);
        })();
    }, [getMedia, searchValue]);

    const handleBookmarks = (item) => {
        setMedia((prevState) => {
            let index = prevState.findIndex((i) => i.title === item.title);
            prevState[index].isBookmarked = !prevState[index].isBookmarked;
            console.log(prevState[index]);

            return [...prevState];
        });
    };
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <SearchProvider>
                <MainTemplate>
                    <Wrapper>
                        <Routes>
                            <Route exact path="/" element={<Home media={media} handleBookmarks={handleBookmarks} />} />
                            <Route path="/movies" element={<Movies media={media} handleBookmarks={handleBookmarks} />} />
                            <Route path="/tv-series" element={<TVSeries media={media} />} />
                            <Route path="/bookmarks" element={<Bookmarks media={media} handleBookmarks={handleBookmarks} />} />
                        </Routes>
                    </Wrapper>
                </MainTemplate>
            </SearchProvider>
        </ThemeProvider>
    );
};

export default Root;
