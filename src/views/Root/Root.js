import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from 'views/Home/Home';
import { Wrapper } from './Roots.style';
import { Routes, Route } from 'react-router-dom';
import Movies from 'views/Movies/Movies';

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MainTemplate>
                <Wrapper>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                        <Route path="/movies" element={<Movies />} />
                        <Route path="/tv-series" element={<div>tv series</div>} />
                        <Route path="/bookmarks" element={<div>bookmarks</div>} />
                    </Routes>
                </Wrapper>
            </MainTemplate>
        </ThemeProvider>
    );
};

export default Root;
