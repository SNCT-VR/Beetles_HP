import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import ModelDraw from '../common/ModelDraw'
import { Title } from '../common/Title'

interface CharacterInterface {
  title: string
}

const CharacterContainer = tw.div`space-y-4 text-center`

const Character: FC<CharacterInterface> = ({ title }) => (
  <CharacterContainer>
    <Title>{title}</Title>
    <ModelDraw />
  </CharacterContainer>
)

export { Character }
