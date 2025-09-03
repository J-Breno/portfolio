import { useState } from "react";
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { ExternalLinkIcon, GithubIcon, XIcon, ArrowRightIcon } from "lucide-react";

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

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  
  const projects: Project[] = [
    {
      id: 1,
      title: "Devsbook",
      image: "/img/devsbook.png",
      description: "Rede social completa desenvolvida com PHP e MySQL. Possui sistema de autenticação, CRUD completo, upload de imagens, configurações de usuário, comentários e likes em posts. ",
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
      category: "Fullstack"
    }
  ];

  const openProjectDialog = (project: Project) => {
    setSelectedProject(project);
  };

  const closeProjectDialog = () => {
    setSelectedProject(null);
  };

  return (
    <section id="projects" className="w-full py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="flex justify-center mb-16">
        <div className="relative">
          <h2 className="text-5xl font-bold text-white text-center relative z-10">
            Meus <span className="text-[#FFAE00]">Projetos</span>
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#FFAE00] to-orange-500 rounded-full"></div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-[#FFAE00]/20 blur-sm"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-7xl">
        <div className="flex justify-center mb-12">
          <div className="flex gap-2 p-1 bg-gray-800/50 rounded-xl border border-gray-700/30">
            {['Todos', 'Fullstack', 'Frontend', 'Backend'].map((category) => (
              <button
                key={category}
                className="px-4 py-2 rounded-lg text-sm font-medium text-gray-300 hover:text-white hover:bg-gray-700/50 transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Dialog key={project.id}>
              <DialogTrigger asChild>
                <div 
                  className="group relative bg-gray-800 rounded-2xl overflow-hidden cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl"
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
                    <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500"></div>
                    
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-[#FFAE00]/20 text-[#FFAE00] text-xs font-semibold rounded-full">
                        {project.category}
                      </span>
                    </div>

                    <div className="absolute inset-0 bg-[#FFAE00]/0 group-hover:bg-[#FFAE00]/10 transition-all duration-500"></div>
                  </div>

                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-[#FFAE00] transition-colors duration-300">
                      {project.title}
                    </h3>
                    
                    <p className="text-gray-400 text-sm mb-4 line-clamp-2">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.slice(0, 3).map((tech, index) => (
                        <span 
                          key={index}
                          className="px-2 py-1 bg-gray-700 text-gray-300 text-xs rounded-md"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-gray-700 text-gray-400 text-xs rounded-md">
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
                        <div className="w-2 h-2 bg-[#FFAE00] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#FFAE00] rounded-full"></div>
                        <div className="w-2 h-2 bg-[#FFAE00] rounded-full"></div>
                      </div>
                    </div>
                  </div>

                  <div className="absolute inset-0 rounded-2xl border border-gray-700/30 group-hover:border-[#FFAE00]/30 transition-all duration-500"></div>
                </div>
              </DialogTrigger>

              {selectedProject && (
                <DialogContent className="max-w-4xl bg-gray-900 border border-gray-700/50 rounded-2xl text-white overflow-hidden backdrop-blur-sm">
                  <DialogHeader className="flex flex-row items-center justify-between p-6 border-b border-gray-700/30">
                    <div>
                      <DialogTitle className="text-2xl font-bold text-white">
                        {selectedProject.title}
                      </DialogTitle>
                      <span className="text-[#FFAE00] text-sm font-medium">
                        {selectedProject.category}
                      </span>
                    </div>
                    <button 
                      onClick={closeProjectDialog}
                      className="p-2 rounded-lg hover:bg-gray-800 transition-colors duration-300"
                    >
                      <XIcon className="w-5 h-5" />
                    </button>
                  </DialogHeader>

                  <div className="p-6">
                    <div className="relative rounded-xl overflow-hidden mb-6">
                      <img 
                        src={selectedProject.image} 
                        alt={selectedProject.title} 
                        className="w-full h-64 object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                    </div>
                    
                    {/* Descrição */}
                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Sobre o projeto</h4>
                      <p className="text-gray-300 leading-relaxed">
                        {selectedProject.description}
                      </p>
                    </div>

                    <div className="mb-6">
                      <h4 className="text-lg font-semibold text-white mb-3">Tecnologias utilizadas</h4>
                      <div className="flex flex-wrap gap-3">
                        {selectedProject.technologies.map((tech, index) => (
                          <span 
                            key={index}
                            className="px-4 py-2 bg-gray-800/50 text-gray-300 rounded-lg text-sm border border-gray-700/30 hover:border-[#FFAE00]/30 transition-all duration-300"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-4">
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 bg-gray-800/50 hover:bg-gray-700/50 border border-gray-700/30 text-white px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 group"
                      >
                        <GithubIcon className="w-5 h-5" />
                        Ver código
                        <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </a>

                      <a
                        href={selectedProject.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center justify-center gap-2 flex-1 bg-gradient-to-r from-[#FFAE00] to-orange-500 hover:from-orange-400 hover:to-[#FFAE00] text-black font-semibold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-105 group"
                      >
                        <ExternalLinkIcon className="w-5 h-5" />
                        Ver aplicação
                        <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform duration-300" />
                      </a>
                    </div>
                  </div>
                </DialogContent>
              )}
            </Dialog>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-gray-400 mb-6">Gostou do que viu? Vamos trabalhar juntos!</p>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-8 py-3 bg-[#FFAE00] hover:bg-orange-400 text-black font-semibold rounded-lg transition-all duration-300 transform hover:scale-105"
          >
            Entrar em Contato
            <ArrowRightIcon className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}