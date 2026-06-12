import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import TopBar from '@/components/ui/topbarmenu';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Meu Projeto",
  description: "Layout com Menu superior",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="h-full">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          antialiased 
          min-h-screen 
          bg-slate-50
        `}
      >
        {/* Menu fixo */}
        <TopBar />


        {/* Conteúdo das páginas */}
        {children}
      </body>
    </html>
  );
}