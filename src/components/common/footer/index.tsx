import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import { Text } from '../Text'

const FooterContainar = tw.footer` text-center`

const Footer: FC = () => (
  <FooterContainar>
    <Text>&copy; 成績底辺の会</Text>
  </FooterContainar>
)

export { Footer }
