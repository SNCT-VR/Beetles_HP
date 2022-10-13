import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import { Text } from '../Text'

interface FooterInterface {
  text: string
}
const FooterContainer = tw.footer` text-center`

const Footer: FC<FooterInterface> = ({ text }) => (
  <FooterContainer>
    <Text>&copy; {text}</Text>
  </FooterContainer>
)

export { Footer }
