import React from 'react';
import '@testing-library/jest-dom';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { BrowserRouter } from 'react-router-dom';
import { theme } from 'assets/styles/theme';

const AllTheProviders = ({ children }) => {
    return (
        <BrowserRouter>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </BrowserRouter>
    );
};

const customRender = (ui, options) => render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
