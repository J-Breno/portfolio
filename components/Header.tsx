import { useState, useEffect, useRef } from "react";
import { MenuIcon, XIcon, DownloadIcon, SunIcon, MoonIcon, SparklesIcon } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<string | null>(null);
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const underlineRef = useRef<HTMLDivElement>(null);
  const navRef = useRef<HTMLDivElement>(null);

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

    const handleMouseMove = (e: MouseEvent) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Atualizar posição da linha indicadora
    if (navRef.current && underlineRef.current) {
      const activeElement = navRef.current.querySelector(`[data-id="${activeSection}"]`);
      if (activeElement) {
        const rect = activeElement.getBoundingClientRect();
        const navRect = navRef.current.getBoundingClientRect();
        
        underlineRef.current.style.width = `${rect.width}px`;
        underlineRef.current.style.left = `${rect.left - navRect.left}px`;
        underlineRef.current.style.opacity = '1';
      }
    }
  }, [activeSection, hoveredItem]);

  const toggleDarkMode = () => {
    const newDarkMode = !isDarkMode;
    setIsDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('theme', newDarkMode ? 'dark' : 'light');
    
    // Efeito de confetti ao alternar o tema
    if (newDarkMode) {
      createDarkModeTransition();
    }
  };

  const createDarkModeTransition = () => {
    const confettiCount = 30;
    const container = document.createElement('div');
    container.style.position = 'fixed';
    container.style.top = '0';
    container.style.left = '0';
    container.style.width = '100%';
    container.style.height = '100%';
    container.style.pointerEvents = 'none';
    container.style.zIndex = '9999';
    document.body.appendChild(container);

    for (let i = 0; i < confettiCount; i++) {
      const confetti = document.createElement('div');
      confetti.style.position = 'absolute';
      confetti.style.width = '6px';
      confetti.style.height = '6px';
      confetti.style.backgroundColor = isDarkMode ? '#FFAE00' : '#6b7280';
      confetti.style.borderRadius = '50%';
      confetti.style.top = '60px';
      confetti.style.left = `${Math.random() * 100}%`;
      confetti.style.opacity = '0';
      container.appendChild(confetti);

      // Animação
      const animation = confetti.animate([
        { 
          opacity: 1,
          transform: 'translateY(0) rotate(0deg)',
          backgroundColor: isDarkMode ? '#FFAE00' : '#6b7280'
        },
        { 
          opacity: 0.8,
          transform: `translateY(${Math.random() * 200 + 100}px) rotate(${360 * Math.random()}deg)`,
          backgroundColor: isDarkMode ? '#f59e0b' : '#9ca3af'
        }
      ], {
        duration: 1000 + Math.random() * 1000,
        easing: 'cubic-bezier(0.1, 0.8, 0.3, 1)'
      });

      animation.onfinish = () => {
        confetti.remove();
        if (i === confettiCount - 1) {
          container.remove();
        }
      };
    }
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

  // Função para determinar a cor do texto baseado no estado
  const getTextColorClass = (isButton = false) => {
    if (isButton) {
      // Para botões, mantenha as cores originais
      return "";
    }
    
    if (!isScrolled) {
      // No topo - texto branco
      return "text-white";
    } else {
      // Com scroll - texto preto no light mode, branco no dark mode
      return isDarkMode ? "text-white" : "text-black";
    }
  };

  return (
    <>
      {/* Efeito de cursor personalizado */}
      <div 
        className="fixed hidden md:block pointer-events-none z-50 transition-all duration-100 ease-out"
        style={{
          left: `${cursorPosition.x - 15}px`,
          top: `${cursorPosition.y - 15}px`,
          width: '30px',
          height: '30px',
          borderRadius: '50%',
          backgroundColor: 'rgba(255, 174, 0, 0.2)',
          border: '2px solid rgba(255, 174, 0, 0.5)',
          mixBlendMode: 'difference',
          transform: 'scale(1)',
          opacity: isScrolled ? 0.7 : 0,
          transition: 'transform 0.2s, opacity 0.3s'
        }}
      />
      
      <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        isScrolled 
          ? "bg-white/95 dark:bg-gray-900/95 backdrop-blur-md border-b border-gray-200/30 dark:border-gray-700/30 shadow-2xl py-1" 
          : "bg-transparent py-2"
      }`}>
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-14">
            <div className="flex items-center">
              <a 
                href="#home" 
                className={`text-2xl font-bold hover:text-[#FFAE00] transition-all duration-300 group relative ${getTextColorClass()}`}
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
                
                {/* Efeito de brilho ao redor do logo */}
                <span className="absolute -inset-2 bg-[#FFAE00]/10 rounded-full opacity-0 group-hover:opacity-100 blur-md transition-opacity duration-300" />
              </a>
            </div>

            <nav ref={navRef} className="hidden md:flex items-center space-x-1 relative">
              {/* Linha indicadora - corrigida */}
              <div
                ref={underlineRef}
                className="absolute -bottom-1 h-0.5 bg-gradient-to-r from-[#FFAE00] to-orange-500 transition-all duration-300 opacity-0"
              />
              
              {navItems.map((item) => (
                <div 
                  key={item.id} 
                  className="relative group"
                  onMouseEnter={() => setHoveredItem(item.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <button
                    data-id={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`font-medium transition-all duration-300 px-3 py-2 rounded-lg relative overflow-hidden ${
                      activeSection === item.id
                        ? "text-[#FFAE00]"
                        : `${getTextColorClass()} hover:text-[#FFAE00]`
                    }`}
                  >
                    {item.label}
                    
                    {/* Efeito de fundo ao passar o mouse */}
                    <span className="absolute inset-0 bg-gradient-to-r from-[#FFAE00]/10 to-orange-500/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
                    
                    {/* Efeito de partículas ao passar o mouse */}
                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {[...Array(3)].map((_, i) => (
                        <span
                          key={i}
                          className="absolute w-1 h-1 bg-[#FFAE00] rounded-full opacity-70"
                          style={{
                            top: `${Math.random() * 60 + 20}%`,
                            left: `${Math.random() * 80 + 10}%`,
                            animation: `float 2s ease-in-out ${i * 0.3}s infinite`
                          }}
                        />
                      ))}
                    </span>
                  </button>
                </div>
              ))}
              
              <div className={`h-6 w-px ${isScrolled ? (isDarkMode ? "bg-gray-700" : "bg-gray-400/50") : "bg-gray-400/50"} mx-2`} />
              
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${isScrolled ? (isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200/80 text-gray-700") : "bg-gray-800/50 text-white"} hover:text-[#FFAE00] transition-all duration-300 hover:scale-110 relative group`}
                aria-label="Alternar tema"
              >
                {isDarkMode ? (
                  <SunIcon className="w-5 h-5" />
                ) : (
                  <MoonIcon className="w-5 h-5" />
                )}
                
                {/* Efeito de brilho no botão de tema */}
                <span className="absolute inset-0 rounded-lg bg-[#FFAE00] opacity-0 group-hover:opacity-10 transition-opacity duration-300" />
                
                {/* Efeito de sparkle */}
                <SparklesIcon className="absolute -top-1 -right-1 w-3 h-3 text-[#FFAE00] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </button>

              <div className="relative group ml-2">
                <a
                  href="/curriculo-joao-breno.pdf"
                  download
                  className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-[#FFAE00] to-orange-500 text-black font-semibold rounded-lg hover:from-orange-400 hover:to-[#FFAE00] transition-all duration-300 transform hover:scale-105 group shadow-lg hover:shadow-[#FFAE00]/30 relative overflow-hidden"
                >
                  <DownloadIcon className="w-4 h-4" />
                  <span className="relative z-10">CURRÍCULO</span>
                  
                  {/* Efeito de brilho animado */}
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                  
                  {/* Efeito de partículas no hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                    {[...Array(5)].map((_, i) => (
                      <div
                        key={i}
                        className="absolute w-1 h-1 bg-white rounded-full"
                        style={{
                          top: `${Math.random() * 60 + 20}%`,
                          left: `${Math.random() * 80 + 10}%`,
                          animation: `sparkle 1.5s ease-in-out ${i * 0.2}s infinite`
                        }}
                      />
                    ))}
                  </div>
                </a>
              </div>
            </nav>

            <div className="flex items-center gap-3 md:hidden">
              <button
                onClick={toggleDarkMode}
                className={`p-2 rounded-lg ${isScrolled ? (isDarkMode ? "bg-gray-800 text-gray-300" : "bg-gray-200/80 text-gray-700") : "bg-gray-800/50 text-white"} hover:text-[#FFAE00] transition-all duration-300`}
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
                className={`p-2 ${getTextColorClass()} hover:text-[#FFAE00] transition-colors duration-300 rounded-lg hover:bg-gray-800/50 dark:hover:bg-gray-800`}
              >
                {isMenuOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-gray-900/95 dark:bg-gray-900/95 backdrop-blur-md border-t border-gray-700/30 shadow-xl">
            <div className="container mx-auto px-4 py-4">
              <nav className="flex flex-col space-y-3">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`text-left py-3 px-4 rounded-lg transition-all duration-300 relative overflow-hidden ${
                      activeSection === item.id
                        ? "text-[#FFAE00] bg-[#FFAE00]/10 font-semibold"
                        : "text-white hover:text-[#FFAE00] hover:bg-gray-800/50"
                    }`}
                  >
                    {item.label}
                    {activeSection === item.id && (
                      <span className="absolute left-0 top-1/2 h-6 w-1 bg-[#FFAE00] rounded-r-lg -translate-y-1/2" />
                    )}
                  </button>
                ))}
                <a
                  href="/curriculo-joao-breno.pdf"
                  download
                  className="flex items-center justify-center gap-2 py-3 px-4 bg-gradient-to-r from-[#FFAE00] to-orange-500 text-black font-semibold rounded-lg hover:from-orange-400 hover:to-[#FFAE00] transition-all duration-300 mt-4 relative overflow-hidden"
                >
                  <DownloadIcon className="w-4 h-4" />
                  BAIXAR CURRÍCULO
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
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
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-3px) rotate(5deg); }
        }
        
        @keyframes sparkle {
          0%, 100% { 
            opacity: 0;
            transform: translateY(0) scale(1);
          }
          50% { 
            opacity: 1;
            transform: translateY(-8px) scale(1.2);
          }
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