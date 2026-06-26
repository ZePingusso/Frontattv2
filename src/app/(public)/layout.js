import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import TopBar from "@/components/ui/topbarmenu";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Man's World",
  description: "Blog sobre estilo, tecnologia, saúde e lifestyle masculino.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br" className="h-full scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} min-h-screen bg-slate-100 antialiased`}
      >
        {/* Barra superior */}
        <TopBar />

        {/* Conteúdo principal */}
        <main className="pt-20 min-h-screen">
          {children}
        </main>

        {/* Rodapé */}
        <footer className="border-t bg-white">
          <div className="mx-auto max-w-7xl px-6 py-8 text-center text-sm text-slate-500">
            © {new Date().getFullYear()} Man's World. Todos os direitos
            reservados.
          </div>
        </footer>
      </body>
    </html>
  );
}