import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import Recommended from 'components/organisms/Recommended/Recommended';
import Trending from 'components/organisms/Trending/Trending';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Roots.style';

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Wrapper>
                <nav>navigation</nav>
                <input type="text" placeholder="Search for movies or TV series" />
                <Trending />
                <Recommended />
            </Wrapper>
        </ThemeProvider>
    );
};

export default Root;
