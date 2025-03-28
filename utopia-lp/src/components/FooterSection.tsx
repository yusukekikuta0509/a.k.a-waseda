import React from 'react'
import { Link } from 'react-router-dom'

const FooterSection: React.FC = () => {
  return (
    <footer className="snap-start h-screen w-full flex flex-col items-center justify-center p-4 bg-black text-white">
      <div className="mb-4">
        <h2 className="text-2xl font-bold">各種リンク</h2>
      </div>
      <div className="flex flex-col space-y-4">
        {/* 名簿一覧ページへのリンク */}
        <Link to="/namelist" className="underline text-center">
          名簿一覧
        </Link>
        {/* SNS などへのリンク (例) */}
        <a
          href="https://twitter.com/..."
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-center"
        >
          Twitter
        </a>
        <a
          href="https://instagram.com/..."
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-center"
        >
          Instagram
        </a>
      </div>
    </footer>
  )
}

export default FooterSection
