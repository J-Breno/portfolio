'use client';
import { About } from "../../components/About";
import { Banner } from "../../components/Banner";
import Contact from "../../components/Contact";
import Header from "../../components/Header";
import Projects from "../../components/projects";
import Skills from "../../components/Skills";
import { useEffect, useState } from "react";
import { ChevronUpIcon } from "lucide-react";

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className="w-full min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900">
        {isClient && (
          <div className="fixed inset-0 overflow-hidden pointer-events-none">
            {[...Array(20)].map((_, i) => (
              <div
                key={i}
                className="absolute w-1 h-1 bg-[#FFAE00]/30 rounded-full animate-float"
                style={{
                  left: `${Math.random() * 100}%`,
                  top: `${Math.random() * 100}%`,
                  animationDelay: `${i * 2}s`,
                  animationDuration: `${15 + Math.random() * 10}s`
                }}
              />
            ))}
            
            <div className="absolute top-0 left-0 w-full h-1/3 bg-gradient-to-b from-[#FFAE00]/10 to-transparent opacity-20"></div>
            <div className="absolute bottom-0 right-0 w-full h-1/3 bg-gradient-to-t from-[#FFAE00]/10 to-transparent opacity-20"></div>
          </div>
        )}

        <Header />

        <main className="relative z-10 w-full">
          <Banner />
          
          <div className="space-y-0">
            <About />
            <Skills />
            <Projects />
            <Contact />
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

        <footer className="relative z-10 py-12 text-center text-gray-400 bg-gray-900/80 backdrop-blur-md border-t border-gray-700/30 mt-20">
          <div className="container mx-auto px-4">
            <p className="text-sm">
              © {new Date().getFullYear()} João Breno. Desenvolvido com React, Next.js e Tailwind CSS.
            </p>
            <p className="text-xs mt-2 text-gray-500">
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