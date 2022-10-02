import tw from 'twin.macro'
import React, { FC } from 'react'
import { Title } from '../common/Title'
import { Text } from '../common/Text'

interface aboutInterface {
  title: string
  children: React.ReactNode
}
const AboutContainar = tw.div`space-y-4 text-center mx-2`

const About: FC<aboutInterface> = ({ title, children }) => (
  <AboutContainar>
    <Title>{title}</Title>
    <Text>{children}</Text>
  </AboutContainar>
)

export { About }
