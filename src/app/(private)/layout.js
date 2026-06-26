import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";

import { TooltipProvider } from "@/components/ui/tooltip";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import { Separator } from "@/components/ui/separator";
import { AppSidebar } from "@/components/app-sidebar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Painel Administrativo",
  description: "Área restrita do sistema",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-slate-100`}
      >
        <TooltipProvider>
          <SidebarProvider>
            <AppSidebar />

            <SidebarInset>
              {/* Cabeçalho */}
              <header className="sticky top-0 z-30 flex h-16 items-center border-b bg-white px-4 shadow-sm">
                <SidebarTrigger />

                <Separator
                  orientation="vertical"
                  className="mx-4 h-6"
                />

                <div>
                  <h1 className="text-lg font-semibold">
                    Painel Administrativo
                  </h1>
                  <p className="text-xs text-muted-foreground">
                    Gerencie seu conteúdo
                  </p>
                </div>
              </header>

              {/* Conteúdo */}
              <main className="min-h-[calc(100vh-64px)] p-6">
                <div className="mx-auto max-w-7xl">
                  {children}
                </div>
              </main>
            </SidebarInset>
          </SidebarProvider>
        </TooltipProvider>
      </body>
    </html>
  );
}