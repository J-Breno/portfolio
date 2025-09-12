'use client';

import { useState, useEffect, useRef } from "react";
import { 
  CodeIcon, 
  FileDocIcon, 
  CubeFocusIcon,
  LightningIcon,
  SparkleIcon,
  CaretDownIcon,
  PuzzlePieceIcon
} from "@phosphor-icons/react";
import { FaDocker, FaLaravel, FaPhp, FaReact, FaWordpress, FaGitAlt  } from "react-icons/fa";
import {TbBrandTypescript} from "react-icons/tb";
import {  SiJquery, SiMysql } from "react-icons/si";
import { RiTailwindCssFill, RiJavascriptLine  } from "react-icons/ri";
import { GiTestTubes } from "react-icons/gi";

interface Skill {
  name: string;
  icon: any;
  color: string;
  bgColor: string;
  description: string;
  tags: string[];
}

interface SkillsProps {
  isDarkMode: boolean;
}

export default function Skills({ isDarkMode }: SkillsProps) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [isVisible, setIsVisible] = useState(false);
  const [showAllSkills, setShowAllSkills] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const theme = isDarkMode ? 'dark' : 'light';

  useEffect(() => {
    setIsMounted(true);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const categories = [
    { id: "all", name: "Todas", icon: PuzzlePieceIcon },
    { id: "frontend", name: "Frontend", icon: CodeIcon },
    { id: "backend", name: "Backend", icon: CubeFocusIcon },
    { id: "tools", name: "Ferramentas", icon: FileDocIcon }
  ];

  const skills: Skill[] = [
    { 
      name: "JavaScript", 
      icon: RiJavascriptLine, 
      color: "#F7DF1E", 
      bgColor: "bg-gradient-to-br from-[#F7DF1E]/20 to-[#F7DF1E]/10",
      description: "Linguagem de programação para desenvolvimento web frontend e backend",
      tags: ["frontend", "backend"]
    },
    { 
      name: "Tailwind CSS", 
      icon: RiTailwindCssFill, 
      color: "#38BDF8", 
      bgColor: "bg-gradient-to-br from-[#38BDF8]/20 to-[#0EA5E9]/10",
      description: "Framework CSS utilitário para desenvolvimento rápido e consistente",
      tags: ["frontend", "styling", "tools"]
    },
    { 
      name: "jQuery", 
      icon: SiJquery, 
      color: "#0769AD", 
      bgColor: "bg-gradient-to-br from-[#0769AD]/20 to-[#0868ac]/10",
      description: "Biblioteca JavaScript para manipulação de DOM e AJAX",
      tags: ["frontend"]
    },
    { 
      name: "TypeScript", 
      icon: TbBrandTypescript, 
      color: "#3178C6", 
      bgColor: "bg-gradient-to-br from-[#3178C6]/20 to-[#235a97]/10",
      description: "JavaScript tipado para desenvolvimento em grande escala",
      tags: ["frontend", "backend"]
    },
    { 
      name: "React / Next", 
      icon: FaReact, 
      color: "#61DAFB", 
      bgColor: "bg-gradient-to-br from-[#61DAFB]/20 to-[#21a9c7]/10",
      description: "Biblioteca e framework para interfaces modernas e SSR",
      tags: ["frontend"]
    },
    { 
      name: "WordPress", 
      icon: FaWordpress, 
      color: "#21759B", 
      bgColor: "bg-gradient-to-br from-[#21759B]/20 to-[#1a5c7a]/10",
      description: "CMS para criação de sites e blogs com extensa customização",
      tags: ["tools", "backend"]
    },
    { 
      name: "PHP", 
      icon: FaPhp, 
      color: "#777BB4", 
      bgColor: "bg-gradient-to-br from-[#777BB4]/20 to-[#5d6399]/10",
      description: "Linguagem de script para desenvolvimento web do lado do servidor",
      tags: ["backend"]
    },
    { 
      name: "Laravel", 
      icon: FaLaravel, 
      color: "#FF2D20", 
      bgColor: "bg-gradient-to-br from-[#FF2D20]/20 to-[#d1251b]/10",
      description: "Framework PHP elegante para aplicações web robustas",
      tags: ["backend"]
    },
    { 
      name: "Docker", 
      icon: FaDocker, 
      color: "#2496ED", 
      bgColor: "bg-gradient-to-br from-[#2496ED]/20 to-[#1d7dc2]/10",
      description: "Plataforma para desenvolvimento, envio e execução de aplicações em containers",
      tags: ["tools"]
    },
    { 
      name: "Git", 
      icon: FaGitAlt, 
      color: "#F05032", 
      bgColor: "bg-gradient-to-br from-[#F05032]/20 to-[#d03a1f]/10",
      description: "Sistema de controle de versão para rastrear mudanças no código",
      tags: ["tools"]
    },
    { 
      name: "MySql", 
      icon: SiMysql, 
      color: "#cf9312", 
      bgColor: "bg-gradient-to-br from-[#cf9312]/20 to-[#FFAE00]/10",
      description: "Sistema de gerenciamento de banco de dados relacional de código aberto",
      tags: ["backend", "tools"]
    },
    { 
      name: "PHPUnit", 
      icon: GiTestTubes, 
      color: "#46ad17", 
      bgColor: "bg-gradient-to-br from-[#46ad17]/20 to-[#51ff00]/10",
      description: "Framework de testes para PHP com suporte a testes unitários",
      tags: ["backend", "tools"]
    },
  ];

  const filteredSkills = activeCategory === "all" 
    ? skills 
    : skills.filter(skill => skill.tags.includes(activeCategory));

  const displayedSkills = showAllSkills ? filteredSkills : filteredSkills.slice(0, 8);

  if (!isMounted) {
    return (
      <section 
        id="habilidades" 
        ref={sectionRef}
        className={`relative w-full py-20 overflow-hidden ${theme === 'dark' 
          ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
          : 'bg-gradient-to-br from-blue-50 via-white to-gray-100'}`}
      >
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex justify-center mb-16">
            <h2 className={`text-5xl md:text-6xl font-bold text-center ${theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Minhas <span className="text-[#FFAE00]">Habilidades</span>
            </h2>
          </div>
          <div className="text-center text-gray-500">Carregando...</div>
        </div>
      </section>
    );
  }

  return (
    <section 
      id="habilidades" 
      ref={sectionRef}
      className={`relative w-full py-20 overflow-hidden ${theme === 'dark' 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-white to-gray-100'}`}
    >
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className={`absolute -top-20 -left-20 w-72 h-72 rounded-full animate-pulse-slow ${
          theme === 'dark' ? 'bg-[#FFAE00]/10' : 'bg-[#FFAE00]/20'}`}></div>
        <div className={`absolute top-1/2 -right-20 w-64 h-64 rounded-full animate-pulse-medium ${
          theme === 'dark' ? 'bg-[#FFAE00]/5' : 'bg-[#FFAE00]/10'}`}></div>
        <div className={`absolute bottom-10 left-1/4 w-40 h-40 rounded-full animate-pulse-slow ${
          theme === 'dark' ? 'bg-[#FFAE00]/10' : 'bg-[#FFAE00]/20'}`}></div>
        
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className={`absolute rounded-full animate-float ${
              theme === 'dark' ? 'bg-[#FFAE00]/20' : 'bg-[#FFAE00]/30'
            }`}
            style={{
              width: `${Math.random() * 10 + 5}px`,
              height: `${Math.random() * 10 + 5}px`,
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animationDuration: `${Math.random() * 10 + 10}s`,
              animationDelay: `${Math.random() * 5}s`,
            }}
          ></div>
        ))}
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="flex justify-center mb-16">
          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-[#FFAE00] to-orange-500 rounded-lg blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200 animate-tilt"></div>
            <h2 className={`text-5xl md:text-6xl font-bold text-center relative z-10 ${
              theme === 'dark' ? 'text-white' : 'text-gray-900'}`}>
              Minhas <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFAE00] to-orange-500">Habilidades</span>
            </h2>
            <div className={`absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#FFAE00] to-orange-500 rounded-full ${
              isVisible ? 'animate-grow-width opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}></div>
            <div className={`absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-[#FFAE00]/20 blur-sm ${
              isVisible ? 'opacity-100' : 'opacity-0'
            } transition-opacity duration-1000`}></div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const Icon = category.icon;
            return (
              <button
                key={category.id}
                onClick={() => {
                  setActiveCategory(category.id);
                  setShowAllSkills(false);
                }}
                className={`px-5 py-3 rounded-xl text-sm font-medium transition-all duration-300 flex items-center gap-2 relative overflow-hidden group ${
                  activeCategory === category.id
                    ? 'bg-gradient-to-r from-[#FFAE00] to-orange-500 text-white shadow-lg'
                    : theme === 'dark'
                      ? 'bg-gray-800/50 text-gray-300 hover:bg-gray-700/50 backdrop-blur-sm border border-gray-700'
                      : 'bg-white/80 text-gray-700 hover:bg-gray-100 backdrop-blur-sm border border-gray-200'
                }`}
              >
                <span className="relative z-10 flex items-center gap-2">
                  <Icon size={18} weight="duotone" />
                  {category.name}
                </span>
                <span className="absolute inset-0 bg-gradient-to-r from-[#FFAE00] to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
              </button>
            );
          })}
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {displayedSkills.map((skill, index) => {
            const Icon = skill.icon;
            const isHovered = hoveredIndex === index;
            const delay = index * 100;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl backdrop-blur-md
                            ${skill.bgColor}
                            transform transition-all duration-500 ease-out
                            hover:scale-105 hover:shadow-2xl
                            ${isHovered ? "scale-105 shadow-2xl" : ""}
                            ${theme === 'dark' ? 'border border-gray-700/50 hover:border-current/30' : 'border border-gray-300/70 hover:border-current/30'}
                            cursor-pointer overflow-hidden
                            ${isVisible ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
                style={{
                  animationDelay: `${delay}ms`,
                  transitionProperty: 'transform, opacity, box-shadow, border-color',
                }}
              >
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)`
                  }}
                ></div>

                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {[...Array(5)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute rounded-full animate-float"
                      style={{
                        width: `${Math.random() * 6 + 4}px`,
                        height: `${Math.random() * 6 + 4}px`,
                        top: `${Math.random() * 100}%`,
                        left: `${Math.random() * 100}%`,
                        backgroundColor: skill.color,
                        opacity: 0.4,
                        animationDuration: `${Math.random() * 3 + 3}s`,
                        animationDelay: `${Math.random() * 1}s`,
                      }}
                    ></div>
                  ))}
                </div>

                <div className={`p-4 rounded-2xl mb-4 transition-all duration-500 group-hover:scale-110 relative z-10 ${
                  theme === 'dark' 
                    ? "bg-gray-800/30" 
                    : "bg-white/50"
                }`}>
                  <div className="relative">
                    <Icon
                      weight="duotone"
                      size={42}
                      className="transition-all duration-500 group-hover:animate-pulse relative z-10"
                      style={{ 
                        color: isHovered ? skill.color : (theme === 'dark' ? '#d1d5db' : '#4b5563'),
                      }}
                    />
                    <div 
                      className="absolute inset-0 rounded-full blur-md opacity-0 group-hover:opacity-70 transition-opacity duration-500"
                      style={{ backgroundColor: skill.color }}
                    ></div>
                  </div>
                </div>

                <span className={`font-semibold text-base transition-all duration-500 text-center relative z-10 ${
                  isHovered 
                    ? "text-current" 
                    : theme === 'dark' ? "text-gray-300" : "text-gray-600"
                }`}>
                  {skill.name}
                </span>

                <div className={`absolute bottom-full mb-3 hidden group-hover:flex flex-col items-center opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-20 ${
                  theme === 'dark' ? 'bg-gray-800 text-gray-200 border border-gray-700' : 'bg-white text-gray-800 border border-gray-200'
                } p-3 rounded-lg shadow-xl w-56 text-center`}>
                  <div className="text-xs font-medium">
                    {skill.description}
                  </div>
                  <div className="absolute bottom-0 transform translate-y-full border-8 border-transparent border-t-gray-800 dark:border-t-gray-800"></div>
                </div>
              </div>
            );
          })}
        </div>

        {filteredSkills.length > 8 && (
          <div className="flex justify-center mt-12">
            <button
              onClick={() => setShowAllSkills(!showAllSkills)}
              className={`flex items-center px-6 py-3 rounded-xl font-medium transition-all duration-300 group relative overflow-hidden ${
                theme === 'dark'
                  ? 'bg-gray-800/70 text-gray-200 hover:bg-gray-700/70 border border-gray-700'
                  : 'bg-white/80 text-gray-700 hover:bg-white border border-gray-200'
              } shadow-md hover:shadow-lg backdrop-blur-sm`}
            >
              <span className="relative z-10 flex items-center">
                {showAllSkills ? 'Ver Menos' : 'Ver Mais'}
                <CaretDownIcon
                  className={`ml-2 transition-transform duration-300 group-hover:translate-y-0.5 ${showAllSkills ? 'rotate-180' : ''}`}
                  size={18}
                />
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-[#FFAE00] to-orange-500 opacity-0 group-hover:opacity-10 transition-opacity duration-300"></span>
            </button>
          </div>
        )}

        <div className={`mt-16 p-8 rounded-2xl backdrop-blur-lg max-w-4xl mx-auto border ${
          theme === 'dark' 
            ? 'bg-gray-800/30 border-gray-700/50' 
            : 'bg-white/50 border-gray-300/50'
        } ${isVisible ? 'animate-fade-in opacity-100' : 'opacity-0'} transition-all duration-700 delay-300`}>
          <h3 className={`text-xl font-bold mb-6 text-center flex items-center justify-center ${
            theme === 'dark' ? 'text-white' : 'text-gray-800'
          }`}>
            <SparkleIcon weight="fill" className="mr-2 text-[#FFAE00] animate-pulse" size={24} />
            Habilidades Complementares
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {[
              { name: "UI/UX Design", icon: FileDocIcon, color: "#FFAE00" },
              { name: "SEO", icon: LightningIcon, color: "#FFAE00" },
              { name: "Responsive", icon: CodeIcon, color: "#FFAE00" },
              { name: "Web Performance", icon: LightningIcon, color: "#FFAE00" }
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <div 
                  key={index}
                  className={`flex flex-col items-center justify-center py-3 px-4 rounded-xl text-sm font-medium transition-all duration-300 hover:scale-105 ${
                    theme === 'dark' ? 'bg-gray-700/50 hover:bg-gray-700/70' : 'bg-white hover:bg-gray-50'
                  } shadow-md`}
                  style={{ color: item.color }}
                >
                  <Icon weight="duotone" size={20} className="mb-1" />
                  {item.name}
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes float {
          0%, 100% {
            transform: translateY(0) rotate(0deg);
          }
          50% {
            transform: translateY(-10px) rotate(5deg);
          }
        }
        
        @keyframes pulse-slow {
          0%, 100% {
            opacity: 0.5;
          }
          50% {
            opacity: 0.8;
          }
        }
        
        @keyframes pulse-medium {
          0%, 100% {
            opacity: 0.3;
          }
          50% {
            opacity: 0.6;
          }
        }
        
        @keyframes grow-width {
          from {
            width: 0;
          }
          to {
            width: 5rem;
          }
        }
        
        @keyframes tilt {
          0%, 100% {
            transform: rotate(0deg);
          }
          25% {
            transform: rotate(0.5deg);
          }
          75% {
            transform: rotate(-0.5deg);
          }
        }

        @keyframes glow {
          0%, 100% {
            box-shadow: 0 0 5px currentColor;
          }
          50% {
            box-shadow: 0 0 20px currentColor;
          }
        }
        
        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
        }
        
        .animate-float {
          animation: float 10s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulse-slow 6s ease-in-out infinite;
        }
        
        .animate-pulse-medium {
          animation: pulse-medium 4s ease-in-out infinite;
        }
        
        .animate-grow-width {
          animation: grow-width 1s ease-out forwards;
        }
        
        .animate-tilt {
          animation: tilt 10s ease-in-out infinite;
        }

        .animate-glow {
          animation: glow 2s ease-in-out infinite;
        }
      `}</style>
    </section>
  );
}