import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import Thumbnail from 'components/molecules/Thumbnail/Thumbnail';
import Trending from 'components/organisms/Trending/Trending';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Roots.style';

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Wrapper>
                <Trending />
                <section>
                    <Thumbnail />
                </section>
            </Wrapper>
        </ThemeProvider>
    );
};

export default Root;
