import React, { FC } from 'react'
import tw from 'twin.macro'
import ModelDraw from '../common/ModelDraw'
import { Title } from '../common/Title'

interface CharacterInterface {
  title: string
}

const CharacterContainar = tw.div`space-y-2`

const Character: FC<CharacterInterface> = ({ title }) => {
  return (
    <CharacterContainar>
      <Title>{title}</Title>
      <ModelDraw />
    </CharacterContainar>
  )
}
export { Character }
