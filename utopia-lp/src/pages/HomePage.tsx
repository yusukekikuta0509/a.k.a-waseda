import React from 'react'
import HeroSection from '../components/HeroSection'
import GreetingSection from '../components/GreetingSection'
import LogoDesignSection from '../components/LogoDesignSection'
import DanceGenreSection from '../components/DanceGenreSection'
import SpecialThanksSection from '../components/SpecialThanksSection'
import FooterSection from '../components/FooterSection'

/**
 * ダンスジャンル一覧
 * M順: break, girls, new, middle, lock, wack, jazz, house, pop, R&B, style
 */
const genres = [
  {
    id: 'M1',
    genre: 'break',
    choreographer: 'Choreographer A',
    dancerName: 'コマ生 A',
    videoUrl: '/videos/break.mp4',
    imageUrl: '/images/break.jpg',
  },
  {
    id: 'M2',
    genre: 'girls',
    choreographer: 'Choreographer B',
    dancerName: 'コマ生 B',
    videoUrl: '/videos/girls.mp4',
    imageUrl: '/images/girls.jpg',
  },
  {
    id: 'M3',
    genre: 'new',
    choreographer: 'Choreographer C',
    dancerName: 'コマ生 C',
    videoUrl: '/videos/new.mp4',
    imageUrl: '/images/new.jpg',
  },
  {
    id: 'M4',
    genre: 'middle',
    choreographer: 'Choreographer D',
    dancerName: 'コマ生 D',
    videoUrl: '/videos/middle.mp4',
    imageUrl: '/images/middle.jpg',
  },
  {
    id: 'M5',
    genre: 'lock',
    choreographer: 'Choreographer E',
    dancerName: 'コマ生 E',
    videoUrl: '/videos/lock.mp4',
    imageUrl: '/images/lock.jpg',
  },
  {
    id: 'M6',
    genre: 'wack',
    choreographer: 'Choreographer F',
    dancerName: 'コマ生 F',
    videoUrl: '/videos/wack.mp4',
    imageUrl: '/images/wack.jpg',
  },
  {
    id: 'M7',
    genre: 'jazz',
    choreographer: 'Choreographer G',
    dancerName: 'コマ生 G',
    videoUrl: '/videos/jazz.mp4',
    imageUrl: '/images/jazz.jpg',
  },
  {
    id: 'M8',
    genre: 'house',
    choreographer: 'Choreographer H',
    dancerName: 'コマ生 H',
    videoUrl: '/videos/house.mp4',
    imageUrl: '/images/house.jpg',
  },
  {
    id: 'M9',
    genre: 'pop',
    choreographer: 'Choreographer I',
    dancerName: 'コマ生 I',
    videoUrl: '/videos/pop.mp4',
    imageUrl: '/images/pop.jpg',
  },
  {
    id: 'M10',
    genre: 'R&B',
    choreographer: 'Choreographer J',
    dancerName: 'コマ生 J',
    videoUrl: '/videos/rnb.mp4',
    imageUrl: '/images/rnb.jpg',
  },
  {
    id: 'M11',
    genre: 'style',
    choreographer: 'Choreographer K',
    dancerName: 'コマ生 K',
    videoUrl: '/videos/style.mp4',
    imageUrl: '/images/style.jpg',
  },
]

const HomePage: React.FC = () => {
  return (
    // スマホ1画面ずつスナップスクロール
    <div className="snap-y snap-mandatory h-screen w-screen overflow-scroll bg-black text-white">
      {/* 1) Heroセクション */}
      <HeroSection />

      {/* 2) 幹部挨拶 */}
      <GreetingSection />

      {/* 3) ロゴデザインの説明 */}
      <LogoDesignSection />

      {/* 4) ダンスジャンル (M順) */}
      {genres.map((g) => (
        <DanceGenreSection key={g.id} data={g} />
      ))}

      {/* 5) SpecialThanks */}
      <SpecialThanksSection />

      {/* 6) フッター + 各種リンク (名簿一覧へのリンクなど) */}
      <FooterSection />
    </div>
  )
}

export default HomePage

