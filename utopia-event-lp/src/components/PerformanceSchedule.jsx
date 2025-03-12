import { useState } from 'react';

function PerformanceSchedule() {
  const [activeIndex, setActiveIndex] = useState(null);
  
  const performances = [
    {
      id: 'M1',
      title: 'M1 OO',
      choreographer: '振付師名1',
      performers: ['パフォーマー1', 'パフォーマー2', 'パフォーマー3'],
      genre: 'HIPHOP',
      videoUrl: '#',
    },
    {
      id: 'M2',
      title: 'M2 OO',
      choreographer: '振付師名2',
      performers: ['パフォーマー4', 'パフォーマー5', 'パフォーマー6'],
      genre: 'JAZZ',
      videoUrl: '#',
    },
    {
      id: 'M3',
      title: 'M3 OO',
      choreographer: '振付師名3',
      performers: ['パフォーマー7', 'パフォーマー8', 'パフォーマー9'],
      genre: 'CONTEMPORARY',
      videoUrl: '#',
    },
    {
      id: 'M4',
      title: 'M4 OO',
      choreographer: '振付師名4',
      performers: ['パフォーマー10', 'パフォーマー11', 'パフォーマー12'],
      genre: 'HOUSE',
      videoUrl: '#',
    },
    {
      id: 'M5',
      title: 'M5 GIRLS',
      choreographer: '振付師名5',
      performers: ['西村良美', '松島秀苑', '田口怜'],
      genre: 'GIRLS',
      videoUrl: '#',
    },
    {
      id: 'M6',
      title: 'M6 OO',
      choreographer: '振付師名6',
      performers: ['パフォーマー16', 'パフォーマー17', 'パフォーマー18'],
      genre: 'LOCK',
      videoUrl: '#',
    },
    {
      id: 'M7',
      title: 'M7 OO',
      choreographer: '振付師名7',
      performers: ['パフォーマー19', 'パフォーマー20', 'パフォーマー21'],
      genre: 'BREAK',
      videoUrl: '#',
    },
  ];

  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Video Background (placeholder) */}
      <div className="absolute inset-0 z-0 bg-black opacity-90"></div>
      
      <div className="relative z-10 max-w-4xl mx-auto" data-aos="fade-up">
        <h2 className="text-2xl font-light tracking-wider mb-8 text-center border-b border-white inline-block pb-2">公演内容</h2>
        
        <div className="space-y-8">
          {performances.map((item, index) => (
            <div 
              key={item.id}
              className="border-l-2 border-white pl-4 transition-all duration-300"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div 
                className="flex justify-between items-center cursor-pointer"
                onClick={() => setActiveIndex(activeIndex === index ? null : index)}
              >
                <h3 className="text-xl font-light">{item.title}</h3>
                <span className="text-2xl">{activeIndex === index ? '−' : '+'}</span>
              </div>
              
              {activeIndex === index && (
                <div className="mt-4 pl-2 border-l border-gray-700">
                  <div className="aspect-video bg-gray-900 mb-4 flex items-center justify-center">
                    <p className="text-gray-500">振り師 Movie (準備中)</p>
                  </div>
                  
                  <p className="mb-2"><span className="text-gray-400">ジャンル:</span> {item.genre}</p>
                  <p className="mb-2"><span className="text-gray-400">振り師:</span> {item.choreographer}</p>
                  
                  <div className="mt-4">
                    <h4 className="text-sm text-gray-400 mb-2">出演者:</h4>
                    <div className="flex flex-wrap gap-2">
                      {item.performers.map((performer, i) => (
                        <span key={i} className="bg-gray-800 px-2 py-1 text-xs rounded">
                          {performer}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default PerformanceSchedule;