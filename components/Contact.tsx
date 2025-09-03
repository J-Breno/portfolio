import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { toast } from "sonner";
import { SendIcon, MailIcon, PhoneIcon, UserIcon, MessageCircleIcon } from "lucide-react";
import Image from "next/image";

export const contactSchema = z.object({
  name: z.string().min(1, "O nome é obrigatório"),
  phone: z.string().min(8, "Informe um número válido"),
  email: z.string().email("E-mail inválido"),
  message: z.string().min(10, "A mensagem deve ter pelo menos 10 caracteres"),
});

export type ContactFormData = z.infer<typeof contactSchema>;

export default function Contact() {
  const {
    register,
    handleSubmit,
    reset, 
    formState: { errors, isSubmitting },
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

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

  return (
    <section id="contact" className="w-full py-20 bg-gradient-to-br from-gray-900 via-black to-gray-900">
      <div className="flex justify-center mb-16">
        <div className="relative">
          <h2 className="text-5xl font-bold text-white text-center relative z-10">
            Contato
          </h2>
          <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-gradient-to-r from-[#FFAE00] to-orange-500 rounded-full"></div>
          <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-[#FFAE00]/20 blur-sm"></div>
        </div>
      </div>

      <div className="container mx-auto px-4 max-w-4xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <div className="space-y-8">
            <div className="text-center lg:text-left">
              <h3 className="text-2xl font-bold text-white mb-4">Vamos conversar?</h3>
              <p className="text-gray-300 text-lg">
                Estou sempre aberto a discutir novos projetos, oportunidades criativas e parcerias.
              </p>
            </div>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-[#FFAE00]/30 transition-all duration-300">
                <div className="p-3 bg-[#FFAE00]/10 rounded-full">
                  <MailIcon className="w-6 h-6 text-[#FFAE00]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Email</p>
                  <p className="text-white font-medium">joao.breno85@hotmail.com</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-[#FFAE00]/30 transition-all duration-300">
                <div className="p-3 bg-[#FFAE00]/10 rounded-full">
                  <PhoneIcon className="w-6 h-6 text-[#FFAE00]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Telefone</p>
                  <p className="text-white font-medium">+55 (85) 99436-5305</p>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 bg-gray-800/50 rounded-xl border border-gray-700/30 hover:border-[#FFAE00]/30 transition-all duration-300">
                <div className="p-3 bg-[#FFAE00]/10 rounded-full">
                  <MessageCircleIcon className="w-6 h-6 text-[#FFAE00]" />
                </div>
                <div>
                  <p className="text-gray-400 text-sm">Disponibilidade</p>
                  <p className="text-white font-medium">Resposta em até 24h</p>
                </div>
              </div>
            </div>

            <div className="flex gap-4 justify-center lg:justify-start">
              {[
                { icon: "img/contact/github.svg", color: "hover:bg-gray-800", alt: "github", href: "https://github.com/J-Breno/" },
                { icon: "img/contact/linkedin.svg", color: "hover:bg-blue-600", alt: "likedin", href: "https://www.linkedin.com/in/jo%C3%A3o-breno/" },
                { icon: "img/contact/instagram.svg", color: "hover:bg-pink-600", alt: "instagram", href: "https://www.instagram.com/jbrenojj" }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-3 bg-gray-800 rounded-xl transition-all duration-300 hover:scale-110 hover:shadow-lg"
                  target="_blank"
                >
                  <div className="w-6 h-6 bg-purple-300 rounded-full">
                    <Image src={social.icon} alt={social.alt} width={40} height={40}/>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 bg-gradient-to-br from-[#FFAE00]/5 to-purple-500/5 rounded-2xl blur-xl opacity-50"></div>
            <div className="absolute inset-0 bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl border border-gray-700/30 backdrop-blur-sm"></div>
            
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="relative z-10 p-8 space-y-6"
            >
              <div className="text-center mb-6">
                <h3 className="text-2xl font-bold text-white mb-2">Envie uma mensagem</h3>
                <p className="text-gray-400">Responderei o mais rápido possível</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <UserIcon className="w-5 h-5 text-gray-400" />
                  </div>
                  <Input
                    placeholder="Nome*"
                    {...register("name")}
                    className="w-full h-12 bg-gray-700/50 border-gray-600 text-white pl-10 rounded-lg focus:border-[#FFAE00] focus:ring-[#FFAE00] transition-all"
                  />
                  {errors.name && (
                    <p className="text-red-400 text-sm mt-1">{errors.name.message}</p>
                  )}
                </div>

                <div className="relative">
                  <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                    <PhoneIcon className="w-5 h-5 text-gray-400" />
                  </div>
                  <Input
                    placeholder="Telefone*"
                    {...register("phone")}
                    className="w-full h-12 bg-gray-700/50 border-gray-600 text-white pl-10 rounded-lg focus:border-[#FFAE00] focus:ring-[#FFAE00] transition-all"
                  />
                  {errors.phone && (
                    <p className="text-red-400 text-sm mt-1">{errors.phone.message}</p>
                  )}
                </div>
              </div>

              <div className="relative">
                <div className="absolute left-3 top-1/2 transform -translate-y-1/2">
                  <MailIcon className="w-5 h-5 text-gray-400" />
                </div>
                <Input
                  placeholder="E-mail*"
                  type="email"
                  {...register("email")}
                  className="w-full h-12 bg-gray-700/50 border-gray-600 text-white pl-10 rounded-lg focus:border-[#FFAE00] focus:ring-[#FFAE00] transition-all"
                />
                {errors.email && (
                  <p className="text-red-400 text-sm mt-1">{errors.email.message}</p>
                )}
              </div>

              <div className="relative">
                <div className="absolute left-3 top-4">
                  <MessageCircleIcon className="w-5 h-5 text-gray-400" />
                </div>
                <Textarea
                  placeholder="Sua mensagem* (mínimo 10 caracteres)"
                  {...register("message")}
                  className="w-full min-h-[120px] bg-gray-700/50 border-gray-600 text-white pl-10 rounded-lg focus:border-[#FFAE00] focus:ring-[#FFAE00] transition-all resize-none"
                />
                {errors.message && (
                  <p className="text-red-400 text-sm mt-1">{errors.message.message}</p>
                )}
              </div>

              <div className="flex justify-center pt-4">
                <Button 
                  type="submit" 
                  disabled={isSubmitting} 
                  className="w-full md:w-auto px-8 py-3 bg-gradient-to-r from-[#FFAE00] to-orange-500 text-black font-semibold rounded-lg hover:from-orange-400 hover:to-[#FFAE00] transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-[#FFAE00]/30 disabled:opacity-50 disabled:transform-none"
                >
                  {isSubmitting ? (
                    <div className="flex items-center gap-2">
                      <div className="w-4 h-4 border-2 border-black border-t-transparent rounded-full animate-spin"></div>
                      Enviando...
                    </div>
                  ) : (
                    <div className="flex items-center gap-2">
                      <SendIcon className="w-4 h-4" />
                      ENVIAR MENSAGEM
                    </div>
                  )}
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}