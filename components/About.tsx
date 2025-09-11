import { useEffect, useRef } from "react";

interface AboutProps {
  isDarkMode: boolean;
}

export function About({ isDarkMode }: AboutProps) {
  const sectionRef = useRef(null);
  const theme = isDarkMode ? 'dark' : 'light';

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "0px",
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate-fade-in");
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    document.querySelectorAll(".observe").forEach((el) => {
      observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section 
      id="sobre" 
      ref={sectionRef}
      className={`w-full py-20 overflow-hidden relative ${theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-gray-100'}`}
    >
      {/* Animated background elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className={`absolute -top-20 -left-20 w-72 h-72 rounded-full animate-pulse-slow ${
          theme === 'dark' ? 'bg-[#FFAE00]/10' : 'bg-[#FFAE00]/20'}`}></div>
        <div className={`absolute top-1/2 -right-20 w-64 h-64 rounded-full animate-float ${
          theme === 'dark' ? 'bg-[#FFAE00]/5' : 'bg-[#FFAE00]/10'}`}></div>
        <div className={`absolute bottom-10 left-1/4 w-40 h-40 rounded-full animate-ping-slow ${
          theme === 'dark' ? 'bg-[#FFAE00]/10' : 'bg-[#FFAE00]/20'}`}></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        {/* Section Header with enhanced animation */}
        <div className="flex justify-center mb-16 observe">
          <div className="relative">
            <h2 className={`text-5xl md:text-6xl font-bold text-center relative z-10 opacity-0 translate-y-10 transition-all duration-700 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Sobre <span className="text-[#FFAE00]">mim</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#FFAE00] to-orange-500 rounded-full observe opacity-0 scale-0 transition-all duration-700 delay-300 origin-center"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-[#FFAE00]/20 blur-sm observe opacity-0 scale-0 transition-all duration-700 delay-500 origin-center"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Text Content with enhanced animations */}
          <div className="space-y-10 relative">
            <div className={`absolute -top-6 -left-6 w-24 h-24 rounded-full blur-xl observe ${
              theme === 'dark' ? 'bg-[#FFAE00]/10' : 'bg-[#FFAE00]/20'}`}></div>
            
            {/* First paragraph */}
            <div className="relative observe opacity-0 translate-y-10 transition-all duration-700 delay-100">
              <div className={`absolute -inset-4 rounded-xl blur-lg opacity-50 ${
                theme === 'dark' ? 'bg-gradient-to-r from-[#FFAE00]/5 to-transparent' : 'bg-gradient-to-r from-[#FFAE00]/10 to-transparent'}`}></div>
              <div className={`p-1 rounded-lg ${
                theme === 'dark' ? 'bg-gradient-to-r from-[#FFAE00]/10 to-transparent' : 'bg-gradient-to-r from-[#FFAE00]/15 to-transparent'}`}>
                <p className={`text-lg md:text-xl leading-relaxed font-light relative z-10 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Olá! Eu sou o <span className="font-semibold text-[#FFAE00]">Breno</span>, um <strong className="font-semibold text-[#FFAE00] bg-[#FFAE00]/10 px-2 py-1 rounded-lg">programador fullstack</strong> apaixonado por transformar ideias em soluções digitais impactantes. Minha missão é criar experiências que não apenas funcionem perfeitamente, mas que também encantem e surpreendam usuários.
                </p>
              </div>
            </div>

            {/* Second paragraph */}
            <div className="relative observe opacity-0 translate-y-10 transition-all duration-700 delay-200">
              <div className={`absolute -inset-4 rounded-xl blur-lg opacity-50 ${
                theme === 'dark' ? 'bg-gradient-to-r from-transparent to-[#FFAE00]/5' : 'bg-gradient-to-r from-transparent to-[#FFAE00]/10'}`}></div>
              <div className={`p-1 rounded-lg ${
                theme === 'dark' ? 'bg-gradient-to-r from-transparent to-[#FFAE00]/10' : 'bg-gradient-to-r from-transparent to-[#FFAE00]/15'}`}>
                <p className={`text-lg md:text-xl leading-relaxed font-light relative z-10 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Com experiência em <strong className="font-semibold text-[#FFAE00]">e-commerces de alto desempenho</strong>, <strong className="font-semibold text-[#FFAE00]">sistemas de produtividade</strong> e <strong className="font-semibold text-[#FFAE00]">aplicações complexas</strong>, desenvolvi a habilidade de enfrentar desafios técnicos com soluções elegantes e eficientes que superam expectativas.
                </p>
              </div>
            </div>

            {/* Third paragraph */}
            <div className="relative observe opacity-0 translate-y-10 transition-all duration-700 delay-300">
              <div className={`absolute -inset-4 rounded-xl blur-lg opacity-50 ${
                theme === 'dark' ? 'bg-gradient-to-r from-[#FFAE00]/5 to-transparent' : 'bg-gradient-to-r from-[#FFAE00]/10 to-transparent'}`}></div>
              <div className={`p-1 rounded-lg ${
                theme === 'dark' ? 'bg-gradient-to-r from-[#FFAE00]/10 to-transparent' : 'bg-gradient-to-r from-[#FFAE00]/15 to-transparent'}`}>
                <p className={`text-lg md:text-xl leading-relaxed font-light relative z-10 ${
                  theme === 'dark' ? 'text-white' : 'text-gray-800'}`}>
                  Minha trajetória inclui passagem como <strong className="font-semibold text-[#FFAE00]">estagiário em análise de dados</strong> e atuação atual como <strong className="font-semibold text-[#FFAE00]">analista de sistemas</strong> em uma empresa de redes. Estou sempre pronto para elevar projetos com <span className="text-[#FFAE00] font-medium">soluções inovadoras</span> que agregam valor real desde o primeiro dia.
                </p>
              </div>
            </div>

            {/* Social links with enhanced animations */}
            <div className="flex gap-5 mt-10 observe opacity-0 translate-y-10 transition-all duration-700 delay-400">
              {[
                { 
                  href: "https://github.com/J-Breno/", 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-github">
                      <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                    </svg>
                  ),
                  alt: "GitHub", 
                  title: "Veja meus projetos no GitHub"
                },
                { 
                  href: "https://www.linkedin.com/in/jo%C3%A3o-breno/", 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin">
                      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                      <rect x="2" y="9" width="4" height="12"></rect>
                      <circle cx="4" cy="4" r="2"></circle>
                    </svg>
                  ),
                  alt: "LinkedIn", 
                  title: "Conecte-se comigo no LinkedIn"
                },
                { 
                  href: "https://www.instagram.com/jbrenojj", 
                  icon: (
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram">
                      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                      <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                      <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                    </svg>
                  ),
                  alt: "Instagram", 
                  title: "Siga-me no Instagram"
                }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`group relative p-4 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-2xl ${
                    theme === 'dark' ? 'bg-gray-800' : 'bg-white shadow-md'}`}
                  title={social.title}
                >
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#FFAE00] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute -inset-2 bg-[#FFAE00]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="relative z-10 flex items-center justify-center w-8 h-8">
                    <div className={`transition-all duration-300 group-hover:scale-110 group-hover:rotate-12 ${
                      theme === 'dark' ? 'text-white' : 'text-gray-700'}`}>
                      {social.icon}
                    </div>
                  </div>
                  <span className={`absolute -bottom-8 left-1/2 transform -translate-x-1/2 text-xs opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap px-2 py-1 rounded-md ${
                    theme === 'dark' ? 'text-white bg-gray-900' : 'text-gray-800 bg-white shadow-sm'}`}>
                    {social.alt}
                  </span>
                </a>
              ))}
            </div>
          </div>

          {/* Graphic Element with enhanced animations */}
          <div className="relative hidden lg:block observe opacity-0 transition-all duration-1000">
            <div className="relative">
              <div className={`w-80 h-80 mx-auto rounded-full flex items-center justify-center animate-float-slow ${
                theme === 'dark' 
                  ? 'bg-gradient-to-br from-[#FFAE00]/20 to-orange-500/20' 
                  : 'bg-gradient-to-br from-[#FFAE00]/15 to-orange-500/15'}`}>
                <div className={`w-64 h-64 rounded-full flex items-center justify-center animate-pulse-slow ${
                  theme === 'dark' 
                    ? 'bg-gradient-to-br from-[#FFAE00]/10 to-orange-500/10' 
                    : 'bg-gradient-to-br from-[#FFAE00]/10 to-orange-500/10'}`}>
                  <div className={`w-48 h-48 rounded-full flex items-center justify-center ${
                    theme === 'dark' 
                      ? 'bg-gradient-to-br from-[#FFAE00]/5 to-orange-500/5' 
                      : 'bg-gradient-to-br from-[#FFAE00]/10 to-orange-500/10'}`}>
                    <div className={`text-center p-6 rounded-2xl border shadow-lg backdrop-blur-sm ${
                      theme === 'dark' 
                        ? 'bg-gray-900/70 border-[#FFAE00]/20' 
                        : 'bg-white/80 border-[#FFAE00]/30'}`}>
                      <div className={`w-20 h-20 mx-auto rounded-full flex items-center justify-center mb-4 animate-bounce-slow ${
                        theme === 'dark' ? 'bg-[#FFAE00]/10' : 'bg-[#FFAE00]/20'}`}>
                        <svg className="w-10 h-10 text-[#FFAE00]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                        </svg>
                      </div>
                      <span className={`text-[#FFAE00] font-semibold text-lg px-4 py-2 rounded-full ${
                        theme === 'dark' ? 'bg-[#FFAE00]/10' : 'bg-[#FFAE00]/20'}`}>
                        FullStack Developer
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Animated floating elements */}
              <div className={`absolute top-4 left-4 w-8 h-8 rounded-full animate-float-delayed-1 ${
                theme === 'dark' ? 'bg-[#FFAE00]/20' : 'bg-[#FFAE00]/30'}`}></div>
              <div className={`absolute bottom-8 right-4 w-6 h-6 rounded-full animate-float-delayed-2 ${
                theme === 'dark' ? 'bg-[#FFAE00]/30' : 'bg-[#FFAE00]/40'}`}></div>
              <div className={`absolute top-12 right-8 w-4 h-4 rounded-full animate-float-delayed-3 ${
                theme === 'dark' ? 'bg-[#FFAE00]/40' : 'bg-[#FFAE00]/50'}`}></div>
              <div className={`absolute bottom-16 left-12 w-5 h-5 rounded-full animate-float-delayed-4 ${
                theme === 'dark' ? 'bg-[#FFAE00]/25' : 'bg-[#FFAE00]/35'}`}></div>
            </div>
          </div>
        </div>

        {/* Stats section with enhanced animations */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-20">
          {[
            { number: "2+", label: "Anos de Experiência", delay: 100 },
            { number: "15+", label: "Projetos Concluídos", delay: 200 },
            { number: "8+", label: "Tecnologias Dominadas", delay: 300 },
            { number: "100%", label: "Comprometimento", delay: 400 }
          ].map((stat, index) => (
            <div 
              key={index} 
              className={`text-center p-6 rounded-xl backdrop-blur-sm border transition-all duration-500 observe opacity-0 translate-y-10 hover:scale-105 hover:shadow-xl ${
                theme === 'dark' 
                  ? 'bg-gray-800/50 border-gray-700/30 hover:border-[#FFAE00]/30' 
                  : 'bg-white/80 border-gray-300/50 hover:border-[#FFAE00]/40'}`}
              style={{ transitionDelay: `${stat.delay}ms` }}
            >
              <div className="text-3xl font-bold text-[#FFAE00] mb-2">{stat.number}</div>
              <div className={`text-sm font-medium ${
                theme === 'dark' ? 'text-gray-300' : 'text-gray-700'}`}>
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(30px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes float {
          0% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
          100% { transform: translateY(0px); }
        }
        @keyframes pulseSlow {
          0% { transform: scale(1); opacity: 0.7; }
          50% { transform: scale(1.05); opacity: 0.9; }
          100% { transform: scale(1); opacity: 0.7; }
        }
        @keyframes pingSlow {
          0% { transform: scale(1); opacity: 1; }
          75%, 100% { transform: scale(2); opacity: 0; }
        }
        @keyframes bounceSlow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px); }
        }
        .animate-fade-in {
          animation: fadeIn 0.7s ease-out forwards;
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        .animate-float-slow {
          animation: float 8s ease-in-out infinite;
        }
        .animate-float-delayed-1 {
          animation: float 7s ease-in-out infinite;
          animation-delay: 1s;
        }
        .animate-float-delayed-2 {
          animation: float 9s ease-in-out infinite;
          animation-delay: 2s;
        }
        .animate-float-delayed-3 {
          animation: float 5s ease-in-out infinite;
          animation-delay: 3s;
        }
        .animate-float-delayed-4 {
          animation: float 7s ease-in-out infinite;
          animation-delay: 4s;
        }
        .animate-pulse-slow {
          animation: pulseSlow 4s ease-in-out infinite;
        }
        .animate-ping-slow {
          animation: pingSlow 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }
        .animate-bounce-slow {
          animation: bounceSlow 3s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}