import { ThemeProvider } from "styled-components";
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import {theme} from 'assets/styles/theme';
//import { addDecorator } from '@storybook/react';
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
  backgrounds: {
    default: 'darkBlue',
    values: [
      {
        name: 'darkBlue',
        value: '#10141E',
      },
    ],
  },
};

export const decorators = [
  (Story) => (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
  ),
];