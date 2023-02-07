import 'styled-components'
import { defaultTheme } from '../styles/themes/default'
import { themeLight } from '../styles/themes/themeLight'

type ThemeType = typeof defaultTheme; typeof themeLight

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}