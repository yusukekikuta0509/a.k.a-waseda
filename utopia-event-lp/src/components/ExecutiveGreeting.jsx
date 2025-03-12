function ExecutiveGreeting() {
    return (
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Video Background (placeholder) */}
        <div className="absolute inset-0 z-0 bg-black opacity-80"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-2xl font-light tracking-wider mb-8 border-b border-white inline-block pb-2">幹部挨拶</h2>
          
          <p className="mb-4 text-gray-300">
            私たちは今回の公演で「UTOPIA」というテーマを掲げました。理想郷という意味を持つこの言葉は、
            私たちがダンスを通じて表現したい世界観を象徴しています。
          </p>
          
          <p className="mb-4 text-gray-300">
            それぞれのパフォーマーが考える「理想」を形にし、観客の皆様と共有できることを楽しみにしています。
            この瞬間が、私たちにとっても皆様にとっても特別な時間となることを願っています。
          </p>
          
          <p className="text-right mt-6 text-gray-400">
            実行委員長 ○○○○
          </p>
        </div>
      </section>
    );
  }
  
  export default ExecutiveGreeting;