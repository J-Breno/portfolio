import { useState } from "react";
import { FileHtmlIcon, FileCssIcon, FileJsIcon, FileTsIcon, WindIcon, AtomIcon, DatabaseIcon,  CodeIcon } from "@phosphor-icons/react";

export default function Skills() {
  const [touchedIndex, setTouchedIndex] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleTouch = (index: number) => {
    setTouchedIndex(touchedIndex === index ? null : index);
  };

  const skills = [
    { name: "HTML", icon: FileHtmlIcon, color: "#dc2626", bgColor: "bg-red-600/10" },
    { name: "CSS", icon: FileCssIcon, color: "#2563eb", bgColor: "bg-blue-600/10" },
    { name: "JavaScript", icon: FileJsIcon, color: "#facc15", bgColor: "bg-yellow-400/10" },
    { name: "TypeScript", icon: FileTsIcon, color: "#60a5fa", bgColor: "bg-blue-400/10" },
    { name: "Tailwind", icon: WindIcon, color: "#38bdf8", bgColor: "bg-sky-400/10" },
    { name: "React / Next", icon: AtomIcon, color: "#9333ea", bgColor: "bg-purple-600/10" },
    { name: "Node / Nest", icon: DatabaseIcon, color: "#22c55e", bgColor: "bg-green-500/10" },
    { name: "PHP", icon: CodeIcon, color: "#a855f7", bgColor: "bg-purple-500/10" },
  ];

  return (
    <section id="skills" className="w-full py-12 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4">
        {/* Header com efeito mais moderno */}
        <div className="flex items-center justify-center mb-12">
          <div className="relative">
            <h2 className="text-5xl font-bold text-white text-center relative z-10">
              Habilidades
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-purple-600 to-blue-500 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-purple-600/20 blur-sm"></div>
          </div>
        </div>

        {/* Grid de skills melhorado */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            const isTouched = touchedIndex === index;
            const isHovered = hoveredIndex === index;
            const isActive = isHovered || isTouched;

            return (
              <div
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                onTouchStart={() => handleTouch(index)}
                className={`group relative flex flex-col items-center justify-center p-6 rounded-2xl border border-gray-700/50 backdrop-blur-sm
                            ${skill.bgColor}
                            transform transition-all duration-500 ease-out
                            hover:scale-110 hover:shadow-2xl hover:border-gray-500/30
                            ${isActive ? "scale-110 shadow-2xl border-gray-500/30" : ""}
                            cursor-pointer overflow-hidden`}
              >
                {/* Efeito de brilho no fundo */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `radial-gradient(circle at center, ${skill.color}20 0%, transparent 70%)`
                  }}
                ></div>

                {/* Efeito de borda gradiente no hover */}
                <div 
                  className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  style={{
                    background: `linear-gradient(45deg, ${skill.color}20, transparent, ${skill.color}20)`,
                    mask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    WebkitMask: "linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)",
                    maskComposite: "exclude",
                    WebkitMaskComposite: "xor",
                    padding: '1px'
                  }}
                ></div>

                {/* Ícone com efeitos melhorados */}
                <div className="relative z-10 flex flex-col items-center">
                  <div className={`p-4 rounded-2xl mb-4 transition-all duration-500 ${
                    isActive ? "bg-gray-800/50" : "bg-gray-800/30"
                  }`}>
                    <Icon
                      weight="duotone"
                      size={48}
                      className="transition-all duration-500"
                      style={{ 
                        color: isActive ? skill.color : '#e5e7eb',
                        filter: isActive ? `drop-shadow(0 0 12px ${skill.color}40)` : 'none'
                      }}
                    />
                  </div>

                  {/* Nome da skill com efeito */}
                  <span className={`font-semibold text-lg transition-all duration-500 ${
                    isActive ? "text-white" : "text-gray-300"
                  }`}>
                    {skill.name}
                  </span>

                  {/* Badge sutil com a cor */}
                  <div 
                    className={`w-2 h-2 rounded-full mt-3 transition-all duration-500 ${
                      isActive ? "opacity-100 scale-125" : "opacity-50"
                    }`}
                    style={{ backgroundColor: skill.color }}
                  ></div>
                </div>

                {/* Efeito de partículas no hover (opcional) */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700">
                  {[...Array(3)].map((_, i) => (
                    <div
                      key={i}
                      className="absolute w-1 h-1 rounded-full animate-ping"
                      style={{
                        backgroundColor: skill.color,
                        top: `${20 + i * 20}%`,
                        left: `${30 + i * 20}%`,
                        animationDelay: `${i * 0.2}s`
                      }}
                    ></div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Texto decorativo */}
        <div className="text-center mt-12">
          <p className="text-gray-400 text-sm font-light">
            Passe o mouse ou toque para ver as cores das tecnologias
          </p>
        </div>
      </div>
    </section>
  );
}