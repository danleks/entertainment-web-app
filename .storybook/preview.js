import { ThemeProvider } from "styled-components";
import { GlobalStyle } from 'assets/styles/GlobalStyles';
import {theme} from 'assets/styles/theme';
import { addDecorator } from '@storybook/react';
// import { initializeWorker, mswDecorator } from 'msw-storybook-addon';

// initializeWorker();
// addDecorator(mswDecorator);

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Story />
    </ThemeProvider>
  ),
];