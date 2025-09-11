import { useState, useEffect } from "react";
import { MenuIcon, XIcon, DownloadIcon, SunIcon, MoonIcon } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);

  useEffect(() => {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
      document.documentElement.classList.toggle('dark', savedTheme === 'dark');
    } else {
      setIsDarkMode(prefersDark);
      if (prefersDark) {
        document.documentElement.classList.add('dark');
      }
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      
      // Atualizar seção ativa
      const sections = ["home", "serviços", "habilidades", "sobre", "projetos", "contato", "recomendações"];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
  };

  const navItems = [
    { id: "serviços", label: "SERVIÇOS" },
    { id: "habilidades", label: "HABILIDADES" },
    { id: "sobre", label: "SOBRE" },
    { id: "projetos", label: "PROJETOS" },
    { id: "contato", label: "CONTATO" },
    { id: "recomendações", label: "RECOMENDAÇÕES" }
  ];

  const handleNavClick = (itemId: string) => {
    setIsMenuOpen(false);
    setHoveredItem(null);
    const element = document.getElementById(itemId);
    if (element) {
      element.scrollIntoView({ 
        behavior: "smooth",
        block: "start"
      });
    }
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/30 shadow-2xl" 
          : "bg-transparent"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a 
                href="#home" 
                className="text-2xl font-bold text-gray-900 dark:text-white hover:text-[#FFAE00] dark:hover:text-[#FFAE00] transition-all duration-300 group"
                onClick={(e) => {
                  e.preventDefault();
                  window.scrollTo({ top: 0, behavior: 'smooth' });
                  setActiveSection('home');
                  setHoveredItem(null);
                }}
              >
                <span className="text-[#FFAE00] group-hover:scale-110 transition-transform duration-300">&lt;</span>
                <span className="mx-1 group-hover:scale-105 transition-transform duration-300">JB</span>
                <span className="text-[#FFAE00] group-hover:scale-110 transition-transform duration-300">/&gt;</span>
              </a>
            </div>

            <nav className="hidden md:flex items-center space-x-6">
              {navItems.map((item) => (
                <div 
                  key={item.id} 
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button
                    onClick={() => handleNavClick(item.id)}
                    className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg ${
                      activeSection === item.id
                        ? "text-[#FFAE00] bg-[#FFAE00]/10"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white"
                    }`}
                  >
                    {item.label}
                    <span className={`absolute left-1/2 -bottom-1 h-0.5 w-0 bg-gradient-to-r from-[#FFAE00] to-orange-500 transition-all duration-300 ${
                      activeSection === item.id 
                        ? "w-full left-0" 
                        : (hoveredItem === item.id ? "w-full left-0" : "")
                    }`}></span>
                  </button>
                </div>
              ))}
              
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300 hover:scale-110"
                aria-label="Alternar tema"
              >
                {isDarkMode ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>

              <div className="relative group">
                <a
                  href="/curriculo-joao-breno.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFAE00] to-orange-500 text-black font-semibold rounded-lg hover:from-orange-400 hover:to-[#FFAE00] transition-all duration-300 transform hover:scale-105 group shadow-lg hover:shadow-[#FFAE00]/30"
                >
                  <DownloadIcon className="w-4 h-4" />
                  CURRÍCULO
                  <div className="absolute -inset-1 bg-[#FFAE00]/20 rounded-lg blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              </div>
            </nav>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={toggleDarkMode}
                className="p-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-all duration-300"
                aria-label="Alternar tema"
              >
                {isDarkMode ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
              </button>

              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors duration-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800"
              >
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-200/30 dark:border-gray-700/30">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-3 px-4 rounded-lg transition-all duration-300 ${
                      activeSection === item.id
                        ? "text-[#FFAE00] bg-[#FFAE00]/10 font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800"
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
                <a
                  href="/curriculo-joao-breno.pdf"
                  download
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#FFAE00] to-orange-500 text-black font-semibold rounded-lg hover:from-orange-400 hover:to-[#FFAE00] transition-all duration-300 mt-4"
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
        
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-3px); }
        }
        
        .animate-fade-in-down {
          animation: fadeInDown 0.5s ease-out;
        }
        
        .animate-float {
          animation: float 3s ease-in-out infinite;
        }
        
        header::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 0;
          right: 0;
          height: 2px;
          background: linear-gradient(90deg, transparent, #FFAE00, transparent);
          opacity: 0;
          transition: opacity 0.3s ease;
        }
        
        header:hover::after {
          opacity: 0.5;
        }
      `}</style>
    </>
  );
}