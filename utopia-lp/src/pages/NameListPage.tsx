import React from 'react'

const NameListPage: React.FC = () => {
  return (
    <div className="min-h-screen w-full bg-black text-white p-4">
      <h1 className="text-2xl font-bold mb-4">名簿一覧</h1>
      <p>ここにメンバーの名簿一覧を表示します。</p>

      {/* 例: テーブルやリストでメンバーを表示 */}
      <ul className="list-disc list-inside mt-4">
        <li>メンバー A</li>
        <li>メンバー B</li>
        <li>メンバー C</li>
        {/* ... */}
      </ul>
    </div>
  )
}

export default NameListPage
