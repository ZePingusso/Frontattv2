
import { Button } from '@/components/ui/button';
import Feed from '@/components/ui/feed';

export default function Home() {
  return (
    <main className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 w-full">
      {/* Cabeçalho fixo no layout */}
      <header>
        <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight">
          Esboço
        </h1>
        <p className="mt-4 text-lg text-gray-600">
          Este cabeçalho e os botões agora fazem parte do Layout global.
        </p>
      </header>
      <Feed />

      {/* Botões fixos no layout */}
      <div className="mt-8 flex gap-4">
        <Button>Button 1</Button>
        <Button variant="outline">Button 2</Button>
      </div>

      {/* Conteúdo específico da página */}
      <div className="mt-12">
        <h2 className="text-2xl font-bold">Conteúdo da Página</h2>
        <p>Esse conteúdo muda conforme a rota.</p>
      </div>
    </main>
  );
}
