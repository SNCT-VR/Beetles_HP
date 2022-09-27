import React, { FC } from 'react'
import tw from 'twin.macro'
import ModelDraw from '../common/ModelDraw'
import { Title } from '../common/Title'

interface CharacterInterface {
  title: string
}

const CharacterContainar = tw.div`space-y-4 text-center`

const Character: FC<CharacterInterface> = ({ title }) => (
  <CharacterContainar>
    <Title>{title}</Title>
    <ModelDraw />
  </CharacterContainar>
)

export { Character }
