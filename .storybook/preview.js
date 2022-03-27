import { ThemeProvider } from "styled-components";
import { GlobalStyles } from 'assets/styles/GlobalStyles';
import {theme} from 'assets/styles/theme';
import { setupWorker, rest } from 'msw';
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
    <div style={{ height: '100vh' }}>
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Story />
    </ThemeProvider>
    </div>
  ),
];

// Storybook executes this module in both bootstrap phase (Node)
// and a story's runtime (browser). However, we cannot call `setupWorker`
// in Node environment, so we need to check if we're in a browser.
if (typeof global.process === 'undefined') {
  // Create the mockServiceWorker (msw).
  const worker = setupWorker();
  // Start the service worker.
  worker.start();
  // Make the `worker` and `rest` references available globally,
  // so they can be accessed in stories.
  window.msw = { worker, rest };
}