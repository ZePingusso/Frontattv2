"use client";

import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
} from "./ui/sheet";

export default function PostForm({
  editing,
  sheetOpen,
  setSheetOpen,
  form,
  setForm,
  error,
  saving,
  handleSubmit,
}) {
  // 🔒 proteção contra undefined (causa do erro)
  const safeForm = {
    title: form?.title ?? "",
    category: form?.category ?? "",
    image: form?.image ?? "",
    content: form?.content ?? "",
  };

  function updateField(field, value) {
    setForm({
      ...safeForm,
      [field]: value,
    });
  }

  return (
    <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
      <SheetContent className="overflow-y-auto">
        <SheetHeader>
          <SheetTitle>
            {editing ? "Editar Post" : "Novo Post"}
          </SheetTitle>

          <SheetDescription>
            {editing
              ? "Altere as informações do post."
              : "Preencha os dados para publicar um novo artigo."}
          </SheetDescription>
        </SheetHeader>

        <form onSubmit={handleSubmit} className="mt-6 flex flex-col gap-5">
          {error && (
            <p className="text-sm text-destructive">{error}</p>
          )}

          <div className="grid gap-2">
            <Label htmlFor="post-title">Título</Label>
            <Input
              id="post-title"
              value={safeForm.title}
              onChange={(e) => updateField("title", e.target.value)}
              placeholder="Ex: 10 dicas de moda masculina"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="post-category">Categoria</Label>
            <Input
              id="post-category"
              value={safeForm.category}
              onChange={(e) => updateField("category", e.target.value)}
              placeholder="Ex: Moda"
            />
          </div>

          <div className="grid gap-2">
            <Label htmlFor="post-content">Conteúdo</Label>

            <textarea
              id="post-content"
              rows={8}
              value={safeForm.content}
              onChange={(e) => updateField("content", e.target.value)}
              className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm"
              placeholder="Escreva seu post..."
            />
          </div>

          <Button type="submit" disabled={saving} className="mt-2">
            {saving
              ? "Salvando..."
              : editing
              ? "Salvar Alterações"
              : "Publicar Post"}
          </Button>
        </form>
      </SheetContent>
    </Sheet>
  );
}