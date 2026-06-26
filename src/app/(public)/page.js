
import { Button } from "@/components/ui/button";
import Feed from "@/components/ui/feed";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-6 py-10">
      {/* Hero */}
      <section className="mb-12 overflow-hidden rounded-2xl bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 p-10 text-white">
        <span className="rounded-full bg-white/20 px-3 py-1 text-sm font-medium">
          Blog Masculino
        </span>

        <h1 className="mt-5 text-5xl font-extrabold leading-tight">
          Estilo, saúde, carreira e tecnologia para homens modernos.
        </h1>

        <p className="mt-5 max-w-2xl text-lg text-slate-300">
          Conteúdo sobre moda, cuidados pessoais, produtividade,
          desenvolvimento profissional, relacionamentos e tudo que faz parte
          do universo masculino.
        </p>

        <div className="mt-8 flex gap-4">
          <Button>Ler artigos</Button>
          <Button variant="outline">Categorias</Button>
        </div>
      </section>

      {/* Destaques */}
      <section className="mb-12">
        <h2 className="mb-6 text-3xl font-bold text-slate-900">
          Destaques da semana
        </h2>

        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
            <div className="mb-4 h-40 rounded-lg bg-slate-200"></div>

            <span className="text-sm font-semibold text-blue-600">
              Estilo
            </span>

            <h3 className="mt-2 text-xl font-bold">
              10 peças essenciais para um guarda-roupa masculino
            </h3>

            <p className="mt-3 text-slate-600">
              Aprenda a montar combinações versáteis para qualquer ocasião.
            </p>
          </article>

          <article className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
            <div className="mb-4 h-40 rounded-lg bg-slate-200"></div>

            <span className="text-sm font-semibold text-green-600">
              Saúde
            </span>

            <h3 className="mt-2 text-xl font-bold">
              Hábitos simples para melhorar sua qualidade de vida
            </h3>

            <p className="mt-3 text-slate-600">
              Alimentação, exercícios e rotina para manter o bem-estar.
            </p>
          </article>

          <article className="rounded-xl border bg-white p-6 shadow-sm transition hover:shadow-lg">
            <div className="mb-4 h-40 rounded-lg bg-slate-200"></div>

            <span className="text-sm font-semibold text-orange-600">
              Tecnologia
            </span>

            <h3 className="mt-2 text-xl font-bold">
              Gadgets indispensáveis para produtividade
            </h3>

            <p className="mt-3 text-slate-600">
              Ferramentas e acessórios que facilitam o dia a dia.
            </p>
          </article>
        </div>
      </section>
    </main>
  );
}
