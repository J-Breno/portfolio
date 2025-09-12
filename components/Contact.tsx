import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { SendIcon, MailIcon, PhoneIcon, UserIcon, MessageCircleIcon, MapPinIcon, ClockIcon } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

export const contactSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  phone: z.string().min(8, "Informe um número válido"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

interface ContactProps {
  isDarkMode: boolean;
}

export default function Contact({ isDarkMode }: ContactProps) {
  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function onSubmit(data: ContactFormData) {
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) throw new Error("Erro ao enviar mensagem");
      toast.success("Mensagem enviada com sucesso!");
      reset();
    } catch (err) {
      console.error(err);
      toast.error("Erro ao enviar. Tente novamente.");
    }
  }

  if (!mounted) return null;

  return (
    <section 
      id="contato" 
      className={`w-full py-20 relative overflow-hidden ${isDarkMode 
        ? 'bg-gradient-to-br from-gray-900 via-black to-gray-900' 
        : 'bg-gradient-to-br from-blue-50 via-gray-50 to-gray-100'
      }`}
    >
      <div className="absolute top-0 left-0 w-full h-full opacity-10">
        <div className={`absolute top-1/4 left-1/4 w-96 h-96 rounded-full blur-3xl ${
          isDarkMode ? 'bg-[#FFAE00]/20' : 'bg-[#FFAE00]/10'
        }`}></div>
        <div className={`absolute bottom-1/3 right-1/4 w-80 h-80 rounded-full blur-3xl ${
          isDarkMode ? 'bg-purple-500/20' : 'bg-purple-400/10'
        }`}></div>
      </div>

      <div className="flex justify-center mb-16 relative z-10">
        <div className="relative">
          <h2 className={`text-5xl md:text-6xl font-bold text-center relative z-10 ${
            isDarkMode ? 'text-white' : 'text-gray-800'
          }`}>
            Vamos <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FFAE00] to-orange-500">Conversar</span>?
          </h2>
          <p className={`mt-4 text-lg text-center max-w-2xl mx-auto ${
            isDarkMode ? 'text-gray-300' : 'text-gray-600'
          }`}>
            Estou sempre aberto a discutir novos projetos, oportunidades criativas e parcerias.
          </p>
          <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-gradient-to-r from-[#FFAE00] to-orange-500 rounded-full"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 items-start">
          <div className="lg:col-span-2 space-y-8">
            <div className={`p-8 rounded-2xl backdrop-blur-sm border ${
              isDarkMode 
                ? 'bg-gray-800/30 border-gray-700/50' 
                : 'bg-white/50 border-gray-200/70'
            }`}>
              <h3 className={`text-2xl font-bold mb-6 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                Informações de Contato
              </h3>

              <div className="space-y-6">
                <div className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-gray-800/40 border border-gray-700/30 hover:border-[#FFAE00]/30' 
                    : 'bg-white/70 border border-gray-200/50 hover:border-[#FFAE00]/40'
                }`}>
                  <div className={`p-3 rounded-full ${
                    isDarkMode ? 'bg-[#FFAE00]/10' : 'bg-[#FFAE00]/15'
                  }`}>
                    <MailIcon className="w-6 h-6 text-[#FFAE00]" />
                  </div>
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Email</p>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      joao.breno85@hotmail.com
                    </p>
                  </div>
                </div>

                <div className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-gray-800/40 border border-gray-700/30 hover:border-[#FFAE00]/30' 
                    : 'bg-white/70 border border-gray-200/50 hover:border-[#FFAE00]/40'
                }`}>
                  <div className={`p-3 rounded-full ${
                    isDarkMode ? 'bg-[#FFAE00]/10' : 'bg-[#FFAE00]/15'
                  }`}>
                    <PhoneIcon className="w-6 h-6 text-[#FFAE00]" />
                  </div>
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Telefone</p>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      +55 (85) 99436-5305
                    </p>
                  </div>
                </div>

                <div className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-gray-800/40 border border-gray-700/30 hover:border-[#FFAE00]/30' 
                    : 'bg-white/70 border border-gray-200/50 hover:border-[#FFAE00]/40'
                }`}>
                  <div className={`p-3 rounded-full ${
                    isDarkMode ? 'bg-[#FFAE00]/10' : 'bg-[#FFAE00]/15'
                  }`}>
                    <MapPinIcon className="w-6 h-6 text-[#FFAE00]" />
                  </div>
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Localização</p>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      Fortaleza, CE - Brasil
                    </p>
                  </div>
                </div>

                <div className={`flex items-center gap-4 p-4 rounded-xl transition-all duration-300 hover:-translate-y-1 ${
                  isDarkMode 
                    ? 'bg-gray-800/40 border border-gray-700/30 hover:border-[#FFAE00]/30' 
                    : 'bg-white/70 border border-gray-200/50 hover:border-[#FFAE00]/40'
                }`}>
                  <div className={`p-3 rounded-full ${
                    isDarkMode ? 'bg-[#FFAE00]/10' : 'bg-[#FFAE00]/15'
                  }`}>
                    <ClockIcon className="w-6 h-6 text-[#FFAE00]" />
                  </div>
                  <div>
                    <p className={`text-sm ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>Disponibilidade</p>
                    <p className={`font-medium ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                      Resposta em até 24h
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <h4 className={`text-lg font-semibold mb-4 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                  Conecte-se comigo
                </h4>
                <div className="flex gap-3">
                  {[
                    { 
                      icon: "img/contact/github.svg", 
                      color: "hover:bg-gray-800", 
                      alt: "github", 
                      href: "https://github.com/J-Breno/",
                      bgColor: isDarkMode ? "bg-gray-800/60" : "bg-white/80"
                    },
                    { 
                      icon: "img/contact/linkedin.svg", 
                      color: "hover:bg-blue-600", 
                      alt: "linkedin", 
                      href: "https://www.linkedin.com/in/jo%C3%A3o-breno/",
                      bgColor: isDarkMode ? "bg-gray-800/60" : "bg-white/80"
                    },
                    { 
                      icon: "img/contact/instagram.svg", 
                      color: "hover:bg-pink-600", 
                      alt: "instagram", 
                      href: "https://www.instagram.com/jbrenojj",
                      bgColor: isDarkMode ? "bg-gray-800/60" : "bg-white/80"
                    }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.href}
                      className={`p-3 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg ${social.bgColor} border ${
                        isDarkMode ? 'border-gray-700/30' : 'border-gray-200/50'
                      }`}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="w-6 h-6 relative">
                        <Image 
                          src={social.icon} 
                          alt={social.alt} 
                          width={24} 
                          height={24}
                        />
                      </div>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="lg:col-span-3 relative">
            <div className={`absolute -inset-4 rounded-2xl blur-xl opacity-30 ${
              isDarkMode 
                ? 'bg-gradient-to-br from-[#FFAE00]/20 to-purple-500/20' 
                : 'bg-gradient-to-br from-[#FFAE00]/10 to-purple-400/10'
            }`}></div>
            
            <div className={`relative rounded-2xl backdrop-blur-sm border ${
              isDarkMode 
                ? 'bg-gray-800/30 border-gray-700/50' 
                : 'bg-white/50 border-gray-200/70'
            }`}>
              <form
                onSubmit={handleSubmit(onSubmit)}
                className="p-8 space-y-6"
              >
                <div className="text-center mb-6">
                  <h3 className={`text-2xl font-bold mb-2 ${isDarkMode ? 'text-white' : 'text-gray-800'}`}>
                    Envie uma mensagem
                  </h3>
                  <p className={isDarkMode ? 'text-gray-400' : 'text-gray-500'}>
                    Preencha o formulário abaixo e entrarei em contato o mais rápido possível
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="relative">
                    <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <UserIcon className="w-5 h-5" />
                    </div>
                    <Input
                      placeholder="Nome*"
                      {...register("name")}
                      className={`w-full h-12 pl-10 rounded-lg transition-all ${
                        isDarkMode 
                          ? 'bg-gray-700/30 border-gray-600 text-white focus:border-[#FFAE00] focus:ring-[#FFAE00]' 
                          : 'bg-white/70 border-gray-300 text-gray-800 focus:border-[#FFAE00] focus:ring-[#FFAE00]'
                      }`}
                    />
                    {errors.name && (
                      <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                    )}
                  </div>

                  <div className="relative">
                    <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                      isDarkMode ? 'text-gray-400' : 'text-gray-500'
                    }`}>
                      <PhoneIcon className="w-5 h-5" />
                    </div>
                    <Input
                      placeholder="Telefone*"
                      {...register("phone")}
                      className={`w-full h-12 pl-10 rounded-lg transition-all ${
                        isDarkMode 
                          ? 'bg-gray-700/30 border-gray-600 text-white focus:border-[#FFAE00] focus:ring-[#FFAE00]' 
                          : 'bg-white/70 border-gray-300 text-gray-800 focus:border-[#FFAE00] focus:ring-[#FFAE00]'
                      }`}
                    />
                    {errors.phone && (
                      <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                    )}
                  </div>
                </div>

                <div className="relative">
                  <div className={`absolute left-3 top-1/2 transform -translate-y-1/2 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <MailIcon className="w-5 h-5" />
                  </div>
                  <Input
                    placeholder="E-mail*"
                    type="email"
                    {...register("email")}
                    className={`w-full h-12 pl-10 rounded-lg transition-all ${
                      isDarkMode 
                        ? 'bg-gray-700/30 border-gray-600 text-white focus:border-[#FFAE00] focus:ring-[#FFAE00]' 
                        : 'bg-white/70 border-gray-300 text-gray-800 focus:border-[#FFAE00] focus:ring-[#FFAE00]'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                  )}
                </div>

                <div className="relative">
                  <div className={`absolute left-3 top-4 ${
                    isDarkMode ? 'text-gray-400' : 'text-gray-500'
                  }`}>
                    <MessageCircleIcon className="w-5 h-5" />
                  </div>
                  <Textarea
                    placeholder="Sua mensagem* (mínimo 10 caracteres)"
                    {...register("message")}
                    className={`w-full min-h-[140px] pl-10 rounded-lg transition-all resize-none ${
                      isDarkMode 
                        ? 'bg-gray-700/30 border-gray-600 text-white focus:border-[#FFAE00] focus:ring-[#FFAE00]' 
                        : 'bg-white/70 border-gray-300 text-gray-800 focus:border-[#FFAE00] focus:ring-[#FFAE00]'
                    }`}
                  />
                  {errors.message && (
                    <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                  )}
                </div>

                <div className="flex justify-center pt-4">
                  <Button 
                    type="submit" 
                    disabled={isSubmitting} 
                    className="group w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#FFAE00] to-orange-500 text-black font-semibold rounded-lg hover:from-orange-400 hover:to-[#FFAE00] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FFAE00]/30 disabled:opacity-50 disabled:transform-none relative overflow-hidden"
                  >
                    <span className="relative z-10 flex items-center gap-2">
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                          Enviando...
                        </>
                      ) : (
                        <>
                          <SendIcon className="w-4 h-4" />
                          ENVIAR MENSAGEM
                        </>
                      )}
                    </span>
                    <div className="absolute inset-0 bg-white/20 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}