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
    imageUrl: '/image/akane.jpeg',
    alt: "akane's Icon",
    id: 'vv_vv_vvv__',
  },
  {
    name: 'Keisuke Tominaga',
    role: 'ハードウェア制御 , 回路設計',
    imageUrl: '/image/tommy.jpeg',
    alt: "keisuke's Icon",
    id: 'tommy31i',
  },
  {
    name: 'Keigo Kondo',
    role: 'ゲーム制作全般 , 回路制作',
    imageUrl: '/image/kondo.jpeg',
    alt: "keigo's Icon",
    id: '_nakimikan',
  },
  {
    name: 'Shunta Yamagiwa',
    role: 'ゲーム制作アシスト , HP制作',
    imageUrl: '/image/sansai.jpg',
    alt: "shunta's Icon",
    id: 'sansai_dev',
  },
]
