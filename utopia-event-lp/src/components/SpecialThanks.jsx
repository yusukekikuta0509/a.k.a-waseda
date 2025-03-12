function SpecialThanks() {
    const supporters = [
      "○○ダンススタジオ",
      "△△音響機材",
      "□□照明",
      "××衣装サポート",
      "その他ご協力いただいた皆様"
    ];
  
    return (
      <section className="py-16 px-4 relative overflow-hidden">
        {/* Background (placeholder) */}
        <div className="absolute inset-0 z-0 bg-gray-900 opacity-80"></div>
        
        <div className="relative z-10 max-w-3xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-2xl font-light tracking-wider mb-8 border-b border-white inline-block pb-2">Special Thanks</h2>
          
          <div className="space-y-2">
            {supporters.map((supporter, index) => (
              <p 
                key={index} 
                className="text-gray-300"
                data-aos="fade-up"
                data-aos-delay={index * 100}
              >
                {supporter}
              </p>
            ))}
          </div>
          
          <div className="mt-12">
            <button 
              className="border border-white px-6 py-2 text-sm tracking-wider hover:bg-white hover:text-black transition-all duration-300"
            >
              名簿一覧を見る
            </button>
          </div>
        </div>
      </section>
    );
  }
  
  export default SpecialThanks;