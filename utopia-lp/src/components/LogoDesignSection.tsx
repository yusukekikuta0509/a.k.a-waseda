import React from 'react'

const LogoDesignSection: React.FC = () => {
  return (
    <section className="snap-start h-screen w-full flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-4">ロゴデザインの説明</h2>
        <p className="mb-4">
          ここにロゴのデザインコンセプトや制作意図を記載します。
        </p>
        <p>
          例）UTOPIAというテーマを表現するために、水面をイメージしたモチーフを使用し、全体をモノトーンでまとめています。
        </p>
      </div>
    </section>
  )
}

export default LogoDesignSection
