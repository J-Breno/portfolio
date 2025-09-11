"use client";

import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FaCode, FaRocket, FaMedal } from "react-icons/fa";

interface BannerProps {
  isDarkMode: boolean;
}

export function Banner({ isDarkMode }: BannerProps) {
  const [isClient, setIsClient] = useState(false);
  const bannerRef = useRef(null);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center">
      <div className="absolute inset-0">
        <div className={`absolute inset-0 ${
          isDarkMode 
            ? "bg-gradient-to-br from-gray-900 via-black to-gray-900" 
            : "bg-gradient-to-br from-blue-50 via-white to-blue-100"
        }`}></div>
        
        <div className={`absolute inset-0 opacity-20 ${
          isDarkMode 
            ? "bg-[radial-gradient(circle_at_1px_1px,_#FFAE00_1px,_transparent_0)] bg-[length:20px_20px]"
            : "bg-[radial-gradient(circle_at_1px_1px,_#3b82f6_1px,_transparent_0)] bg-[length:20px_20px]"
        }`}></div>
        
        <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-96 rounded-full blur-3xl opacity-20 animate-pulse ${
          isDarkMode ? "bg-[#FFAE00]" : "bg-blue-400"
        }`}></div>
      </div>

      {isClient && (
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(30)].map((_, i) => (
            <div
              key={i}
              className={`absolute w-1 h-1 rounded-full animate-float ${
                isDarkMode ? "bg-[#FFAE00]" : "bg-blue-500"
              }`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${i * 0.2}s`,
                animationDuration: `${4 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>
      )}

      <div ref={bannerRef} className="relative z-10 container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl mx-auto animate-fadeIn">
          <div className="text-center lg:text-left space-y-6 order-2 lg:order-1">
            <div className="animate-slideUp opacity-0 [animation-fill-mode:forwards]">
              <h1 className={`text-4xl md:text-5xl lg:text-6xl font-bold ${
                isDarkMode ? "text-white" : "text-gray-900"
              } mb-2`}>
                Transformando
              </h1>
            </div>
            
            <div className="animate-slideUp opacity-0 [animation-fill-mode:forwards] [animation-delay:0.2s]">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent mb-2">
                Ideias em Código
              </h1>
            </div>
            
            <div className="animate-slideUp opacity-0 [animation-fill-mode:forwards] [animation-delay:0.4s]">
              <h2 className={`text-xl md:text-2xl ${
                isDarkMode ? "text-gray-300" : "text-gray-600"
              } font-light mb-6`}>
                João <span className={isDarkMode ? "text-white font-medium" : "text-gray-900 font-medium"}>Breno</span>
              </h2>
            </div>

            <div className="animate-slideUp opacity-0 [animation-fill-mode:forwards] [animation-delay:0.6s]">
              <p className={`text-lg ${
                isDarkMode ? "text-gray-400" : "text-gray-600"
              } mb-8 leading-relaxed max-w-lg mx-auto lg:mx-0`}>
                Desenvolvedor Fullstack especializado em criar experiências digitais que{" "}
                <span className={isDarkMode ? "text-white font-medium" : "text-gray-900 font-medium"}>
                  convertem visitantes em clientes
                </span>
                . Soluções com foco em performance, escalabilidade e resultados mensuráveis.
              </p>
            </div>

            <div 
              className="flex flex-wrap gap-4 justify-center lg:justify-start mb-8 animate-slideUp opacity-0 [animation-fill-mode:forwards] [animation-delay:0.8s]"
            >
              <div className={`flex items-center gap-3 ${
                isDarkMode ? "bg-white/10" : "bg-black/5"
              } backdrop-blur-sm p-3 rounded-xl border ${
                isDarkMode ? "border-white/10" : "border-gray-200"
              }`}>
                <div className="p-2 bg-amber-500/10 rounded-full">
                  <FaCode className="text-amber-500 text-xl" />
                </div>
                <div>
                  <div className="text-xl font-bold text-amber-500">15+</div>
                  <div className={isDarkMode ? "text-gray-400 text-sm" : "text-gray-600 text-sm"}>Projetos</div>
                </div>
              </div>
              
              <div className={`flex items-center gap-3 ${
                isDarkMode ? "bg-white/10" : "bg-black/5"
              } backdrop-blur-sm p-3 rounded-xl border ${
                isDarkMode ? "border-white/10" : "border-gray-200"
              }`}>
                <div className="p-2 bg-amber-500/10 rounded-full">
                  <FaRocket className="text-amber-500 text-xl" />
                </div>
                <div>
                  <div className="text-xl font-bold text-amber-500">100%</div>
                  <div className={isDarkMode ? "text-gray-400 text-sm" : "text-gray-600 text-sm"}>Satisfação</div>
                </div>
              </div>
              
              <div className={`flex items-center gap-3 ${
                isDarkMode ? "bg-white/10" : "bg-black/5"
              } backdrop-blur-sm p-3 rounded-xl border ${
                isDarkMode ? "border-white/10" : "border-gray-200"
              }`}>
                <div className="p-2 bg-amber-500/10 rounded-full">
                  <FaMedal className="text-amber-500 text-xl" />
                </div>
                <div>
                  <div className="text-xl font-bold text-amber-500">3+</div>
                  <div className={isDarkMode ? "text-gray-400 text-sm" : "text-gray-600 text-sm"}>Anos Exp</div>
                </div>
              </div>
            </div>

            <div 
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slideUp opacity-0 [animation-fill-mode:forwards] [animation-delay:1s]"
            >
              <a
                href="#projetos"
                className="px-6 py-3 bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold rounded-xl shadow-lg hover:shadow-amber-500/25 relative overflow-hidden group flex items-center justify-center transition-all duration-300 hover:scale-105"
              >
                <span className="relative z-10">Ver Projetos</span>
                <div className="absolute inset-0 bg-gradient-to-r from-amber-600 to-orange-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </a>
              
              <a
                href="#contato"
                className={`px-6 py-3 border font-semibold rounded-xl group relative overflow-hidden flex items-center justify-center transition-all duration-300 hover:scale-105 ${
                  isDarkMode 
                    ? "border-amber-500/30 text-amber-500 hover:bg-amber-500 hover:text-white" 
                    : "border-amber-500 text-amber-600 hover:bg-amber-500 hover:text-white"
                }`}
              >
                <span className="relative z-10">Entrar em Contato</span>
                <div className={`absolute inset-0 ${
                  isDarkMode ? "bg-amber-500" : "bg-amber-500"
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10`} />
              </a>
            </div>
          </div>

          <div 
            className="relative flex justify-center order-1 lg:order-2 animate-scaleIn opacity-0 [animation-fill-mode:forwards] [animation-delay:0.5s]"
          >
            <div className="relative">
              <div className="absolute -inset-6 bg-gradient-to-r from-amber-400 to-orange-500 rounded-full opacity-20 blur-xl animate-pulse-slow" />
              
              <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/10 shadow-2xl group transition-transform duration-500 hover:scale-103">
                <Image
                  src="https://github.com/j-breno.png"
                  alt="João Breno - Fullstack Developer"
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-700"
                  priority
                />
                
                <div className={`absolute inset-0 ${
                  isDarkMode 
                    ? "bg-gradient-to-t from-black/20 to-transparent" 
                    : "bg-gradient-to-t from-white/20 to-transparent"
                } opacity-0 group-hover:opacity-100 transition-opacity duration-300`} />
              </div>
              
              <div className="absolute -bottom-4 -right-4 bg-gradient-to-r from-amber-500 to-orange-600 text-white px-4 py-2 rounded-full font-semibold text-sm shadow-lg flex items-center gap-2 animate-bounce-slow">
                <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                Disponível!
              </div>

              <div className="absolute -top-4 -left-4 w-8 h-8 bg-amber-500 rounded-full shadow-lg animate-ping-slow" />
              
              <div className="absolute top-8 -right-4 w-6 h-6 bg-orange-500 rounded-full shadow-lg animate-ping-slower" />
              
              <div className="absolute bottom-12 -left-4 w-5 h-5 bg-amber-400 rounded-full shadow-lg animate-ping-slowest" />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block animate-bounce">
        <a 
          href="#serviços" 
          className={`flex flex-col items-center ${
            isDarkMode ? "text-amber-500" : "text-amber-600"
          } hover:${
            isDarkMode ? "text-amber-400" : "text-amber-700"
          } transition-colors duration-300`}
        >
          <span className="text-sm mb-2">Scroll Down</span>
          <div className={`w-6 h-10 border-2 ${
            isDarkMode ? "border-amber-500/50" : "border-amber-600/50"
          } rounded-full flex justify-center`}>
            <div className={`w-1 h-3 ${
              isDarkMode ? "bg-amber-500" : "bg-amber-600"
            } rounded-full mt-2 animate-scroll`} />
          </div>
        </a>
      </div>
    </section>
  );
}