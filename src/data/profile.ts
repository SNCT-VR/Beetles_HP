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
    imageUrl: '/assets/image/akane.jpeg',
    alt: "akane's Icon",
  },
  {
    name: 'Keisuke Tominaga',
    role: 'ハードウェアの設計&制御',
    imageUrl: '/assets/image/tommy.jpeg',
    alt: "keisuke's Icon",
  },
  {
    name: 'Keigo Kondo',
    role: 'ゲーム制作全般 , 回路制作など',
    imageUrl: '/assets/image/kondo.jpeg',
    alt: "keigo's Icon",
  },
  {
    name: 'Shunta Yamagiwa',
    role: 'ゲーム制作アシスト , HP制作',
    imageUrl: '/assets/image/sansai.jpg',
    alt: "shunta's Icon",
  },
]
