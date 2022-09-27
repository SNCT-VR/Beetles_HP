import React, { FC } from 'react'
import tw from 'twin.macro'

interface ImageIconInterface {
  imageUrl: string
  alt: string
}
const Image = tw.img`rounded-full h-24 w-24 block mx-auto`

const ImageIcon: FC<ImageIconInterface> = ({ imageUrl, alt }) => (
  <Image src={imageUrl} alt={alt} />
)

export { ImageIcon }
