import React from 'react'

interface DanceGenre {
  id: string
  genre: string
  choreographer: string
  dancerName: string
  videoUrl: string
  imageUrl: string
}

interface Props {
  data: DanceGenre
}

const DanceGenreSection: React.FC<Props> = ({ data }) => {
  return (
    <section className="snap-start h-screen w-full flex flex-col">
      {/* 上半分：画像 + テキスト */}
      <div className="flex-1 relative">
        <img
          src={data.imageUrl}
          alt={data.genre}
          className="w-full h-full object-cover filter grayscale"
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-30 p-4">
          <h3 className="text-xl font-bold mb-2">
            {data.id} - {data.genre}
          </h3>
          <p className="mb-1">振り師: {data.choreographer}</p>
          <p className="mb-1">コマ生: {data.dancerName}</p>
        </div>
      </div>

      {/* 下半分：動画 */}
      <div className="flex-1 relative">
        <video
          className="w-full h-full object-cover filter grayscale"
          src={data.videoUrl}
          autoPlay
          loop
          muted
        />
      </div>
    </section>
  )
}

export default DanceGenreSection
