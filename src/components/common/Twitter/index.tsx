import React, { FC } from 'react'
import tw from 'twin.macro'

interface LinkInterface {
  children: React.ReactNode
}
const Twitter = tw.a`text-blue-500 hover:text-blue-600`
const link = 'https://twitter.com/'

const TwitterID: FC<LinkInterface> = ({ children }) => {
  return (
    <Twitter href={link + children} target={'_blank'} rel="noopener noreferrer">
      @{children}
    </Twitter>
  )
}

export { TwitterID }
