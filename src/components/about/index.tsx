import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import { Title } from '../common/Title'
import { Text } from '../common/Text'

interface AboutInterface {
  title: string
  children: React.ReactNode
}
const AboutContainar = tw.div`space-y-4 text-center mx-2`

const About: FC<AboutInterface> = ({ title, children }) => (
  <AboutContainar>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </AboutContainar>
)

export { About }
