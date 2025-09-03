import { useState, useEffect } from "react";
import { MenuIcon, XIcon, DownloadIcon } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = ["HOME", "SKILLS", "ABOUT", "PROJECTS", "CONTACT"];

  const handleNavClick = (item: string) => {
    setIsMenuOpen(false);
    const element = document.getElementById(item.toLowerCase());
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-gray-900/95 backdrop-blur-md border-b border-gray-700/30 shadow-2xl" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a 
                href="#home" 
                className="text-2xl font-bold text-white hover:text-[#FFAE00] transition-colors duration-300"
              >
                <span className="text-[#FFAE00]">&lt;</span>
                JB
                <span className="text-[#FFAE00]">/&gt;</span>
              </a>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              {navItems.map((item) => (
                <div key={item} className="relative group">
                  <button
                    onClick={() => handleNavClick(item)}
                    className="text-gray-300 hover:text-white font-medium transition-colors duration-300 px-2 py-1"
                  >
                    {item}
                    <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#FFAE00] to-orange-500 transition-all duration-500 group-hover:w-full"></span>
                  </button>
                </div>
              ))}
              
              <div className="relative group">
                <a
                  href="/curriculo-joao-breno.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFAE00] to-orange-500 text-black font-semibold rounded-lg hover:from-orange-400 hover:to-[#FFAE00] transition-all duration-300 transform hover:scale-105 group"
                >
                  <DownloadIcon className="w-4 h-4" />
                  CURRÍCULO
                  <div className="absolute -inset-1 bg-[#FFAE00]/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </nav>

            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 text-gray-300 hover:text-white transition-colors duration-300"
            >
              {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-700/30">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item}
                    onClick={() => handleNavClick(item)}
                    className="text-gray-300 hover:text-white font-medium transition-colors duration-300 py-2 text-left"
                  >
                    {item}
                  </button>
                ))}
                <a
                  href="/curriculo-joao-breno.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFAE00] to-orange-500 text-black font-semibold rounded-lg hover:from-orange-400 hover:to-[#FFAE00] transition-all duration-300"
                >
                  <DownloadIcon className="w-4 h-4" />
                  BAIXAR CURRÍCULO
                </a>
              </nav>
            </div>
          </div>
        )}
      </header>

      <div className="h-16"></div>

      <style jsx>{`
        @keyframes fadeInDown {
          from {
            opacity: 0;
            transform: translateY(-20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in-down {
          animation: fadeInDown 0.5s ease-out;
        }
      `}</style>
    </>
  );
}