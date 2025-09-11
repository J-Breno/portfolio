// layout.tsx
import type { Metadata } from "next";
import "./globals.css";
import { Toaster } from "sonner";
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';

export const metadata: Metadata = {
  title: "João Breno - Desenvolvedor Full Stack",
  description: "Portfólio de João Breno - Desenvolvedor Full Stack especializado em React, Next.js e TypeScript",
  keywords: "desenvolvedor, full stack, react, next.js, typescript, portfolio",
  authors: [{ name: "João Breno" }],
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body className="antialiased scroll-smooth">
        {children}
        <Toaster 
          richColors 
          position="bottom-right" 
          toastOptions={{
            classNames: {
              toast: '!rounded-xl !font-sans',
              title: '!font-medium',
            },
          }}
        />
      </body>
    </html>
  );
}