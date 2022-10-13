import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'
import { Image } from '../Image'

interface ImageIconInterface {
  imageUrl: string
  alt: string
}

const ImageIcon: FC<ImageIconInterface> = ({ imageUrl, alt }) => (
  <Image src={imageUrl} alt={alt} css={tw`rounded-full h-40 w-40`} />
)

export { ImageIcon }
