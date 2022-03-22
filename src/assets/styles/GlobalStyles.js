import { createGlobalStyle } from 'styled-components';
import OUTFIT_LIGHT_WOFF from 'assets/fonts/outfit-v4-latin-300.woff';
import OUTFIT_MEDIUM_WOFF from 'assets/fonts/outfit-v4-latin-500.woff';
import OUTFIT_LIGHT_WOFF2 from 'assets/fonts/outfit-v4-latin-300.woff2';
import OUTFIT_MEDIUM_WOFF2 from 'assets/fonts/outfit-v4-latin-500.woff2';
import OUTFIT_LIGHT_EOT from 'assets/fonts/outfit-v4-latin-300.eot';
import OUTFIT_MEDIUM_EOT from 'assets/fonts/outfit-v4-latin-500.eot';
import OUTFIT_LIGHT_SVG from 'assets/fonts/outfit-v4-latin-300.svg';
import OUTFIT_MEDIUM_SVG from 'assets/fonts/outfit-v4-latin-500.svg';
import OUTFIT_LIGHT_TTF from 'assets/fonts/outfit-v4-latin-300.ttf';
import OUTFIT_MEDIUM_TTF from 'assets/fonts/outfit-v4-latin-500.ttf';

export const GlobalStyles = createGlobalStyle`

/* outfit-300 - latin */
@font-face {
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 300;
  src: url(${OUTFIT_LIGHT_EOT}); /* IE9 Compat Modes */
  src: local(''),
       url(${OUTFIT_LIGHT_EOT}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
       url(${OUTFIT_LIGHT_WOFF2}) format('woff2'), /* Super Modern Browsers */
       url(${OUTFIT_LIGHT_WOFF}) format('woff'), /* Modern Browsers */
       url(${OUTFIT_LIGHT_TTF}) format('truetype'), /* Safari, Android, iOS */
       url(${OUTFIT_LIGHT_SVG}) format('svg'); /* Legacy iOS */
}

/* outfit-500 - latin */
@font-face {
  font-family: 'Outfit';
  font-style: normal;
  font-weight: 500;
  src: url(${OUTFIT_MEDIUM_EOT}); /* IE9 Compat Modes */
  src: local(''),
        url(${OUTFIT_MEDIUM_EOT}?#iefix) format('embedded-opentype'), /* IE6-IE8 */
        url(${OUTFIT_MEDIUM_WOFF2}) format('woff2'), /* Super Modern Browsers */
        url(${OUTFIT_MEDIUM_WOFF}) format('woff'), /* Modern Browsers */
        url(${OUTFIT_MEDIUM_TTF}) format('truetype'), /* Safari, Android, iOS */
        url(${OUTFIT_MEDIUM_SVG}) format('svg'); /* Legacy iOS */
}

    html {
        box-sizing: border-box;
        font-size: 62.5% /* from now 1rem === 10px */
    }
    *, *:before, *:after {
        box-sizing: inherit;
        padding: 0;
        margin: 0;
    }
    body {
        font-size: 1.6rem;
        font-family: 'Outfit', sans-serif;
        background-color: ${({ theme }) => theme.c.darkBlue};
    }
`;
