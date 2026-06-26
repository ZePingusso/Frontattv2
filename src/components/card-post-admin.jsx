// frontend/src/components/card-post-admin.jsx

import { Pencil, Trash2 } from "lucide-react";
import { Button } from "./ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "./ui/card";

export default function CardPostAdmin({
    post,
    confirmDelete,
    onEdit,
    onDelete,
    onRequestDelete,
    onCancelDelete,
}) {
    return (
        <Card>
            <CardHeader>
                <CardTitle>{post.title}</CardTitle>

                <CardDescription>
                    {post.category || "Sem categoria"}
                </CardDescription>
            </CardHeader>

            <CardContent className="flex flex-col gap-2 text-sm text-muted-foreground">
                <p className="line-clamp-3">
                    {post.content}
                </p>

                {post.author && (
                    <span>👤 {post.author.name || post.author.email}</span>
                )}

                {post.createdAt && (
                    <span>
                        📅{" "}
                        {new Date(post.createdAt).toLocaleDateString("pt-BR")}
                    </span>
                )}
            </CardContent>

            <CardFooter className="flex gap-2">
                {confirmDelete === post.id ? (
                    <>
                        <span className="flex-1 text-sm text-destructive">
                            Confirmar exclusão?
                        </span>

                        <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => onDelete(post.id)}
                        >
                            Sim
                        </Button>

                        <Button
                            size="sm"
                            variant="outline"
                            onClick={onCancelDelete}
                        >
                            Não
                        </Button>
                    </>
                ) : (
                    <>
                        <Button
                            size="sm"
                            variant="outline"
                            onClick={() => onEdit(post)}
                        >
                            <Pencil className="mr-1 size-3.5" />
                            Editar
                        </Button>

                        <Button
                            size="sm"
                            variant="destructive"
                            onClick={() => onRequestDelete(post.id)}
                        >
                            <Trash2 className="mr-1 size-3.5" />
                            Excluir
                        </Button>
                    </>
                )}
            </CardFooter>
        </Card>
    );
}