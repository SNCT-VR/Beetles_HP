interface Props {
  name: string
  role: string
  imageUrl: string
  alt: string
}
export const profiles: Props[] = [
  {
    name: 'Akane Matuda',
    role: 'リーダー , モデル制作 , パーツ加工',
    imageUrl: '/data/new_icon.jpeg',
    alt: "akane's Icon",
  },
  {
    name: 'Keisuke Tominaga',
    role: 'ハードウェアの設計&制御',
    imageUrl: '/data/new_icon.jpeg',
    alt: "keisuke's Icon",
  },
  {
    name: 'Keigo Kondo',
    role: 'ゲーム制作全般 , 回路制作など',
    imageUrl: '/data/new_icon.jpeg',
    alt: "keigo's Icon",
  },
  {
    name: 'Shunta Yamagiwa',
    role: 'ゲーム制作アシスト , HP制作',
    imageUrl: '/data/new_icon.jpeg',
    alt: "shunta's Icon",
  },
]
