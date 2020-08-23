/* eslint-disable @typescript-eslint/no-empty-interface */
import 'styled-components';

import theme from './light';

type Theme = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {}
}
