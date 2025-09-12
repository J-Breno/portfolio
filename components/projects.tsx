'use client';
import { useState, useEffect } from "react";
import { Dialog,  DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLinkIcon, GithubIcon, XIcon, ArrowRightIcon, FilterIcon } from "lucide-react";

interface Project {
  id: number;
  title: string;
  image: string;
  description: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
  bgPosition?: string;
  category?: string;
}

interface ProjectsProps {
  isDarkMode: boolean;
}

export default function Projects({ isDarkMode }: ProjectsProps) {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeCategory, setActiveCategory] = useState('Todos');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [animateElements, setAnimateElements] = useState(false);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Devsbook",
      image: "/img/devsbook.png",
      description: "Rede social completa desenvolvida com PHP e MySQL. Possui sistema de autenticação, CRUD completo, upload de imagens, configurações de usuário, comentários e likes em posts.",
      technologies: ["HTML/CSS", "JavaScript", "PHP", "MySQL"],
      githubUrl: "https://github.com/J-Breno/php_curso/tree/main/projeto/devsbook",
      liveUrl: "https://jbrenojdev.com.br/app/public/login.php",
      bgPosition: "center",
      category: "Fullstack"
    },
    {
      id: 2,
      title: "Dashgo",
      image: "/img/dashgo.png",
      description: "Dashboard moderna desenvolvida com Next.js e Chakra UI. Focada em responsividade e design system, oferece uma experiência de usuário fluida e intuitiva para visualização e gestão de dados.",
      technologies: ["TypeScript", "Next.js", "Chakra UI", "React"],
      githubUrl: "https://github.com/J-Breno/nextjs/tree/main/04-dashgo",
      liveUrl: "https://dashgo-brenodev.netlify.app/",
      bgPosition: "center",
      category: "Frontend"
    },
    {
      id: 3,
      title: "Shop Base",
      image: "/img/shop-base.png",
      description: "E-commerce moderno desenvolvido com Next.js e CSS Modules. Loja virtual completa com catálogo de produtos, carrinho de compras e interface responsiva, focada na melhor experiência do usuário.",
      technologies: ["TypeScript", "Next.js", "CSS Modules", "Stripe"],
      githubUrl: "https://github.com/J-Breno/nextjs/tree/main/01-ignite-shop",
      liveUrl: "https://shopbrenodev.netlify.app/",
      bgPosition: "center",
      category: "Frontend"
    }
  ];

  useEffect(() => {
    setAnimateElements(true);
  }, []);

  const openProjectDialog = (project: Project) => {
    setSelectedProject(project);
    setIsModalOpen(true);
  };

  const closeProjectDialog = () => {
    setIsModalOpen(false);
    setTimeout(() => {
      setSelectedProject(null);
    }, 300);
  };

  const filteredProjects = activeCategory === 'Todos' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  return (
    <section 
      id="projetos" 
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

      <div className="flex justify-center mb-16 relative z-10">
        <div className="relative">
          <h2 className={`text-4xl md:text-5xl font-bold text-center relative z-10 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Meus <span className="text-[#FFAE00]">Projetos</span>
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#FFAE00] to-orange-500 rounded-full"></div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-[#FFAE00]/20 blur-sm"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl relative z-10">
        <div className="flex justify-center mb-12">
          <div className={`flex flex-wrap gap-2 p-1 rounded-xl border ${
            isDarkMode 
              ? 'bg-gray-800/50 border-gray-700/30' 
              : 'bg-white/80 border-gray-300/50 shadow-sm'
          }`}>
            {['Todos', 'Fullstack', 'Frontend', 'Backend'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300 ${
                  activeCategory === category
                    ? `${isDarkMode ? 'bg-[#FFAE00] text-gray-900' : 'bg-[#FFAE00] text-white'} shadow-md`
                    : `${isDarkMode ? 'text-gray-300 hover:text-white hover:bg-gray-700/50' : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100/50'}`
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <div 
              key={project.id}
              className={`group relative rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 ${
                animateElements 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-10'
              } ${isDarkMode ? 'bg-gray-800 shadow-xl' : 'bg-white shadow-lg'} hover:shadow-xl`}
              style={{
                transitionDelay: `${index * 100}ms`,
              }}
              onClick={() => openProjectDialog(project)}
            >
              <div 
                className="h-48 relative overflow-hidden"
                style={{
                  backgroundImage: `url('${project.image}')`,
                  backgroundSize: 'cover',
                  backgroundPosition: project.bgPosition || 'center'
                }}
              >
                <div className={`absolute inset-0 bg-gradient-to-t ${
                  isDarkMode 
                    ? 'from-black/90 via-black/40 to-transparent' 
                    : 'from-black/70 via-black/30 to-transparent'
                } opacity-80 group-hover:opacity-60 transition-opacity duration-500`}></div>
                
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 text-xs font-semibold rounded-full backdrop-blur-sm ${
                    isDarkMode 
                      ? 'bg-[#FFAE00]/20 text-[#FFAE00]' 
                      : 'bg-[#FFAE00] text-white'
                  }`}>
                    {project.category}
                  </span>
                </div>

                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#FFAE00]/10 opacity-0 group-hover:opacity-100 transition-all duration-500"></div>
                
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  <div className="bg-black/40 rounded-full p-3 transform scale-0 group-hover:scale-100 transition-transform duration-500">
                    <ArrowRightIcon className="w-6 h-6 text-[#FFAE00]" />
                  </div>
                </div>
              </div>

              <div className="p-6">
                <h3 className={`text-xl font-bold mb-3 group-hover:text-[#FFAE00] transition-colors duration-300 ${
                  isDarkMode ? 'text-white' : 'text-gray-800'
                }`}>
                  {project.title}
                </h3>
                
                <p className={`text-sm mb-4 line-clamp-2 ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span 
                      key={index}
                      className={`px-2 py-1 text-xs rounded-md ${
                        isDarkMode 
                          ? 'bg-gray-700/80 text-gray-300' 
                          : 'bg-gray-200 text-gray-700'
                      }`}
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className={`px-2 py-1 text-xs rounded-md ${
                      isDarkMode 
                        ? 'bg-gray-700 text-gray-400' 
                        : 'bg-gray-200 text-gray-500'
                    }`}>
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-[#FFAE00] text-sm font-semibold flex items-center gap-1 group-hover:gap-2 transition-all duration-300">
                    Ver detalhes
                    <ArrowRightIcon className="w-4 h-4" />
                  </span>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="w-2 h-2 bg-[#FFAE00] rounded-full animate-pulse"></div>
                    <div className="w-2 h-2 bg-[#FFAE00] rounded-full animate-pulse" style={{animationDelay: '0.2s'}}></div>
                    <div className="w-2 h-2 bg-[#FFAE00] rounded-full animate-pulse" style={{animationDelay: '0.4s'}}></div>
                  </div>
                </div>
              </div>

              <div className={`absolute inset-0 rounded-2xl border-2 ${
                isDarkMode 
                  ? 'border-gray-700/30 group-hover:border-[#FFAE00]/40' 
                  : 'border-gray-300/50 group-hover:border-[#FFAE00]/50'
              } transition-all duration-500 opacity-0 group-hover:opacity-100`}></div>
            </div>
          ))}
        </div>

        {filteredProjects.length === 0 && (
          <div className="text-center py-12">
            <FilterIcon className="w-12 h-12 mx-auto mb-4 text-gray-400" />
            <p className={isDarkMode ? 'text-gray-400' : 'text-gray-600'}>
              Nenhum projeto encontrado para a categoria selecionada.
            </p>
          </div>
        )}

        <div className="text-center mt-16">
          <p className={`mb-6 ${isDarkMode ? 'text-gray-400' : 'text-gray-600'}`}>
            Gostou do que viu? Vamos trabalhar juntos!
          </p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-[#FFAE00] to-orange-500 hover:from-orange-500 hover:to-[#FFAE00] text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            Entrar em Contato
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent 
          className={`max-w-[95vw] md:max-w-3xl lg:max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl p-0 border-0 ${
            isDarkMode 
              ? 'bg-gradient-to-br from-gray-900 to-gray-800 text-white' 
              : 'bg-gradient-to-br from-white to-gray-100 text-gray-800'
          }`}
        >
          <DialogHeader className="sticky top-0 z-10 flex flex-row items-center justify-between p-4 md:p-6 border-b backdrop-blur-md"
            style={{
              background: isDarkMode 
                ? 'linear-gradient(to right, rgba(17, 24, 39, 0.95), rgba(31, 41, 55, 0.95))'
                : 'linear-gradient(to right, rgba(255, 255, 255, 0.95), rgba(249, 250, 251, 0.95))',
              borderColor: isDarkMode ? 'rgba(255, 174, 0, 0.2)' : 'rgba(255, 174, 0, 0.3)'
            }}
          >
            <div className="flex-1 min-w-0">
              <DialogTitle className="text-xl md:text-2xl font-bold truncate">
                {selectedProject?.title}
              </DialogTitle>
              <span className="text-[#FFAE00] text-sm font-medium flex items-center gap-2">
                {selectedProject?.category}
                <div className="h-1 w-1 rounded-full bg-[#FFAE00]"></div>
                Projeto em Destaque
              </span>
            </div>
            <button 
              onClick={closeProjectDialog}
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

          {selectedProject && (
            <div className="flex flex-col lg:flex-row">
              <div className="lg:w-1/2 p-4 md:p-6">
                <div className="relative rounded-xl overflow-hidden group">
                  <div className="aspect-video w-full overflow-hidden">
                    <img 
                      src={selectedProject.image} 
                      alt={selectedProject.title} 
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
                  
                  <div className="absolute bottom-4 left-4">
                    <span className={`px-3 py-1 text-sm font-semibold rounded-full ${
                      isDarkMode 
                        ? 'bg-[#FFAE00]/20 text-[#FFAE00]' 
                        : 'bg-[#FFAE00] text-white'
                    }`}>
                      {selectedProject.category}
                    </span>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-1/2 p-4 md:p-6">
                <div className="mb-4 md:mb-6">
                  <h4 className={`text-lg font-semibold mb-2 md:mb-3 flex items-center gap-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    <div className="h-2 w-2 rounded-full bg-[#FFAE00]"></div>
                    Sobre o projeto
                  </h4>
                  <p className={`leading-relaxed text-sm md:text-base ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-600'
                  }`}>
                    {selectedProject.description}
                  </p>
                </div>

                <div className="mb-4 md:mb-6">
                  <h4 className={`text-lg font-semibold mb-2 md:mb-3 flex items-center gap-2 ${
                    isDarkMode ? 'text-white' : 'text-gray-800'
                  }`}>
                    <div className="h-2 w-2 rounded-full bg-[#FFAE00]"></div>
                    Tecnologias utilizadas
                  </h4>
                  <div className="flex flex-wrap gap-2 md:gap-3">
                    {selectedProject.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className={`px-3 py-1 md:px-4 md:py-2 rounded-lg text-xs md:text-sm font-medium transition-all duration-300 ${
                          isDarkMode 
                            ? 'bg-gray-800 text-gray-300 border border-gray-700 hover:bg-[#FFAE00]/10 hover:text-[#FFAE00] hover:border-[#FFAE00]/30' 
                            : 'bg-gray-100 text-gray-700 border border-gray-300 hover:bg-[#FFAE00]/20 hover:text-gray-800 hover:border-[#FFAE00]/40'
                        }`}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="flex flex-col sm:flex-row gap-3 md:gap-4 mt-8 pt-4 border-t" style={{
                  borderColor: isDarkMode ? 'rgba(255, 174, 0, 0.2)' : 'rgba(255, 174, 0, 0.3)'
                }}>
                  <a
                    href={selectedProject.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`flex items-center justify-center gap-2 flex-1 px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all duration-300 hover:scale-105 group text-sm md:text-base font-semibold ${
                      isDarkMode 
                        ? 'bg-gray-800/50 border border-gray-700 text-white hover:bg-gray-700/50 hover:border-[#FFAE00]/40' 
                        : 'bg-gray-100 border border-gray-300 text-gray-800 hover:bg-gray-200/50 hover:border-[#FFAE00]/50'
                    }`}
                  >
                    <GithubIcon className="w-4 h-4 md:w-5 md:h-5" />
                    Ver código
                    <ArrowRightIcon className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>

                  <a
                    href={selectedProject.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-[#FFAE00] to-orange-500 hover:from-orange-500 hover:to-[#FFAE00] text-black font-semibold px-4 py-2 md:px-6 md:py-3 rounded-lg transition-all duration-300 hover:scale-105 group text-sm md:text-base shadow-md hover:shadow-lg"
                  >
                    <ExternalLinkIcon className="w-4 h-4 md:w-5 md:h-5" />
                    Ver aplicação
                    <ArrowRightIcon className="w-3 h-3 md:w-4 md:h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                  </a>
                </div>
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