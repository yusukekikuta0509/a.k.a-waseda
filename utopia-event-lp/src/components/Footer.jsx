function Footer() {
    const links = [
      { name: "Instagram", url: "#" },
      { name: "Twitter", url: "#" },
      { name: "YouTube", url: "#" },
      { name: "Official Website", url: "#" }
    ];
  
    return (
      <footer className="py-12 px-4 border-t border-gray-800">
        <div className="max-w-4xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-6 md:mb-0">
              <h2 className="text-xl font-light tracking-wider mb-2">UTOPIA</h2>
              <p className="text-sm text-gray-400">aka Wa.Se.Da. 16th春公演</p>
            </div>
            
            <div>
              <h3 className="text-lg mb-3 text-center md:text-right">Links</h3>
              <div className="flex space-x-4">
                {links.map((link, index) => (
                  <a 
                    key={index}
                    href={link.url}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
          
          <div className="mt-12 text-center text-xs text-gray-500">
            <p>© 2025 aka Wa.Se.Da. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    );
  }
  
  export default Footer;