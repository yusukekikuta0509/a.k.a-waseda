import gridPattern from '../assets/react.svg'; // placeholder

function LogoExplanation() {
  return (
    <section className="py-16 px-4 relative overflow-hidden">
      {/* Background Image (placeholder) */}
      <div className="absolute inset-0 z-0">
        <img 
          src={gridPattern} 
          alt="Grid pattern" 
          className="w-full h-full object-cover opacity-30"
        />
      </div>
      
      <div className="relative z-10 max-w-3xl mx-auto" data-aos="fade-up">
        <h2 className="text-2xl font-light tracking-wider mb-8 text-center border-b border-white inline-block pb-2">ロゴデザイン</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <p className="mb-4 text-gray-300">
              今回のロゴデザインは「水面」をモチーフにしています。水面が揺れ動く様子は、
              私たちのダンスの流動性を表しています。また、「UTOPIA」というタイトルの文字を
              大きく配置することで、観る人に強いインパクトを与えることを意図しています。
            </p>
          </div>
          
          <div className="flex justify-center items-center">
            <div className="w-40 h-40 border border-white flex items-center justify-center">
              <span className="text-xl tracking-widest">UTOPIA</span>
            </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-400">
          <p>デザイン: 西村良美、松島秀苑、田口怜</p>
        </div>
      </div>
    </section>
  );
}

export default LogoExplanation;