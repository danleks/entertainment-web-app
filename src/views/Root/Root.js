import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from 'views/Home/Home';
import { Wrapper } from './Roots.style';
import { Routes, Route } from 'react-router-dom';
import Movies from 'views/Movies/Movies';
import TVSeries from 'views/TV-Series/TV-Series';
import Bookmarks from 'views/Bookmarks/Bookmarks';
import SearchProvider from 'providers/SearchProvider';
import AppProvider from 'providers/AppProvider';

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <AppProvider>
                <SearchProvider>
                    <MainTemplate>
                        <Wrapper>
                            <Routes>
                                <Route exact path="/" element={<Home />} />
                                <Route path="/movies" element={<Movies />} />
                                <Route path="/tv-series" element={<TVSeries />} />
                                <Route path="/bookmarks" element={<Bookmarks />} />
                            </Routes>
                        </Wrapper>
                    </MainTemplate>
                </SearchProvider>
            </AppProvider>
        </ThemeProvider>
    );
};

export default Root;
