'use client';
import { useState, useEffect, ReactNode } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { PiFigmaLogoDuotone } from "react-icons/pi";
import { HiMiniCodeBracket } from "react-icons/hi2";
import { BsDatabase } from "react-icons/bs";
import { XIcon, ArrowRightIcon } from "lucide-react";

interface IServices {
  id: number;
  title: string;
  descriptions: string[];
  icon: ReactNode;
  color: string;
  gradient: string;
}

interface ServicesProps {
  isDarkMode: boolean;
}

export default function Services({ isDarkMode }: ServicesProps) {
  const [selectedService, setSelectedService] = useState<IServices | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateElements, setAnimateElements] = useState(false);
  
  const services: IServices[] = [
    {
      id: 1,
      title: "UI/UX Design",
      descriptions: [
        "Desenvolvo o layout da sua aplicação mobile ou web.",
        "Desenvolvo interfaces UI/UX interativas.",
        "Crio logótipos de marcas.",
        "Crio protótipos navegáveis no Figma para validação antes do desenvolvimento.",
        "Transformo ideias em interfaces modernas, intuitivas e com foco no usuário.",
        "E muito mais..."
    ],
      icon: <PiFigmaLogoDuotone className="w-8 h-8" />,
      color: "from-pink-500 to-purple-600",
      gradient: "bg-gradient-to-r from-pink-500 to-purple-600"
    },
    {
      id: 2,
      title: "Front-End",
      descriptions: [
        "Desenvolvo Landing Pages totalmente únicas, responsivas e adaptadas às suas necessidades — perfeitas para todos os dispositivos.",
        "Crio Sites Institucionais únicos, modernos e alinhados à identidade da sua marca — perfeitos para destacar o seu negócio.",
        "Desenvolvo Lojas Virtuais exclusivas, responsivas e otimizadas para vendas — prontas para todos os dispositivos.",
        "Integro APIs e desenvolvo aplicações dinâmicas e rápidas com React e Next.js.",
        "Utilizo TailwindCSS e boas práticas para entregar interfaces escaláveis, performáticas e com design moderno.",
        "E muito mais..."
    ],
      icon: <HiMiniCodeBracket className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      gradient: "bg-gradient-to-r from-blue-500 to-cyan-600"
    },
    {
      id: 3,
      title: "Back-End",
      descriptions: [
        "Desenvolvo APIs seguras e escaláveis com PHP (Laravel).",
        "Integro sistemas com bancos de dados relacionais (MySQL, PostgreSQL).",
        "Implemento autenticação e autorização (JWT, OAuth2, ACLs) para proteger seus sistemas.",
        "Crio painéis administrativos personalizados para gestão completa do seu negócio.",
        "Garanto performance, segurança và escalabilidade no servidor.",
        "E muito mais..."
      ],
      icon: <BsDatabase className="w-8 h-8" />,
      color: "from-red-500 to-[#FFAE00]",
      gradient: "bg-gradient-to-r from-red-500 to-[#FFAE00]"
    },
  ];

  useEffect(() => {
    setAnimateElements(true);
  }, []);

  const openServiceDialog = (service: IServices) => {
    setSelectedService(service);
    setIsModalOpen(true);
  };

  const closeServiceDialog = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedService(null);
    }, 300);
  };

  const scrollToContact = () => {
    closeServiceDialog(); 
    
    setTimeout(() => {
      const contactSection = document.getElementById('contact');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    }, 100);
  };

  return (
    <section 
      id="servicos" 
      className={`w-full py-20 relative overflow-hidden ${
        isDarkMode 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
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

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <div className="relative">
            <h2 className={`text-4xl md:text-5xl font-bold mb-6 relative z-10 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Crio sites que <span className="text-[#FFAE00]">encantam</span> seus clientes, 
              transmitem <span className="text-[#FFAE00]">confiança</span> e ajudam sua empresa a <span className="text-[#FFAE00]">vender mais</span>.
            </h2>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-[#FFAE00] to-orange-500 rounded-full"></div>
            <div className="absolute  -bottom-1 left-1/2 transform -translate-x-1/2 w-40 h-1 bg-[#FFAE00]/20 blur-sm"></div>
          </div>
          
          <p className={`text-lg max-w-3xl mb-8 leading-relaxed ${
            isDarkMode ? 'text-gray-400' : 'text-gray-600'
          }`}>
            Ter um site profissional é essencial para conquistar clientes. Eu desenvolvo soluções digitais estratégicas, 
            pensadas para destacar sua marca e gerar resultados reais.
          </p>
          
          <button
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#FFAE00] to-orange-500 hover:from-orange-500 hover:to-[#FFAE00] text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg mb-12"
          >
            <a href="#contato">Entrar em Contato Agora</a>
            <ArrowRightIcon className="w-4 h-4" />
          </button>
          
          <div className="relative">
            <h3 className={`text-2xl md:text-3xl font-bold mb-8 ${
              isDarkMode ? 'text-white' : 'text-gray-800'
            }`}>
              Alavanque seu negócio com um de nossos serviços
            </h3>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#FFAE00] to-orange-500 rounded-full"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={service.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 ${
                animateElements 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              } ${isDarkMode ? 'bg-gray-800 shadow-xl' : 'bg-white shadow-lg'} hover:shadow-xl`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onClick={() => openServiceDialog(service)}
            >
              <div className={`h-48 relative overflow-hidden flex items-center justify-center ${service.gradient}`}>
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <div className="relative z-10 text-center p-6">
                  <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-white/20 backdrop-blur-sm mb-4 group-hover:scale-110 transition-transform duration-500">
                    {service.icon}
                  </div>
                  
                  <h4 className="text-xl font-bold text-white">{service.title}</h4>
                </div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-black/40 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ArrowRightIcon className="w-6 h-6 text-white" />
                  </div>
                </div>
              </div>

              <div className="p-6 text-center">
                <div className="flex justify-center mb-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                    isDarkMode 
                      ? 'bg-gray-700 text-gray-300' 
                      : 'bg-gray-100 text-gray-700'
                  }`}>
                    + {service.descriptions.length} Serviços
                  </span>
                </div>
                
                <button className={`inline-flex items-center gap-1 text-sm font-semibold transition-all duration-300 group-hover:gap-2 ${
                  isDarkMode ? 'text-[#FFAE00]' : 'text-orange-600'
                }`}>
                  Ver detalhes
                  <ArrowRightIcon className="w-4 h-4" />
                </button>
              </div>

              <div className={`absolute inset-0 rounded-2xl border-2 ${
                isDarkMode 
                  ? 'border-gray-700/30 group-hover:border-[#FFAE00]/40' 
                  : 'border-gray-300/50 group-hover:border-[#FFAE00]/50'
              } transition-all duration-500 opacity-0 group-hover:opacity-100`}></div>
            </div>
          ))}
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent 
          className={`max-w-[99vw] md:max-w-3xl lg:max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-0 border-0 ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
              : 'bg-gradient-to-br from-white to-gray-100 text-gray-800'
          }`}
        >
          <DialogHeader className="sticky top-0 z-10 flex flex-row items-center justify-between p-2 md:p-6 border-b backdrop-blur-md"
            style={{
              background: isDarkMode 
                ? 'linear-gradient(to right, rgba(17, 24, 39, 0.95), rgba(31, 41, 55, 0.95))'
                : 'linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.95))',
              borderColor: isDarkMode ? 'rgba(255, 174, 0, 0.2)' : 'rgba(255, 174, 0, 0.3)'
            }}
          >
            <div className="flex items-center gap-1 min-w-0">
              {selectedService && (
                <div className={`flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center ${selectedService.gradient} text-white`}>
                  {selectedService.icon}
                </div>
              )}
              <div className="flex-1 min-w-0">
                <DialogTitle className="text-xl md:text-2xl font-bold truncate">
                  {selectedService?.title}
                </DialogTitle>
                <p className={`text-sm truncate ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  Serviços especializados para o seu negócio
                </p>
              </div>
            </div>
            <button 
              onClick={closeServiceDialog}
              className={`ml-4 p-2 rounded-lg transition-colors duration-300 flex-shrink-0 ${
                isDarkMode 
                  ? 'hover:bg-gray-700/50 text-gray-300 hover:text-white' 
                  : 'hover:bg-gray-100 text-gray-500 hover:text-gray-800'
              }`}
              aria-label="Fechar modal"
            >
              <XIcon className="w-5 h-5 md:w-6 md:h-6" />
            </button>
          </DialogHeader>

          {selectedService && (
            <div className="p-4 md:p-6">
              <div className="mb-6">
                <h4 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  <div className={`h-2 w-2 rounded-full ${selectedService.gradient}`}></div>
                  O que ofereço em {selectedService.title}
                </h4>
                <ul className="space-y-3">
                  {selectedService.descriptions.map((desc, index) => (
                    <li 
                      key={index}
                      className={`flex items-start gap-3 p-3 rounded-lg transition-all duration-300 hover:scale-[1.02] ${
                        isDarkMode 
                          ? 'bg-gray-800/50 hover:bg-gray-800/70' 
                          : 'bg-gray-100/50 hover:bg-gray-100/70'
                      }`}
                    >
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full mt-1 ${selectedService.gradient} flex items-center justify-center`}>
                        <div className="w-1.5 h-1.5 bg-white rounded-full"></div>
                      </div>
                      <span className={isDarkMode ? 'text-gray-300' : 'text-gray-700'}>
                        {desc}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t" style={{
                borderColor: isDarkMode ? 'rgba(255, 174, 0, 0.2)' : 'rgba(255, 174, 0, 0.3)'
              }}>
                <h4 className={`text-lg font-semibold mb-4 flex items-center gap-2 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  <div className={`h-2 w-2 rounded-full ${selectedService.gradient}`}></div>
                  Pronto para começar?
                </h4>
                <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  Vamos transformar sua ideia em realidade. Entre em contato para discutirmos seu projeto.
                </p>
                
                
              </div>
            </div>
          )}
        </DialogContent>
      </Dialog>

      <style jsx>{`        
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-in {
          animation: fadeInUp 0.6s ease-out forwards;
        }
      `}</style>
    </section>
  );
}