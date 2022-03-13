import { GlobalStyles } from 'assets/styles/GlobalStyles';
import { theme } from 'assets/styles/theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const Root = () => {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyles />
            <div>hello</div>
        </ThemeProvider>
    );
};

export default Root;
