import Image from "next/image";

export function About() {
  return (
    <section id="about" className="w-full py-16 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="flex justify-center mb-12">
          <div className="relative">
            <h2 className="text-5xl font-bold text-white text-center relative z-10">
              Sobre <span className="text-[#FFAE00]">mim</span>
            </h2>
            <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-20 h-1 bg-gradient-to-r from-[#FFAE00] to-orange-500 rounded-full"></div>
            <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-28 h-1 bg-[#FFAE00]/20 blur-sm"></div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8 relative">
            <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#FFAE00]/10 rounded-full blur-xl"></div>
            
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FFAE00]/5 to-transparent rounded-xl blur-lg opacity-50"></div>
              <p className="text-lg md:text-xl text-white leading-relaxed font-light relative z-10">
                Olá, eu sou o Breno, <strong className="font-semibold text-[#FFAE00] bg-[#FFAE00]/10 px-1 rounded">programador fullstack</strong> apaixonado por tecnologia e pela criação de soluções inteligentes. Gosto de desenvolver projetos completos que impactem positivamente a experiência do usuário.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-transparent to-[#FFAE00]/5 rounded-xl blur-lg opacity-50"></div>
              <p className="text-lg md:text-xl text-white leading-relaxed font-light relative z-10">
                Ao longo da minha trajetória, trabalhei em <strong className="font-semibold text-[#FFAE00]">projetos como e-commerces, sistemas de produtividade</strong> e <strong className="font-semibold text-[#FFAE00]">aplicações completas</strong>, consolidando minhas habilidades práticas e aprendendo a lidar com os desafios do desenvolvimento de software.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-[#FFAE00]/5 to-transparent rounded-xl blur-lg opacity-50"></div>
              <p className="text-lg md:text-xl text-white leading-relaxed font-light relative z-10">
                Tive experiência como <strong className="font-semibold text-[#FFAE00]">estagiário em análise de dados</strong> e atualmente atuo como <strong className="font-semibold text-[#FFAE00]">analista de sistemas</strong> em uma empresa de redes de computadores. Estou pronto para contribuir com soluções inovadoras e agregar valor desde o primeiro dia.
              </p>
            </div>

            <div className="flex gap-4 mt-8">
              {[
                { href: "https://github.com/J-Breno/", src: "img/contact/github.svg", alt: "GitHub", color: "hover:bg-gray-800" },
                { href: "https://www.linkedin.com/in/jo%C3%A3o-breno/", src: "img/contact/linkedin.svg", alt: "LinkedIn", color: "hover:bg-blue-600" },
                { href: "https://www.instagram.com/jbrenojj", src: "img/contact/instagram.svg", alt: "Instagram", color: "hover:bg-pink-600" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative p-4 bg-gray-800 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br from-[#FFAE00] to-orange-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300`}></div>
                  <Image
                    src={social.src}
                    alt={social.alt}
                    width={32}
                    height={32}
                    className="relative z-10 transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute -inset-2 bg-[#FFAE00]/20 rounded-xl blur-md opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative">
              <div className="w-80 h-80 mx-auto bg-gradient-to-br from-[#FFAE00]/20 to-orange-500/20 rounded-full flex items-center justify-center">
                <div className="w-64 h-64 bg-gradient-to-br from-[#FFAE00]/10 to-orange-500/10 rounded-full flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-[#FFAE00]/5 to-orange-500/5 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <div className="w-20 h-20 mx-auto bg-[#FFAE00]/10 rounded-full flex items-center justify-center mb-4">
                        <svg className="w-10 h-10 text-[#FFAE00]" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M12 14l9-5-9-5-9 5 9 5z"/>
                          <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"/>
                        </svg>
                      </div>
                      <span className="text-[#FFAE00] font-semibold">FullStack Developer</span>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="absolute top-4 left-4 w-8 h-8 bg-[#FFAE00]/20 rounded-full animate-bounce"></div>
              <div className="absolute bottom-8 right-4 w-6 h-6 bg-[#FFAE00]/30 rounded-full animate-pulse"></div>
              <div className="absolute top-12 right-8 w-4 h-4 bg-[#FFAE00]/40 rounded-full animate-ping"></div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16">
          {[
            { number: "2+", label: "Anos de Experiência" },
            { number: "15+", label: "Projetos Concluídos" },
            { number: "8+", label: "Tecnologias Dominadas" },
            { number: "100%", label: "Comprometimento" }
          ].map((stat, index) => (
            <div key={index} className="text-center p-6 bg-gray-800/50 rounded-xl backdrop-blur-sm border border-gray-700/30 hover:border-[#FFAE00]/30 transition-all duration-300">
              <div className="text-3xl font-bold text-[#FFAE00] mb-2">{stat.number}</div>
              <div className="text-gray-300 text-sm">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}