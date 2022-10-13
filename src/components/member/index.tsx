import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import { Title } from '../common/Title'
import { profiles } from '../../data/profile'
import { ImageIcon } from '../common/ImageIcon'
import { Text } from '../common/Text'
import { TwitterID } from '../common/Twitter'

interface MemberInterface {
  title: string
}

const MemberContainer = tw.div`space-y-2 text-center`
const ProfileBox = tw.li`space-y-1.5  w-full md:w-1/2 my-4`
const FlexBox = tw.ul`flex justify-center flex-wrap md:mx-12 xl:mx-96`

const Member: FC<MemberInterface> = ({ title }) => (
  <MemberContainer>
    <Title>{title}</Title>
    <FlexBox>
      {profiles.map(item => (
        <ProfileBox key={item.name}>
          <ImageIcon imageUrl={item.imageUrl} alt={item.alt} />
          <Text css={tw`font-medium`}>{item.name}</Text>
          <TwitterID>{item.id}</TwitterID>
          <Text>{item.role}</Text>
        </ProfileBox>
      ))}
    </FlexBox>
  </MemberContainer>
)

export { Member }
