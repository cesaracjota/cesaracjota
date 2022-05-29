import { Global } from '@emotion/react'

export const FontsGlobal = () => (
  <Global
    styles={`
      @font-face {
        font-family: 'sans-serif';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/assets/fonts/SansSerifBldFLF') format('otf'),
            url('/assets/fonts/SansSerifBldFLF.otf') format('otf');
      }
      @font-face {
        font-family: 'Raleway';
        font-style: normal;
        font-weight: 400;
        font-display: swap;
        src: url('/assets/fonts/Raleway-VariableFont_wght') format('ttf'),
            url('/assets/fonts/Raleway-VariableFont_wght.ttf') format('ttf');
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