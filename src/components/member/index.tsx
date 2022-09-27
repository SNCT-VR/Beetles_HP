import React, { FC } from 'react'
import tw from 'twin.macro'
import { Title } from '../common/Title'
import { profiles } from '../../data/profile'
import { ImageIcon } from '../common/ImageIcon'
import { Text } from '../common/Text'

interface MemberInterface {
  title: string
}

const MemberContainar = tw.div`space-y-2 text-center`
const ProfileBox = tw.div`space-y-1.5  w-full md:w-1/2 my-4`
const FlexBox = tw.ul`flex justify-center flex-wrap`

const Member: FC<MemberInterface> = ({ title }) => (
  <MemberContainar>
    <Title>{title}</Title>
    <FlexBox>
      {profiles.map(item => (
        <ProfileBox key={item.name}>
          <ImageIcon imageUrl={item.imageUrl} alt={item.alt} />
          <Text>{item.name}</Text>
          <Text>{item.role}</Text>
        </ProfileBox>
      ))}
    </FlexBox>
  </MemberContainar>
)

export { Member }
