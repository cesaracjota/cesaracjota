import { Global } from '@emotion/react'

export const FontsGlobal = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'Balsamiq Sans';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/assets/fonts/BalsamiqSans_Bold') format('ttf'),
            url('/assets/fonts/BalsamiqSans_Bold.ttf') format('ttf');
      }
      @font-face {
        font-family: 'Special Elite';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/assets/fonts/SpecialElite') format('ttf'),
            url('/assets/fonts/SpecialElite.ttf') format('ttf');
      }
    `}
  />
)
/*
@font-face {
  font-family: 'Special Elite';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/assets/fonts/SpecialElite') format('ttf'),
      url('/assets/fonts/SpecialElite.ttf') format('ttf');
}
@font-face {
  font-family: 'Special Elite';
  font-style: normal;
  font-weight: 400;
  font-display: swap;
  src: url('/assets/fonts/SpecialElite') format('ttf'),
      url('/assets/fonts/SpecialElite.ttf') format('ttf');
}
*/