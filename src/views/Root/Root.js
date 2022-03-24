import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import MainTemplate from 'components/templates/MainTemplate';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import Home from 'views/Home/Home';
import { Wrapper } from './Roots.style';
import { Routes, Route } from 'react-router-dom';

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <MainTemplate>
                <Wrapper>
                    <Routes>
                        <Route exact path="/" element={<Home />} />
                    </Routes>
                </Wrapper>
            </MainTemplate>
        </ThemeProvider>
    );
};

export default Root;
