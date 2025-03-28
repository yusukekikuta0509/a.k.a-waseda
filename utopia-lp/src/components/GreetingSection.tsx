import React from 'react'

const GreetingSection: React.FC = () => {
  return (
    <section className="snap-start h-screen w-full flex items-center justify-center p-4">
      <div className="text-center max-w-md">
        <h2 className="text-2xl font-bold mb-4">幹部挨拶</h2>
        <p className="mb-4">
          ここに幹部からの挨拶文を入れてください。<br/>
          例）本公演に向けての意気込みや感謝の言葉など。
        </p>
        <p>
          多くの皆様のご支援・ご協力により、このステージを開催できることに心より感謝いたします。
        </p>
      </div>
    </section>
  )
}

export default GreetingSection
