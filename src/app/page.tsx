'use client';
import { About } from "../../components/About";
import { Banner } from "../../components/Banner";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Projects from "../../components/projects";
import Skills from "../../components/Skills";
import { useEffect, useState } from "react";
import { ChevronUpIcon, Code2, Cpu, Database, Zap } from "lucide-react";
import Services from "../../components/Services";
import Recommendations from "../../components/Recommendations";

const impactfulPhrases = [
  "Transformando ideias em experiências digitais",
  "Onde front-end e back-end se encontram em perfeita harmonia",
  "Codificando soluções que conectam mundos",
  "Desenvolvendo o amanhã, uma linha de código por vez",
  "Da concepção à implantação: domínio completo do ciclo de desenvolvimento"
];

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isClient, setIsClient] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isLoading, setIsLoading] = useState(true);
  const [randomPhrase, setRandomPhrase] = useState("");

  useEffect(() => {
    setIsClient(true);
    
    setRandomPhrase(impactfulPhrases[Math.floor(Math.random() * impactfulPhrases.length)]);
    
    const savedTheme = localStorage.getItem('theme');
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    
    const initialDarkMode = savedTheme ? savedTheme === 'dark' : prefersDark;
    setIsDarkMode(initialDarkMode);
    document.documentElement.classList.toggle('dark', initialDarkMode);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);

    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000); 

    return () => {
      window.removeEventListener("scroll", handleScroll);
      clearTimeout(timer);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (isLoading) {
    return (
      <div className={`fixed inset-0 flex items-center justify-center z-50 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-gray-100'
      }`}>
        <div className="text-center">
          <div className="relative mb-8">
            <div className="w-24 h-24 mx-auto rounded-full bg-gradient-to-r from-[#FFAE00] to-orange-500 flex items-center justify-center shadow-2xl">
              <Code2 className="w-12 h-12 text-white" />
            </div>
            
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 border-2 border-[#FFAE00]/30 rounded-full animate-ping"></div>
            
            <Cpu className="absolute top-0 left-1/2 -ml-4 -mt-2 w-8 h-8 text-[#FFAE00] animate-orbit-slow" />
            <Database className="absolute top-1/2 left-0 -mt-4 -ml-2 w-8 h-8 text-[#FFAE00] animate-orbit-medium" />
            <Zap className="absolute top-1/2 right-0 -mt-4 -mr-2 w-8 h-8 text-[#FFAE00] animate-orbit-fast" />
          </div>
          
          <div className="w-64 h-2 mx-auto bg-gray-700/30 rounded-full overflow-hidden">
            <div className="h-full bg-gradient-to-r from-[#FFAE00] to-orange-500 rounded-full animate-progress"></div>
          </div>
          
          <p className="mt-6 text-lg font-medium max-w-md mx-auto px-4">
            <span className={`${isDarkMode ? 'text-[#FFAE00]' : 'text-orange-600'}`}>
              {randomPhrase || "Carregando experiências incríveis..."}
            </span>
          </p>
          
          <p className="mt-4 text-sm text-gray-500 animate-pulse">
            Carregando experiências incríveis...
          </p>
        </div>

        <style jsx>{`
          @keyframes progress {
            0% { width: 0%; }
            100% { width: 100%; }
          }
          .animate-progress {
            animation: progress 2s ease-in-out forwards;
          }
          
          @keyframes orbit-slow {
            from { transform: rotate(0deg) translateX(40px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(40px) rotate(-360deg); }
          }
          @keyframes orbit-medium {
            from { transform: rotate(0deg) translateX(30px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(30px) rotate(-360deg); }
          }
          @keyframes orbit-fast {
            from { transform: rotate(0deg) translateX(20px) rotate(0deg); }
            to { transform: rotate(360deg) translateX(20px) rotate(-360deg); }
          }
          .animate-orbit-slow {
            animation: orbit-slow 8s linear infinite;
          }
          .animate-orbit-medium {
            animation: orbit-medium 6s linear infinite;
          }
          .animate-orbit-fast {
            animation: orbit-fast 4s linear infinite;
          }
        `}</style>
      </div>
    );
  }

  return (
    <>
      <div className={`w-full min-h-screen transition-colors duration-500 ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-gray-100'
      }`}>
        
        {isClient && (
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className={`absolute w-1 h-1 rounded-full animate-float ${
                  isDarkMode ? 'bg-[#FFAE00]/30' : 'bg-[#FFAE00]/50'
                }`}
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              />
            ))}
            
            <div className={`absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b ${
              isDarkMode ? 'from-[#FFAE00]/10' : 'from-[#FFAE00]/5'
            } to-transparent opacity-20`}></div>
            <div className={`absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t ${
              isDarkMode ? 'from-[#FFAE00]/10' : 'from-[#FFAE00]/5'
            } to-transparent opacity-20`}></div>
          </div>
        )}

        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <main className="relative z-10 w-full">
          <Banner isDarkMode={isDarkMode} />
          
          <div className="space-y-0">
            <Services isDarkMode={isDarkMode}  />
            <Recommendations isDarkMode={isDarkMode} />
            <Skills isDarkMode={isDarkMode} />
            <Projects isDarkMode={isDarkMode} />
            <About isDarkMode={isDarkMode} />
            <Contact isDarkMode={isDarkMode} />
          </div>
        </main>

        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-8 right-8 z-50 p-3 bg-gradient-to-r from-[#FFAE00] to-orange-500 text-black rounded-full shadow-2xl hover:shadow-[#FFAE00]/30 transition-all duration-300 transform hover:scale-110 group"
            aria-label="Voltar ao topo"
          >
            <ChevronUpIcon className="w-6 h-6" />
            <div className="absolute inset-0 bg-[#FFAE00]/20 rounded-full blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </button>
        )}

        <footer className={`relative z-10 py-12 text-center backdrop-blur-md border-t mt-20 transition-colors duration-500 ${
          isDarkMode 
            ? 'text-gray-400 bg-gray-900/80 border-gray-700/30' 
            : 'text-gray-600 bg-white/80 border-gray-300/50'
        }`}>
          <div className="container mx-auto px-4">
            <p className="text-sm">
              © {new Date().getFullYear()} João Breno. Desenvolvido com TypeScript, Next.js e Tailwind CSS.
            </p>
            <p className={`text-xs mt-2 ${
              isDarkMode ? 'text-gray-500' : 'text-gray-500'
            }`}>
              Todos os direitos reservados.
            </p>
          </div>
        </footer>

        <style jsx>{`
          @keyframes float {
            0%, 100% {
              transform: translateY(0) rotate(0deg);
              opacity: 0.7;
            }
            50% {
              transform: translateY(-20px) rotate(5deg);
              opacity: 0.3;
            }
          }
          .animate-float {
            animation: float 8s ease-in-out infinite;
          }

          section {
            scroll-margin-top: 80px;
          }
        `}</style>
      </div>
    </>
  );
}