import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import { Wrapper } from './Roots.style';

import { SectionTitle } from 'components/atoms/SectionTitle/SectionTitle';
import { MediaWrapper } from 'components/molecules/MediaWrapper/MediaWrapper';
import Thumbnail from 'components/molecules/Thumbnail/Thumbnail';

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <Wrapper>
                <section>
                    <SectionTitle>Trending</SectionTitle>
                    <MediaWrapper>
                        <li>
                            <Thumbnail />
                        </li>
                    </MediaWrapper>
                </section>
            </Wrapper>
        </ThemeProvider>
    );
};

export default Root;
