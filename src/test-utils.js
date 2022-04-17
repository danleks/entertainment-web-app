import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import AppProvider from 'providers/AppProvider';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'assets/styles/theme';

const AllTheProviders = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <BrowserRouter>
                <AppProvider>{children}</AppProvider>
            </BrowserRouter>
        </ThemeProvider>
    );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
