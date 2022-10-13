import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import { Title } from '../common/Title'
import { Text } from '../common/Text'
import { consepts } from '../../data/concept'
import { Image } from '../common/Image'

interface AboutInterface {
  title: string
  children: React.ReactNode
}
const AboutContainer = tw.div`space-y-4 text-center mx-2`
const FlexBox = tw.ul`flex flex-wrap md:mx-24 xl:mx-96 justify-center `
const ImageStyle = tw`w-72 h-72 md:(w-96 h-96 mx-4 my-4) my-2 mx-2 rounded-3xl `

const About: FC<AboutInterface> = ({ title, children }) => (
  <AboutContainer>
    <Title>{title}</Title>
    <Text>{children}</Text>
    <FlexBox>
      {consepts.map(item => (
        <li key={item.alt}>
          <Image src={item.imgUrl} alt={item.alt} css={ImageStyle} />
        </li>
      ))}
    </FlexBox>
  </AboutContainer>
)

export { About }
