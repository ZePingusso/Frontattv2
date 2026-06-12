import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { MessageCircle, Heart, ShieldCheck, ArrowRight } from "lucide-react";

export default function Home() {
  return (
    <div className="max-w-5xl mx-auto space-y-12 pb-20">
      
      {/* Seção de Impacto / Hero */}
      <section className="bg-slate-900 text-white rounded-3xl p-8 md:p-16 text-center space-y-6 shadow-2xl">
        <h1 className="text-3xl md:text-5xl font-bold tracking-tight">
          Saúde mental masculina: <br />
          <span className="text-blue-400">Silêncio não é força.</span>
        </h1>
        <p className="text-slate-300 text-lg max-w-2xl mx-auto leading-relaxed">
          Um espaço seguro para homens entenderem a depressão, compartilharem histórias e encontrarem o caminho para o bem-estar.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Button size="lg" className="bg-blue-600 hover:bg-blue-700 text-white">
            Ler Artigos Recentes
          </Button>
          <Button size="lg" variant="outline" className="text-black border-white hover:bg-white/10">
            Preciso de Ajuda Agora
          </Button>
        </div>
      </section>

      {/* Grid de Categorias / Pilares */}
      <div className="grid gap-6 md:grid-cols-3">
        <div className="flex flex-col items-center text-center p-6 space-y-3">
          <div className="p-3 bg-blue-100 rounded-full text-blue-600">
            <ShieldCheck size={28} />
          </div>
          <h3 className="font-bold text-xl">Informação Real</h3>
          <p className="text-slate-600 text-sm">Entenda a ciência e os sinais da depressão no público masculino.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 space-y-3">
          <div className="p-3 bg-red-100 rounded-full text-red-600">
            <Heart size={28} />
          </div>
          <h3 className="font-bold text-xl">Relatos</h3>
          <p className="text-slate-600 text-sm">Histórias de homens que enfrentaram a sombra e encontraram a luz.</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 space-y-3">
          <div className="p-3 bg-green-100 rounded-full text-green-600">
            <MessageCircle size={28} />
          </div>
          <h3 className="font-bold text-xl">Comunidade</h3>
          <p className="text-slate-600 text-sm">Você não está sozinho nessa jornada. Vamos conversar?</p>
        </div>
      </div>

      <hr className="border-slate-200" />

      {/* Feed de Artigos (Exemplo) */}
      <section className="space-y-8">
        <div className="flex justify-between items-end">
          <h2 className="text-3xl font-bold text-slate-900">Leituras Essenciais</h2>
          <Button variant="link" className="text-blue-600 p-0">Ver todos <ArrowRight className="ml-1 h-4 w-4" /></Button>
        </div>

        <div className="grid gap-8 md:grid-cols-2">
          {/* Card de Artigo 1 */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="h-48 bg-slate-200 animate-pulse" /> {/* Placeholder para imagem */}
            <CardHeader>
              <CardTitle className="text-xl">Como a depressão se manifesta em homens?</CardTitle>
              <CardDescription>Muitas vezes ela não aparece como tristeza, mas como irritabilidade.</CardDescription>
            </CardHeader>
          </Card>

          {/* Card de Artigo 2 */}
          <Card className="overflow-hidden border-none shadow-lg hover:shadow-xl transition-shadow cursor-pointer">
            <div className="h-48 bg-slate-200 animate-pulse" />
            <CardHeader>
              <CardTitle className="text-xl">5 Passos para ajudar um amigo</CardTitle>
              <CardDescription>Aprenda a ouvir sem julgar e a oferecer o apoio necessário.</CardDescription>
            </CardHeader>
          </Card>
        </div>
      </section>

      {/* Banner de Emergência */}
      <section className="bg-red-50 border border-red-100 rounded-2xl p-6 text-center">
        <p className="text-red-800 font-medium">
          Está passando por um momento difícil? Ligue para o <strong>CVV no 188</strong>. O atendimento é gratuito, sigiloso e disponível 24h.
        </p>
      </section>
    </div>
  );
}