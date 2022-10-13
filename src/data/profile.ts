interface Props {
  name: string
  role: string
  imageUrl: string
  alt: string
  id: string
}
export const profiles: Props[] = [
  {
    name: 'Akane Matuda',
    role: 'リーダー , モデル制作 , ハードウェア設計',
    imageUrl: '/image/profiles/akane.webp',
    alt: "akane's Icon",
    id: 'vv_vv_vvv__',
  },
  {
    name: 'Keisuke Tominaga',
    role: 'ハードウェア制御 , 回路設計',
    imageUrl: '/image/profiles/tommy.webp',
    alt: "keisuke's Icon",
    id: 'tommy31i',
  },
  {
    name: 'Keigo Kondo',
    role: 'ゲーム制作全般 , 回路制作',
    imageUrl: '/image/profiles/kondo.webp',
    alt: "keigo's Icon",
    id: '_nakimikan',
  },
  {
    name: 'Shunta Yamagiwa',
    role: 'ゲーム制作アシスト , HP制作',
    imageUrl: '/image/profiles/sansai.webp',
    alt: "shunta's Icon",
    id: 'sansai_dev',
  },
]
