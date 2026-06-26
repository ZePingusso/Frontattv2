"use client";

import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";
import CardPost from "@/components/card-post";

const API = "http://localhost:5500/api/posts";

export default function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPosts();
  }, []);

  async function fetchPosts() {
    try {
      setLoading(true);

      const res = await fetch(API);
      const data = await res.json();

      setPosts(data);
    } catch (error) {
      console.error("Erro ao buscar posts:", error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="flex flex-col gap-8 py-12">
      <div className="text-center">
        <h1 className="text-4xl font-extrabold">
          Últimos Posts
        </h1>

        <p className="mt-2 text-muted-foreground">
          Confira os artigos mais recentes do BlogMens.
        </p>
      </div>

      {loading ? (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <Skeleton key={i} className="h-72 rounded-xl" />
          ))}
        </div>
      ) : posts.length === 0 ? (
        <p className="text-center text-sm text-muted-foreground">
          Nenhum post publicado ainda.
        </p>
      ) : (
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <CardPost
              key={post.id}
              post={post}
            />
          ))}
        </div>
      )}
    </div>
  );
}