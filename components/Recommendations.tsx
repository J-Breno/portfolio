'use client';
import { useState, useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon, LinkedinIcon, QuoteIcon, StarIcon } from "lucide-react";

interface Recommendation {
  id: number;
  name: string;
  role: string;
  image: string;
  text: string;
  linkedin?: string;
}

interface RecommendationsProps {
  isDarkMode: boolean;
}

export default function Recommendations({ isDarkMode }: RecommendationsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);
  const [animateDirection, setAnimateDirection] = useState<'left' | 'right' | 'none'>('none');

  const recommendations: Recommendation[] = [
    {
      id: 1,
      name: "Iarlley Gomes",
      role: "Network Analyst | NOC | FCF",
      image: "/img/iarlley.jpeg",
      text: "Tive a oportunidade de acompanhar seu trabalho e posso destacar o profissionalismo e a motivação que demonstra em cada desafio. Possui sólida experiência em soluções lógicas e se destaca pela forma como analisa cenários e propõe soluções práticas e eficazes. Além da competência técnica, impressiona também pela rapidez em aprender novas tecnologias e pela disposição em compartilhar conhecimento, agregando muito valor às equipes em que atua."
    },
    {
      id: 2,
      name: "Lucas Guilherme",
      role: "Analista de Dados | Excel | Power BI | SQL",
      image: "/img/lucas.jpeg",
      text: "João Breno, uma pessoa disciplinada, talentosa e comunicativa. Tem grande conhecimento na área da programação, domina as principais ferramentas e está sempre se dedicando aos estudos para se aprimorar ainda mais, foi muito bom ter aprendido tanto com ele."
    },
    {
      id: 3,
      name: "Pedro Davi",
      role: "Analista de Monitoramento",
      image: "/img/barreto.png",
      text: "João Breno é um profissional com excelente domínio em programação, sempre disposto a aprender e a encarar novos desafios. Sua dedicação e talento fazem a diferença na equipe."
    },
    {
      id: 4,
      name: "Eduardo Ferreira",
      role: "Analista de Monitoramento",
      image: "/img/eduardo.jpeg",
      text: "João Breno é um profissional que se destaca pelo grande conhecimento em programação, pela vontade constante de aprender e pelo raciocínio lógico rápido. Sua capacidade de evolução é admirável e inspiradora, mostrando sempre que está pronto para encarar novos desafios e crescer ainda mais. É um privilégio ter alguém tão dedicado e talentoso na equipe!"
    },
    {
      id: 5,
      name: "Dnivaldo A O Filho",
      role: "Analista de Redes e de comunicação de dados",
      image: "/img/oliveira.jpeg",
      text: "Breno é um colaborador que logo conquista sua confiança por conta da sua capacidade técnica, comprometimento e facilidade de relacionamento, é um excelente profissional para desenvolvimento ágil, pois tem muita facilidade para o trabalho em equipe, se aplica nas atividades e demandando pouca gerência. Recomendo o seu trabalho sem dúvidas. Focado no resultado, tem grande capacidade de tornar projetos em realidade. Entre suas virtudes destaco sua capacidade técnica e a facilidade de captar novos conhecimentos."
    }
  ];

  const nextSlide = useCallback(() => {
    setAnimateDirection('right');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === recommendations.length - 1 ? 0 : prevIndex + 1
      );
      setAnimateDirection('none');
    }, 300);
  }, [recommendations.length]);

  const prevSlide = () => {
    setAnimateDirection('left');
    setTimeout(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === 0 ? recommendations.length - 1 : prevIndex - 1
      );
      setAnimateDirection('none');
    }, 300);
  };

  const goToSlide = (index: number) => {
    const direction = index > currentIndex ? 'right' : 'left';
    setAnimateDirection(direction);
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimateDirection('none');
    }, 300);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (touchStart - touchEnd > 50) {
      nextSlide();
    }
    if (touchStart - touchEnd < -50) {
      prevSlide();
    }
  };

  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isAutoPlaying) {
      interval = setInterval(() => {
        nextSlide();
      }, 6000);
    }
    return () => {
      if (interval) clearInterval(interval);
    };
  }, [isAutoPlaying, nextSlide]);

  return (
    <section 
      id="recomendacoes" 
      className={`w-full py-20 relative overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-gray-50 to-gray-100'
      }`}
    >
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className={`absolute -top-20 -right-20 w-80 h-80 rounded-full ${
          isDarkMode ? 'bg-[#FFAE00]/10' : 'bg-[#FFAE00]/5'
        } blur-3xl`}></div>
        <div className={`absolute -bottom-20 -left-20 w-80 h-80 rounded-full ${
          isDarkMode ? 'bg-orange-500/10' : 'bg-orange-500/5'
        } blur-3xl`}></div>
        
        <div className="absolute inset-0 opacity-10" style={{
          backgroundImage: `linear-gradient(${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 1px, transparent 1px), linear-gradient(90deg, ${isDarkMode ? 'rgba(255, 255, 255, 0.1)' : 'rgba(0, 0, 0, 0.1)'} 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}></div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex flex-col items-center mb-16 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-4 bg-gradient-to-r from-[#FFAE00]/20 to-orange-500/20">
            <StarIcon className="w-4 h-4 text-[#FFAE00]" />
            <span className={`text-sm font-medium ${isDarkMode ? 'text-[#FFAE00]' : 'text-orange-600'}`}>
              Depoimentos
            </span>
          </div>
          
          <h2 className={`text-4xl md:text-5xl font-bold mb-4 relative ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            O que <span className="text-[#FFAE00]">falam</span> sobre mim
          </h2>
          
          <p className={`text-lg max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Confira as recomendações de colegas e clientes que já trabalharam comigo
          </p>
          
          <div className="mt-6 w-20 h-1 bg-gradient-to-r from-[#FFAE00] to-orange-500 rounded-full"></div>
        </div>

        <div 
          className="relative max-w-4xl mx-auto"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <button
            onClick={prevSlide}
            className={`absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-8 z-20 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
              isDarkMode 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
            aria-label="Recomendação anterior"
          >
            <ChevronLeftIcon className="w-5 h-5 md:w-6 md:h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className={`absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-8 z-20 p-3 rounded-full shadow-lg transition-all duration-300 transform hover:scale-110 ${
              isDarkMode 
                ? 'bg-gray-800 text-white hover:bg-gray-700' 
                : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
            aria-label="Próxima recomendação"
          >
            <ChevronRightIcon className="w-5 h-5 md:w-6 md:h-6" />
          </button>

          <div className="overflow-hidden rounded-2xl">
            <div 
              className={`transition-transform duration-500 ease-in-out ${
                animateDirection === 'right' 
                  ? 'translate-x-full opacity-0' 
                  : animateDirection === 'left' 
                    ? '-translate-x-full opacity-0' 
                    : 'translate-x-0 opacity-100'
              }`}
              key={currentIndex}
            >
              <div className={`p-8 md:p-10 rounded-2xl shadow-xl ${
                isDarkMode 
                  ? 'bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700/30' 
                  : 'bg-white border border-gray-200/50'
              }`}>
                <div className="mb-6">
                  <div className={`p-3 rounded-xl inline-flex ${
                    isDarkMode ? 'bg-[#FFAE00]/10' : 'bg-[#FFAE00]/20'
                  }`}>
                    <QuoteIcon className={`w-6 h-6 ${isDarkMode ? 'text-[#FFAE00]' : 'text-orange-600'}`} />
                  </div>
                </div>

                <blockquote className={`text-lg md:text-xl italic mb-8 leading-relaxed ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-700'
                }`}>
                  "{recommendations[currentIndex].text}"
                </blockquote>

                <div className="flex items-center gap-4">
                  <div className="relative">
                    <div className="w-16 h-16 md:w-20 md:h-20 rounded-full overflow-hidden border-2 border-[#FFAE00]">
                      <img 
                        src={recommendations[currentIndex].image} 
                        alt={recommendations[currentIndex].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 rounded-full bg-gradient-to-r from-[#FFAE00] to-orange-500 flex items-center justify-center">
                      <QuoteIcon className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  
                  <div>
                    <h3 className={`font-bold text-lg ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      {recommendations[currentIndex].name}
                    </h3>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                      {recommendations[currentIndex].role}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {recommendations.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? 'bg-gradient-to-r from-[#FFAE00] to-orange-500 w-8'
                    : isDarkMode
                      ? 'bg-gray-700 hover:bg-gray-600'
                      : 'bg-gray-300 hover:bg-gray-400'
                }`}
                aria-label={`Ir para recomendação ${index + 1}`}
              />
            ))}
          </div>
        </div>

        <div className={`text-center mt-16 p-6 rounded-2xl ${
          isDarkMode 
            ? 'bg-gradient-to-r from-gray-800/50 to-gray-900/50 border border-gray-700/30' 
            : 'bg-gradient-to-r from-blue-50/50 to-gray-100/50 border border-gray-200/50'
        }`}>
          <h3 className={`text-2xl font-bold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
            Quer ver mais recomendações?
          </h3>
          <p className={`mb-6 max-w-2xl mx-auto ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Confira meu perfil no LinkedIn para ver todas as recomendações e conexões
          </p>
          <a
            href="https://www.linkedin.com/in/jo%C3%A3o-breno/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <LinkedinIcon className="w-5 h-5" />
            Ver no LinkedIn
          </a>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fade-in {
          animation: fadeIn 0.8s ease-out forwards;
        }
        
        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 5px rgba(255, 174, 0, 0.5); }
          50% { box-shadow: 0 0 20px rgba(255, 174, 0, 0.8); }
        }
        
        .animate-pulse-glow {
          animation: pulse-glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}