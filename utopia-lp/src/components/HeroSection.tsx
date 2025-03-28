import React from 'react'

const HeroSection: React.FC = () => {
  return (
    <section className="snap-start relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 背景動画（モノクロ） */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover filter grayscale"
        src="/water.mp4"
        autoPlay
        loop
        muted
      />
      {/* オーバーレイテキスト */}
      <div className="relative z-10 flex flex-col items-center justify-center">
        <h1 className="text-4xl font-bold mb-2">UTOPIA</h1>
        <p className="mb-2">aka Wa.Se.Da. 4/20 16th 公演</p>
        <p className="text-sm">open: 00:00 / start: 00:00</p>
      </div>
    </section>
  )
}

export default HeroSection
