import React from 'react'
import { css, Global } from '@emotion/react'
import { GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = css`
  @font-face {
    font-family: 'Zen KakuGothic New';
    src: url('/fonts/Zen/ZenKakuGothicNew.woff2') format('woff2'),
      url('/fonts/Zen/ZenKakuGothicNew.woff') format('woff'),
      url('/fonts/Zen/ZenKakuGothicNew.ttf') format('truetype'),
      url('/fonts/Zen/ZenKakuGothicNew.eot') format('embedded-opentype');
    font-style: normal;
    font-weight: 400;
    /* https://styled-components.com/docs/faqs#how-do-i-fix-flickering-text-after-server-side-rendering */
    font-display: fallback;
  }
`

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
