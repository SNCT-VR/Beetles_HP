import React from 'react'
import type { FC } from 'react'
import tw from 'twin.macro'

interface HeroInterface {
  imgUrl: string
  alt: string
  children: React.ReactNode
}

const HeroContainar = tw.div`h-screen text-center flex flex-col`
const Image = tw.img` m-auto scale-75 md:scale-100 md:h-2/5`
const ScrollButton = tw.button` bg-masara text-white font-bold animate-bounce w-48 h-24  rounded-full m-auto`

const scroller = () =>
  window.scrollTo({
    top: window.innerHeight,
    behavior: 'smooth',
  })

const Hero: FC<HeroInterface> = ({ imgUrl, alt, children }) => (
  <HeroContainar>
    <Image src={imgUrl} alt={alt} />
    <ScrollButton onClick={() => scroller()}>{children}</ScrollButton>
  </HeroContainar>
)

export { Hero }
