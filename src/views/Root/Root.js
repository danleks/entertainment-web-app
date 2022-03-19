import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import SearchBar from 'components/organisms/SearchBar/SearchBar';
import Section from 'components/organisms/Section/Section';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Roots.style';

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Wrapper>
                <SearchBar placeholder="Search for movies or TV series" />
                <Section trending title="Trending" />
                <Section title="Recommended for you" />
            </Wrapper>
        </ThemeProvider>
    );
};

export default Root;
