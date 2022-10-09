import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import { Text } from '../Text'

const FooterContainer = tw.footer` text-center`

const Footer: FC = () => (
  <FooterContainer>
    <Text>&copy; 成績底辺の会</Text>
  </FooterContainer>
)

export { Footer }
