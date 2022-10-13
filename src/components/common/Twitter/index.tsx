import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'

interface LinkInterface {
  children: React.ReactNode
}
const Twitter = tw.a`text-blue-600 hover:text-blue-700`
const link = 'https://twitter.com/'

const TwitterID: FC<LinkInterface> = ({ children }) => (
  <Twitter href={link + children} target="_blank" rel="noopener noreferrer">
    @{children}
  </Twitter>
)

export { TwitterID }
