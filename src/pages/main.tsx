import React from 'react'
import tw from 'twin.macro'
import { About } from '../components/about'
import { Character } from '../components/character'
import { Footer } from '../components/common/footer'
import { Hero } from '../components/common/hero'
import { Member } from '../components/member'

const MainPageContainer = tw.div` space-y-8 min-h-screen bg-background`

const MainPage = (): JSX.Element => (
  <MainPageContainer>
    <Hero imgUrl="/image/bee.webp" alt="beettles">
      Beettlesをチェック!!
    </Hero>
    <About title="コンセプト">
      {' '}
      Beettlesは蜂 vs 人間をテーマにしたマルチ対戦型VRゲームです。
      <br />
      蜂側のプレイヤーはコックピット型ハードウェアに乗り込んで操作します。
      <br />
    </About>
    <Character title="キャラクター" />
    <Member title="開発メンバー" />
    <Footer text="4I成績底辺の会" />
  </MainPageContainer>
)

export { MainPage }
