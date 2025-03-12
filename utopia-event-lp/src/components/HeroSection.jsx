// import waterTexture from '../assets/water-texture.jpg'; // placeholder

function HeroSection() {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Video Background (placeholder) */}
      {/* <div className="absolute inset-0 z-0">
        <img 
          src={#} 
          alt="Water texture background" 
          className="w-full h-full object-cover opacity-50"
        />
      </div>
       */}
      <div className="relative z-10 text-center px-4" data-aos="fade-up">
        <h2 className="text-lg mb-2">aka Wa.Se.Da.</h2>
        <h3 className="text-sm mb-2">4/2a</h3>
        <h3 className="text-sm mb-8">16th春公演</h3>
        
        <h1 className="text-6xl font-light tracking-widest mb-12">UTOPIA</h1>
        
        <div className="text-sm">
          <p>open : OO/OO</p>
          <p>start : OO/OO</p>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;