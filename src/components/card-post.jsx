// frontend/src/components/card-post.jsx

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function CardPost({ post }) {
  return (
    <Card className="flex flex-col">
      <CardHeader>
        <CardTitle className="text-2xl">
          {post.title}
        </CardTitle>

        <CardDescription>
          {post.category}
        </CardDescription>
      </CardHeader>

      <CardContent className="flex-1">
        <p className="text-sm text-muted-foreground line-clamp-4">
          {post.content}
        </p>
      </CardContent>

      <CardFooter>
        <Button asChild className="w-full">
          <Link href={`/posts/${post.id}`}>
            Ler artigo
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}