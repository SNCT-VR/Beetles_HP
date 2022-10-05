import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'

interface ImageIconInterface {
  imageUrl: string
  alt: string
}
const Image = tw.img`rounded-full h-40 w-40 block mx-auto`

const ImageIcon: FC<ImageIconInterface> = ({ imageUrl, alt }) => (
  <Image src={imageUrl} alt={alt} />
)

export { ImageIcon }
