import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from 'views/Home/Home';
import { Wrapper } from './Roots.style';

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Wrapper>
                <SearchBar placeholder="Search for movies or TV series" />
                <Home />
            </Wrapper>
        </ThemeProvider>
    );
};

export default Root;
