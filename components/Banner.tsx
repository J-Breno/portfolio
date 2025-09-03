import Image from "next/image";
import { useState, useEffect } from "react";

export function Banner() {
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    return (
        <section className="relative min-h-screen w-full overflow-hidden">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-[url('/img/banner1.jpg')] bg-cover bg-left bg-no-repeat scale-110"></div>
                <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/60 to-black/90"></div>
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/50 to-black"></div>
            </div>

            {isClient && (
                <div className="absolute inset-0">
                    {[...Array(15)].map((_, i) => (
                        <div
                            key={i}
                            className="absolute w-1 h-1 bg-[#FFAE00] rounded-full animate-float"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${i * 0.5}s`,
                                animationDuration: `${3 + Math.random() * 2}s`
                            }}
                        ></div>
                    ))}
                    
                    <div className="absolute inset-0 opacity-20">
                        <div className="absolute top-1/4 left-1/4 w-px h-20 bg-[#FFAE00]"></div>
                        <div className="absolute top-1/3 right-1/4 w-20 h-px bg-[#FFAE00]"></div>
                    </div>
                </div>
            )}

            <div className="relative z-10 container mx-auto px-4 min-h-screen flex items-center justify-center">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full max-w-6xl">
                    <div className="text-center lg:text-left space-y-6">
                        <div className="overflow-hidden">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-4 animate-slide-up">
                                Programador
                            </h1>
                        </div>
                        <div className="overflow-hidden">
                            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-[#FFAE00] mb-8 animate-slide-up delay-100">
                                Fullstack
                            </h1>
                        </div>
                        
                        <div className="overflow-hidden">
                            <h2 className="text-2xl md:text-4xl text-gray-300 font-light mb-8 animate-slide-up delay-200">
                                João <span className="text-white font-semibold">Breno</span>
                            </h2>
                        </div>

                        <div className="overflow-hidden">
                            <p className="text-lg md:text-xl text-gray-400 mb-8 leading-relaxed animate-slide-up delay-300">
                                Transformando ideias em soluções digitais inovadoras 
                                com tecnologia de ponta e design excepcional
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start animate-slide-up delay-400">
                            <a
                                href="#projects"
                                className="px-8 py-4 bg-[#FFAE00] text-black font-semibold rounded-lg hover:bg-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FFAE00]/30"
                            >
                                Ver Projetos
                            </a>
                            <a
                                href="#contact"
                                className="px-8 py-4 border-2 border-[#FFAE00] text-[#FFAE00] font-semibold rounded-lg hover:bg-[#FFAE00] hover:text-black transition-all duration-300 transform hover:scale-105"
                            >
                                Entrar em Contato
                            </a>
                        </div>
                    </div>

                    <div className="relative flex justify-center lg:justify-end">
                        <div className="relative">
                            <div className="absolute -inset-4 bg-[#FFAE00] rounded-full opacity-20 blur-xl animate-pulse"></div>
                            
                            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#FFAE00] shadow-2xl transform hover:scale-105 transition-transform duration-500">
                                <Image
                                    src="https://github.com/j-breno.png"
                                    alt="João Breno - Fullstack Developer"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                            
                            <div className="absolute -bottom-4 -right-4 bg-[#FFAE00] text-black px-4 py-2 rounded-full font-semibold text-sm animate-bounce">
                                Disponível!
                            </div>

                            <div className="absolute -top-4 -left-4 w-8 h-8 bg-[#FFAE00] rounded-full opacity-60 animate-ping"></div>
                            <div className="absolute top-8 -right-4 w-6 h-6 bg-[#FFAE00] rounded-full opacity-40 animate-pulse"></div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-[#FFAE00] rounded-full flex justify-center">
                    <div className="w-1 h-3 bg-[#FFAE00] rounded-full mt-2 animate-scroll"></div>
                </div>
            </div>

            <style jsx>{`
                @keyframes float {
                    0%, 100% { transform: translateY(0) rotate(0deg); }
                    50% { transform: translateY(-20px) rotate(10deg); }
                }
                @keyframes slide-up {
                    from { transform: translateY(50px); opacity: 0; }
                    to { transform: translateY(0); opacity: 1; }
                }
                @keyframes scroll {
                    0% { transform: translateY(0); opacity: 1; }
                    100% { transform: translateY(8px); opacity: 0; }
                }
                .animate-float { animation: float 3s ease-in-out infinite; }
                .animate-slide-up { animation: slide-up 1s ease-out forwards; }
                .animate-scroll { animation: scroll 2s infinite; }
                .delay-100 { animation-delay: 0.1s; }
                .delay-200 { animation-delay: 0.2s; }
                .delay-300 { animation-delay: 0.3s; }
                .delay-400 { animation-delay: 0.4s; }
            `}</style>
        </section>
    );
}